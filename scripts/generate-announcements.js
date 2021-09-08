import sanity from '@sanity/client';
import dotenv from 'dotenv';
import sanityImage from '@sanity/image-url';
import fetch from 'node-fetch';
import { promises as fsp } from 'fs';

dotenv.config({ path: '../.env' });

const client = sanity({
	apiVersion: '2021-09-07',
	projectId: process.env.SANITY_PROJECT_ID,
	dataset: process.env.SANITY_DATASET,
	token: process.env.SANITY_TOKEN,
	useCdn: false,
});

const images = sanityImage(client);

async function main() {
	/** @type {import('./types').SanityAnnouncement[]} */
	const events = await client.fetch('*[_type == "announcement"]');

	/** @type {import('./types').Announcement[]} */
	const finalEvents = [];

	// Clear old images
	const existingImages = (await fsp.readdir('../static/announcements-media/')).map(
		(img) => `../static/announcements-media/${img}`
	);

	for (const img of existingImages) fsp.unlink(img);

	// Now process images
	for (const event of events) {
		/** @type {import('./types').Announcement} */
		const eventObj = {
			datetime: event.date_time,
			eventDescription: event.event_description,
			eventName: event.event_name,
			link: event.link,
			name: event.name,
			past: event.past,
		};

		if (event.image?.asset) {
			const image = images
				.image(event.image?.asset)
				.height(200)
				.fit('max')
				.format('webp')
				.quality(90)
				.url();

			// Now download and write to file
			const imgBuffer = await (await fetch(image)).buffer();
			fsp.writeFile(`../static/announcements-media/${event._id}.webp`, imgBuffer);

			eventObj.image = { webp: `/announcements-media/${event._id}.webp` };
		}

		finalEvents.push(eventObj);
	}

	const activeEvents = finalEvents.filter(({ past }) => !past);
	const pastEvents = finalEvents.filter(({ past }) => past);

	fsp.writeFile('../static/data/active-events.json', JSON.stringify(activeEvents));
	fsp.writeFile('../static/data/past-events.json', JSON.stringify(pastEvents));
}

main();

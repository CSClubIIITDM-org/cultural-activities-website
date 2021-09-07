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
	const query = await client.fetch('*[_type == "announcement"]');

	/** @type {import('./types').Announcement[]} */
	const finalEvents = [];

	// Clear old images
	const existingImages = (await fsp.readdir('../static/announcements-media/')).map(
		(img) => `../static/announcements-media/${img}`
	);

	for (const img of existingImages) fsp.unlink(img);

	// Now process images
	for (const {
		date_time,
		past,
		image: eventImage,
		link,
		name: clubName,
		event_description,
		event_name,
		_id,
	} of query) {
		/** @type {import('./types').Announcement} */
		const eventObj = {
			datetime: date_time,
			eventDescription: event_description,
			eventName: event_name,
			link,
			name: clubName,
			past,
		};

		if (eventImage?.asset) {
			const image = images
				.image(eventImage?.asset)
				.height(200)
				.fit('max')
				.format('webp')
				.quality(90)
				.url();

			// Now download and write to file
			const imgBuffer = await (await fetch(image)).buffer();
			fsp.writeFile(`../static/announcements-media/${_id}.webp`, imgBuffer);

			eventObj.image = { webp: `/announcements-media/${_id}.webp` };
		}

		finalEvents.push(eventObj);
	}

	const activeEvents = finalEvents.filter(({ past }) => !past);
	const pastEvents = finalEvents.filter(({ past }) => past);

	fsp.writeFile('../static/data/active-events.json', JSON.stringify(activeEvents));
	fsp.writeFile('../static/data/past-events.json', JSON.stringify(pastEvents));
}

main();

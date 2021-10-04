import sanity from '@sanity/client';
import dotenv from 'dotenv';
import { promises as fsp } from 'fs';

dotenv.config({ path: '../.env' });

const client = sanity({
	apiVersion: '2021-09-07',
	projectId: process.env.SANITY_PROJECT_ID,
	dataset: process.env.SANITY_DATASET,
	token: process.env.SANITY_TOKEN,
	useCdn: false,
});

async function main() {
	/** @type {import('./types').SanityAnnouncement[]} */
	const events = await client.fetch('*[_type == "event"]');

	console.log(events);

	/** @type {import('./types').Event[]} */
	const finalEvents = [];

	// Now process images
	for (const event of events) {
		/** @type {import('./types').Event} */
		const eventObj = {
			datetime: event.date_time,
			eventDescription: event.event_description,
			eventName: event.event_name,
			link: event.link,
			name: event.name,
		};

		finalEvents.push(eventObj);
	}

	fsp.writeFile(
		'../static/data/calendar.json',
		JSON.stringify(finalEvents.sort((a, b) => +new Date(b.datetime) - +new Date(a.datetime)))
	);
}

main();

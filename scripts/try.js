import { Client } from '@notionhq/client';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config({ path: '../.env' });

const notion = new Client({
	auth: 'secret_688jhtfP6KwLLANz4wHITTNGDmhfwMwuYoJgM6D2El9',
	notionVersion: '2021-08-16',
	fetch,
});

async function main() {
	const x = await notion.databases.query({
		database_id: '1112a435b9b64358a57031d77f3671da',
	});

	// @ts-ignore
	console.log(x.results[0].properties);
}

main();

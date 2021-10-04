export default {
	name: 'announcement',
	title: 'Announcement',
	type: 'document',
	fields: [
		{
			name: 'name',
			title: 'Club Name',
			type: 'string',
			options: {
				list: [
					{ title: 'Art Club', value: 'art' },
					{ title: 'Cultural Affairs', value: 'cultural-affairs' },
					{ title: 'Dance Club', value: 'dance' },
					{ title: 'EPIC', value: 'epic' },
					{ title: 'Media Club', value: 'media' },
					{ title: 'Music Club', value: 'music' },
					{ title: 'Tamizh Saalaram', value: 'tamizh-saalaram' },
				],
			},
		},
		{
			name: 'event_name',
			title: 'Event Name',
			type: 'string',
		},
		{
			name: 'event_description',
			title: 'Event Description',
			type: 'string',
		},
		{
			name: 'date_time',
			title: 'Date Time',
			type: 'datetime',
		},
		{
			name: 'link',
			title: 'Link',
			type: 'url',
		},
		{
			name: 'past',
			title: 'Mark as past event?',
			type: 'boolean',
		},
	],
	initialValue: {
		past: false,
	},
};

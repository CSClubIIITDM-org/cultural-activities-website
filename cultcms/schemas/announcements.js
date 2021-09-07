export default {
	name: 'announcement',
	title: 'Announcement',
	type: 'document',
	fields: [
		{
			name: 'name',
			title: 'Club Name',
			type: 'string',
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
		{
			name: 'image',
			title: 'Image',
			type: 'image',
			options: {
				hotspot: true,
			},
		},
	],
	initialValue: {
		past: false,
	},
	preview: {
		select: {
			title: 'name',
			media: 'image',
		},
	},
};

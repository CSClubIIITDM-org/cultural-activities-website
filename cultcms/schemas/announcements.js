export default {
	name: 'announcement',
	title: 'Announcement',
	type: 'document',
	fields: [
		{
			name: 'clubname',
			title: 'Club Name',
			type: 'string',
		},
		{
			name: 'event-name',
			title: 'Event Name',
			type: 'string',
		},
		{
			name: 'event-description',
			title: 'Event Description',
			type: 'string',
		},
		{
			name: 'Date Time',
			title: 'datetime',
			type: 'datetime',
		},
		{
			name: 'link',
			title: 'Club Name',
			type: 'url',
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
	preview: {
		select: {
			title: 'name',
			media: 'image',
		},
	},
};

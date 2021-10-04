export type SanityAnnouncement = {
	_createdAt: string;
	_id: string;
	_rev: string;
	_type: string;
	_updatedAt: string;
	name: string;
	date_time: string;
	event_description: string;
	event_name: string;
	link: string;
	past: boolean;
	image?: {
		_type: 'image';
		asset: {
			_ref: string;
			_type: string;
		};
	};
};

export type Announcement = {
	/** This is the club name */
	name: string;
	datetime: string;
	eventDescription: string;
	eventName: string;
	link: string;
	past: boolean;
	image?: {
		webp: string;
	};
};

export type Event = {
	/** This is the club name */
	name: string;
	datetime: string;
	eventDescription: string;
	eventName: string;
	link: string;
};

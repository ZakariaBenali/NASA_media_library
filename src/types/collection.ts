export interface ICollectionMetaData {
	total_hits: number;
}

export interface ILink {
	rel?: string;
	prompt?: string;
	href: string;
	render: 'image' | 'next';
}

export interface IData {
	title: string;
	keywords: string[];
	nasa_id: string;
	date_created: string;
	media_type: 'image' | 'audio';
	description: string;
	secondary_creator?: string;
	center?: string;
	album?: string[];
	description_508?: string;
	photographer?: string;
	location?: string;
}

export interface ICollectionItem {
	href: string;
	data: IData[];
	links: ILink[];
}

export interface ICollection {
	version: string;
	href: string;
	items: ICollectionItem[];
	metadata: ICollectionMetaData;
	links?: ILink[];
}

export interface ICollectionResponse {
	collection: ICollection;
}

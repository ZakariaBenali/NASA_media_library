export interface ILocationMetaData {
	location: string;
}

export interface IMetaData {
	'AVAIL:DateCreated': string;
	'AVAIL:Description': string;
	'AVAIL:Keywords'?: string[];
	'AVAIL:Location'?: string;
	'AVAIL:Photographer': string;
	'AVAIL:Title': string;
	'Composite:DateTimeCreated': string;
}

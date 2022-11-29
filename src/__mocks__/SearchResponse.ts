import { InfiniteData } from '@tanstack/react-query';
import { ICollectionResponse } from 'types/collection';

export const SearchResponse: ICollectionResponse = {
	collection: {
		version: '1.0',
		href: 'http://images-api.nasa.gov/search?media_type=image&q=Apollo+11&year_start=2020',
		items: [
			{
				href: 'https://images-assets.nasa.gov/image/PIA24297/collection.json',
				data: [
					{
						album: ['Mars_2020_Perseverance'],
						description:
							"Apollo 11 commander Neil Armstrong works with an Apollo Lunar Sample Return Container during a two-and-a-half-hour lunar surface simulation training exercise. The image was taken on Apr. 18, 1969, in Building 9 at the Manned Spacecraft Center in Houston, Texas.  The sample tubes carried by NASA's Mars 2020 Perseverance rover are destined to carry the first samples in history from another planet back to Earth. Future scientists will use these carefully selected representatives of Martian rock and regolith (broken rock and dust), to look for evidence of potential microbial life present in Mars' ancient past and to answer other key questions about Mars and its history. Perseverance will land at Mars' Jezero Crater on Feb. 18, 2021.  https://photojournal.jpl.nasa.gov/catalog/PIA24297",
						title: 'Armstrong and Rock Box',
						nasa_id: 'PIA24297',
						media_type: 'image',
						keywords: ['Mars 2020', 'Apollo 11'],
						date_created: '2020-12-22T00:00:00Z',
						description_508:
							'Apollo 11 commander Neil Armstrong works with an Apollo Lunar Sample Return Container during a lunar surface simulation training exercise in Building 9, Manned Spacecraft Center in Houston, Texas.',
						secondary_creator: 'NASA',
						center: 'JPL',
					},
				],
				links: [
					{
						href: 'https://images-assets.nasa.gov/image/PIA24297/PIA24297~thumb.jpg',
						rel: 'preview',
						render: 'image',
					},
				],
			},
			{
				href: 'https://images-assets.nasa.gov/image/KSC-20210430-PH-KLS01_0005/collection.json',
				data: [
					{
						center: 'KSC',
						title: 'Mike Collins Wreath Laying Ceremony',
						photographer: 'NASA/Kim Shiflett',
						location: 'KSC Visitor Complex',
						nasa_id: 'KSC-20210430-PH-KLS01_0005',
						media_type: 'image',
						keywords: ['Apollo 11', 'KSC Visitor Complex', 'Memorial', 'Mike Collins', 'Wreath Laying'],
						date_created: '2021-04-30T00:00:00Z',
						description:
							'A wreath-laying ceremony honoring the memory of former Apollo 11 astronaut Michael Collins is held outside of the Heroes and Legends exhibit at the Kennedy Space Center Visitor Complex in Florida on April 30, 2021. Kennedy Director Bob Cabana and Therrin Protze, chief operating officer of Delaware North at the visitor complex, provided remarks during the ceremony. Collins served as pilot on the three-day Gemini X mission in 1966, and he was the command module pilot for the historic Apollo 11 mission in 1969, where he remained in lunar orbit while Neil Armstrong and Buzz Aldrin become the first people to walk on the Moon. Collins passed away on April 28, 2021, at the age of 90.',
					},
				],
				links: [
					{
						href: 'https://images-assets.nasa.gov/image/KSC-20210430-PH-KLS01_0005/KSC-20210430-PH-KLS01_0005~thumb.jpg',
						rel: 'preview',
						render: 'image',
					},
				],
			},
		],
		metadata: { total_hits: 2 },
	},
};

export const infiniteSearchResponse: InfiniteData<ICollectionResponse> = {
	pageParams: [],
	pages: [SearchResponse],
};

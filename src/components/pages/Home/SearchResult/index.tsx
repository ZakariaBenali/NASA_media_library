import { InfiniteData } from '@tanstack/react-query';
import { calculateShowingDataCount } from 'helpers/math';
import { Fragment, useMemo } from 'react';
import { ICollectionResponse } from 'types/collection';
import { ImageCard } from '../ImageCard';
import { NoDataFound } from './NoDataFound';

interface IProps {
	data: InfiniteData<ICollectionResponse> | undefined;
}

const SearchResult: React.FC<IProps> = ({ data }) => {
	const shownData = useMemo(() => {
		return data && calculateShowingDataCount(data);
	}, [data]);
	return (
		<section className="flex flex-wrap justify-center w-full">
			<header className="text-2xl font-bold mb-5 w-full flex flex-wrap justify-between">
				<p>Search Results</p>
				{shownData && (
					<p>
						Showing {shownData} of {data?.pages[0].collection.metadata.total_hits} results
					</p>
				)}
			</header>
			{data && data.pages[0].collection.items.length > 0 ? (
				<>
					{data && (
						<div className="flex flex-wrap justify-center w-full">
							{data.pages.map((group, index) => (
								<Fragment key={index}>
									{group.collection.items.map((imgData) => (
										<ImageCard key={imgData.data[0].nasa_id} image={imgData.links[0].href} details={imgData.data[0]} />
									))}
								</Fragment>
							))}
						</div>
					)}
				</>
			) : (
				<NoDataFound />
			)}
		</section>
	);
};

export { SearchResult };

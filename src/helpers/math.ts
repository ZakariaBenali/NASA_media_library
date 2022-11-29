import { InfiniteData } from '@tanstack/react-query';
import { ICollectionResponse } from 'types/collection';
/**
 * Function to get the currently showing result count
 * @param  {InfiniteData<ICollectionResponse>} data
 */
export const calculateShowingDataCount = (data: InfiniteData<ICollectionResponse>, itemsPerPage = 100): string => {
	const totalHits = data.pages[0].collection.metadata.total_hits;
	const currentPage = data.pages.length;
	if (!totalHits || !currentPage) {
		return '';
	}
	const currentShowing = currentPage * itemsPerPage;
	return Math.min(currentShowing, totalHits).toString();
};

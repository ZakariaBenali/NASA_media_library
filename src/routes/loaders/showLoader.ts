import { QueryClient } from '@tanstack/react-query';
import { Params } from 'react-router-dom';
import { getShowData } from 'services/show';

export const showDetailQuery = (nasa_id: string) => ({
	queryKey: ['metadata', nasa_id],
	queryFn: async () => getShowData(nasa_id),
});

export const showLoader = (queryClient: QueryClient) => {
	return async ({ params }: { params: Params }) => {
		if (!params.nasa_id) {
			throw new Error('nasa_id is required');
		}
		const query = showDetailQuery(params.nasa_id);
		return queryClient.getQueryData(query.queryKey) ?? (await queryClient.fetchQuery(query));
	};
};

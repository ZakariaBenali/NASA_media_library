import { SearchBar } from 'components/pages/Home/SearchBar';
import logo from '/assets/images/logo.png';
import { searchByQuery } from 'services/search';
import { ISearchParams } from 'types/search';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { MadeBy } from './MadeBy';
import { Button } from 'components/ui/Button';
import { SearchResult } from './SearchResult';
import { NoDataFound } from './SearchResult/NoDataFound';

const Home: React.FC = () => {
	const [searchParams, setSearchParams] = useState<ISearchParams>({
		q: '',
		year_start: '',
		year_end: '',
		page: 1,
	});

	const { data, error, status, fetchStatus, fetchNextPage, hasNextPage, isFetchingNextPage, isPreviousData, isError } =
		useInfiniteQuery(['search', searchParams], ({ pageParam }) => searchByQuery(searchParams, pageParam), {
			enabled: Boolean(searchParams.q),
			keepPreviousData: true,
			refetchOnWindowFocus: false,
			retry: 2,
			getNextPageParam: (lastPage) => {
				const metaData = lastPage.collection.links && lastPage.collection.links.find((link) => link.rel === 'next');
				return metaData && metaData.href;
			},
		});
	return (
		<section id="home" className="flex flex-col items-center justify-center ">
			<header className="flex flex-col items-center mb-16 text-center">
				<img src={logo} className="h-24 w-24" alt="Logo" />
				<h1 className="font-bold text-4xl lg:text-6xl max-w-2x96">The ultimate NASA images search engine.</h1>
			</header>
			<SearchBar
				isLoading={(fetchStatus === 'fetching' && status === 'loading') || isPreviousData}
				setSearchParams={setSearchParams}
				searchParams={searchParams}
				apiError={isError && error}
			/>
			{status === 'success' && <SearchResult data={data} />}
			{hasNextPage && (
				<Button
					onClick={() => fetchNextPage()}
					disabled={isFetchingNextPage}
					isLoading={isFetchingNextPage}
					className="mt-8"
				>
					Load More
				</Button>
			)}
			{isError && <NoDataFound />}
			{status !== 'success' && !isError && <MadeBy />}
		</section>
	);
};

export { Home };

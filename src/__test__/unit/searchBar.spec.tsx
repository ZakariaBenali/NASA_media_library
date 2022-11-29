import { describe, it, beforeEach, expect } from 'vitest';
import { SearchBar } from 'components/pages/Home/SearchBar';
import { renderHook, screen, render } from '../test-utils';
import React from 'react';
import { ISearchParams } from 'types/search';

describe('Should render searchbar properly', () => {
	let apiError: unknown;
	let isLoading: boolean;
	let searchParams: ISearchParams;
	let setSearchParams: React.Dispatch<React.SetStateAction<ISearchParams>>;

	beforeEach(() => {
		isLoading = false;
		const { result } = renderHook(() =>
			React.useState<ISearchParams>({
				q: '',
				year_start: '',
				year_end: '',
				page: 1,
			}),
		);
		[searchParams, setSearchParams] = result.current;
	});

	it('Render searchbar properly', () => {
		render(
			<SearchBar
				isLoading={isLoading}
				setSearchParams={setSearchParams}
				apiError={apiError}
				searchParams={searchParams}
			/>,
		);
		expect(screen.getByRole('button')).toBeInTheDocument();
		expect(screen.getByPlaceholderText('Search for something...')).toBeInTheDocument();
		expect(screen.getByPlaceholderText('Start year (optional)')).toBeInTheDocument();
		expect(screen.getByPlaceholderText('End year (optional)')).toBeInTheDocument();
	});

	it('Render loading button properly', async () => {
		render(
			<SearchBar isLoading={true} setSearchParams={setSearchParams} apiError={apiError} searchParams={searchParams} />,
		);
		expect(screen.getByTitle('spinner')).toBeInTheDocument();
	});
});

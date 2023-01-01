import { ISearchParams } from 'types/search';

export const getSearchParams = (params: Omit<ISearchParams, 'page'>) => {
	const { q, year_start, year_end } = params;
	return {
		q,
		...(year_start && { year_start }),
		...(year_end && { year_end }),
	};
};

export const setCurrentUrlSearchParams = (params: Record<string, string>) => {
	const urlParams = new URLSearchParams(params).toString();
	window.history.replaceState(null, '', `?${urlParams}`);
};

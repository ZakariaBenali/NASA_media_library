import axios from 'axios';
import { IBadRequestErrorResponse } from 'types/errors';
/**
 * Format bad request error response to a more readable errors for UX
 * @param  {string} error
 */
const formatBadRequestError = (error: string) => {
	if (error.includes('q=')) {
		return 'Invalid search keyword';
	}
	if (error.includes('year_start=')) {
		return 'Invalid Year start';
	}
	if (error.includes('year_end=')) {
		return 'Invalid Year end';
	}
	return error;
};

/**
 * Handle api response errors
 * @param  {unknown} error
 */
export const formatAxiosErrors = (error: unknown) => {
	if (!axios.isAxiosError(error) || !error) {
		return;
	}
	const status = error.response?.status;
	switch (true) {
		case status && status === 400:
			return formatBadRequestError((error.response?.data as IBadRequestErrorResponse).reason);
		case status && status === 404:
			return 'No result found';
		case status && status >= 500:
			return 'Server error occurred';
		default:
			return error.message;
	}
};

import { cls } from 'helpers/classNames';
import { formatDate } from 'helpers/formatDate';
import { calculateShowingDataCount } from 'helpers/math';
import { describe, it, expect } from 'vitest';
import { infiniteSearchResponse } from '__mocks__/SearchResponse';

describe('Testing helper functions', () => {
	it('formatDate should formate supported and unsupported dates', () => {
		const supportedDate = formatDate('2009-09-24T17:07:20');
		const unsupported = formatDate('2009:09:24');
		const unsupportedWithTime = formatDate('2009:09:24 18:00:22');
		const expectedResult = 'September 24, 2009';

		expect(unsupported).toEqual(expectedResult);
		expect(unsupportedWithTime).toEqual(expectedResult);
		expect(supportedDate).toEqual(expectedResult);
	});

	it('should concat 2 classNames with extra space between them', () => {
		const classOne = 'bg-red-400';
		const classTwo = 'text-blue-700';
		const concatenatedClasses = cls(classOne, classTwo);
		expect(concatenatedClasses).toEqual('bg-red-400 text-blue-700');
	});

	it('should show currently shown date out of total', () => {
		const perPage = 1;
		const shownData = calculateShowingDataCount(infiniteSearchResponse, perPage);
		expect(shownData).toEqual('1');
	});
});

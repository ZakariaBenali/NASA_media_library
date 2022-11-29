import { vitest } from 'vitest';

export const mockIntersectionObserver = () => {
	const mockObserver = vitest.fn();
	mockObserver.mockReturnValue({
		observe: vitest.fn(),
		disconnect: vitest.fn(),
	});
	window.IntersectionObserver = mockObserver;
};

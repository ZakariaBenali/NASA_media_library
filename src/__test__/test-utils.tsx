/* eslint-disable import/export */
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render } from '@testing-library/react';
import { PropsWithChildren } from 'react';
import { BrowserRouter } from 'react-router-dom';

const Wrapper: React.FC<PropsWithChildren> = ({ children }) => {
	const client = new QueryClient();
	return (
		<BrowserRouter>
			<QueryClientProvider client={client}>{children}</QueryClientProvider>
		</BrowserRouter>
	);
};

const customRender = (ui: React.ReactElement, options = {}) => {
	return render(ui, { wrapper: Wrapper, ...options });
};

export * from '@testing-library/react';
export { customRender as render };

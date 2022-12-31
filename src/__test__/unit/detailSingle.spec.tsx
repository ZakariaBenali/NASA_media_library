import { DetailSingle } from 'components/pages/Show/DetailSingle';
import { beforeEach } from 'vitest';
import { metaData } from '__mocks__/MetaDataResponse';
import { render, screen } from '../test-utils';

describe('Testing Detail section for show page', () => {
	let props: {
		label: string;
		data: string;
	};
	beforeEach(() => {
		if (!props) {
			props = {
				label: 'description',
				data: metaData['AVAIL:Description'],
			};
		}
	});
	it('should render properly', () => {
		render(<DetailSingle label={props.label} data={props.data} />);
		expect(screen.getByText(props.label)).toBeInTheDocument();
		expect(screen.getByText(props.data)).toBeInTheDocument();
	});
});

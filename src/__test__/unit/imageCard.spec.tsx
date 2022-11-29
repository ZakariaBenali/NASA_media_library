import { render, screen } from '../test-utils';
import { ImageCard } from 'components/pages/Home/ImageCard';
import { IData, ILink } from 'types/collection';
import { SearchResponse } from '__mocks__/SearchResponse';

describe('Test home image component', () => {
	let props: {
		details: IData;
		image: ILink['href'];
	};
	beforeEach(() => {
		if (!props) {
			props = {
				details: SearchResponse.collection.items[0].data[0],
				image: SearchResponse.collection.items[0].links[0].href,
			};
		}
	});
	it('should render', async () => {
		render(<ImageCard details={props.details} image={props.image} />);
		const link = screen.getByRole('link');
		expect(link).toBeInTheDocument();
		expect(link).toHaveAttribute('href', `/show/${props.details.nasa_id}`);
	});
});

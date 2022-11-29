import { ImageComponent } from 'components/ui/ImageComponent';
import { Link } from 'react-router-dom';
import { IData, ILink } from 'types/collection';

interface IProps {
	details: IData;
	image: ILink['href'];
}

const ImageCard: React.FC<IProps> = ({ details, image }) => {
	return (
		<Link
			to={`/show/${details.nasa_id}`}
			className="group w-full max-w-sm h-64 relative rounded-md mx-2 mb-3 overflow-hidden cursor-pointer"
		>
			<ImageComponent
				src={image}
				alt="NASA Image"
				className="w-full h-full object-cover rounded-md group-hover:scale-110 group-hover:rotate-3 transition-all"
			/>
			<div className="absolute h-full w-full inset-0 bg-gradient-to-t from-black rounded-md pointer-events-none"></div>
			<div className="absolute bottom-0 text-white pl-4 pb-6 pr-2">
				<p className="font-bold mb-2 pr-8">
					{details.title.length > 60 ? details.title.substring(0, 60) + '...' : details.title}
				</p>
				<div className="flex text-sm">
					<div className="mr-6">
						<div className="text-gray">Location</div>
						<div>{details.location ?? '-'}</div>
					</div>
					<div>
						<div className="text-gray">Taken by</div>
						<div>{details.photographer ?? '-'}</div>
					</div>
				</div>
			</div>
		</Link>
	);
};

export { ImageCard };

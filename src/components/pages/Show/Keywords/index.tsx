import { KeywordsLoader } from 'components/ui/Loaders/KeywordsLoader';
import { Title } from 'components/ui/Title';

interface IProps {
	keywords?: string[];
	isLoading: boolean;
}

const Keywords: React.FC<IProps> = ({ keywords, isLoading }) => {
	return (
		<>
			<Title label="Keywords" />
			<div className="flex flex-wrap">
				{isLoading ? (
					<KeywordsLoader />
				) : (
					keywords &&
					keywords.map((keyword, i) => (
						<span
							key={i}
							className="text-base font-medium lg:text-base bg-primary-300 text-primary-700 px-4 py-2 rounded-5xl mr-3 mb-3"
						>
							{keyword}
						</span>
					))
				)}
			</div>
		</>
	);
};

Keywords.defaultProps = {
	isLoading: true,
};

export { Keywords };

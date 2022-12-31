import { Title } from 'components/ui/Title';

interface IProps {
	keywords?: string[];
}

const Keywords: React.FC<IProps> = ({ keywords }) => {
	return (
		<>
			<Title label="Keywords" />
			{keywords && (
				<div className="flex flex-wrap">
					{keywords.map((keyword, i) => (
						<span
							key={i}
							className="text-base font-medium lg:text-base bg-primary-300 text-primary-700 px-4 py-2 rounded-5xl mr-3 mb-3"
						>
							{keyword}
						</span>
					))}
				</div>
			)}
		</>
	);
};

export { Keywords };

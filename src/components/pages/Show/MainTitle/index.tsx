import { LineLoader } from 'components/ui/Loaders/LineLoader';
import { formatDate } from 'helpers/formatDate';

interface IProps {
	isLoading: boolean;
	date?: string;
	title?: string;
}
const MainTitle: React.FC<IProps> = ({ date, title, isLoading }) => {
	if (isLoading) {
		return (
			<>
				<LineLoader className="w-20 mx-auto mb-5" />
				<LineLoader className="max-w-5xl mx-auto " />
			</>
		);
	}
	return (
		<>
			<p className="font-bold text-primary-700 text-lg text-center">{date ? formatDate(date) : '-'}</p>
			<h2 className="font-extrabold text-4xl lg:text-5xl mb-10 text-center max-w-5xl mx-auto">{title ?? '-'}</h2>
		</>
	);
};

MainTitle.defaultProps = {
	isLoading: true,
};

export { MainTitle };

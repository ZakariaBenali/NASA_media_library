import { formatDate } from 'helpers/formatDate';

interface IProps {
	date?: string;
	title?: string;
}
const MainTitle: React.FC<IProps> = ({ date, title }) => {
	return (
		<>
			<p className="font-bold text-primary-700 text-lg text-center">{date ? formatDate(date) : '-'}</p>
			<h2 className="font-extrabold text-4xl lg:text-5xl mb-10 text-center max-w-5xl mx-auto">{title ?? '-'}</h2>
		</>
	);
};

export { MainTitle };

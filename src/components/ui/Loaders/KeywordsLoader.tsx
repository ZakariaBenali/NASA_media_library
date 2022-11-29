import { cls } from 'helpers/classNames';

interface IProps {
	className?: string;
}

const KeywordsLoader: React.FC<IProps> = ({ className }) => {
	return (
		<>
			{[...Array(2)].map((_, i) => (
				<div key={i} className={cls('w-24 h-9 mr-3 mb-3 bg-primary-300 animate-pulse rounded-full', className)}></div>
			))}
		</>
	);
};

export { KeywordsLoader };

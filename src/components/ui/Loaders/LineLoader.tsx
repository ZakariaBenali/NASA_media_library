import { cls } from 'helpers/classNames';

interface IProps {
	className?: string;
}

const LineLoader: React.FC<IProps> = ({ className }) => {
	return <div className={cls('w-full h-5 bg-primary-300 animate-pulse rounded-full', className)}></div>;
};

export { LineLoader };

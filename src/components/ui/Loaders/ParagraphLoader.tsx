import { cls } from 'helpers/classNames';
import { LineLoader } from './LineLoader';

interface IProps {
	className?: string;
}

const ParagraphLoader: React.FC<IProps> = ({ className }) => {
	return (
		<div className={cls('flex flex-col', className)}>
			<LineLoader className="w-full mb-2" />
			<LineLoader className="w-3/4 mb-2" />
			<LineLoader className="w-2/4 mb-2" />
			<LineLoader className="w-3/4" />
		</div>
	);
};

export { ParagraphLoader };

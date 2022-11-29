import { ReactComponent as ImageSkeleton } from 'assets/image-keleton-loader.svg';
import { cls } from 'helpers/classNames';

interface IProps {
	className?: string;
}

const ImageLoader: React.FC<IProps> = ({ className }) => {
	return (
		<div className={cls('flex justify-center items-center w-full h-full bg-gray animate-pulse absolute', className)}>
			<ImageSkeleton />
		</div>
	);
};

export { ImageLoader };

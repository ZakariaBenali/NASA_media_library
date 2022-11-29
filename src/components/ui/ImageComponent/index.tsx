import { ImgHTMLAttributes, useState } from 'react';
import { ImageLoader } from '../Loaders/ImageLoader';

interface IProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'onLoad'> {
	withLoader?: boolean;
	src: string;
	alt: string;
}

const ImageComponent: React.FC<IProps> = ({ className, src, alt, withLoader, ...rest }) => {
	const [isLoading, setIsLoading] = useState(true);
	return (
		<div className="relative h-full w-full">
			{withLoader && isLoading && <ImageLoader />}
			<img
				className={className}
				src={src}
				alt={alt}
				onLoad={() => {
					setIsLoading(false);
				}}
				{...rest}
			/>
		</div>
	);
};

ImageComponent.defaultProps = {
	withLoader: true,
};

export { ImageComponent };

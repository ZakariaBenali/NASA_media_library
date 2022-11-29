import { ImgHTMLAttributes, useCallback, useEffect, useRef, useState } from 'react';
import { ImageLoader } from '../Loaders/ImageLoader';

interface IProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'onLoad'> {
	withLoader?: boolean;
	src: string;
	alt: string;
}

const ImageComponent: React.FC<IProps> = ({ className, src, alt, withLoader, ...rest }) => {
	const [isLoading, setIsLoading] = useState(true);
	const imageRef = useRef(null);
	const [imgSrc, setImgSrc] = useState('');

	const callback = useCallback(
		(entries: IntersectionObserverEntry[]) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setImgSrc(src);
				}
			});
		},
		[src],
	);

	useEffect(() => {
		const observer = new IntersectionObserver(callback);
		if (imageRef.current) {
			observer.observe(imageRef.current);
		}
		return () => {
			observer.disconnect();
		};
	}, [callback]);

	return (
		<div className="relative h-full w-full">
			{withLoader && isLoading && <ImageLoader />}
			<img
				className={className}
				src={imgSrc}
				alt={alt}
				ref={imageRef}
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

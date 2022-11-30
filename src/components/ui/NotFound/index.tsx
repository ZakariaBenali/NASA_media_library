import { cls } from 'helpers/classNames';
import { GoBackButton } from '../GoBackButton';
import NotFoundIllustration from '/assets/images/NotFoundIllustration.png';
interface IProps {
	className?: string;
}

const NotFound: React.FC<IProps> = ({ className }) => {
	return (
		<section
			className={cls(
				'bg-primary-100 min-h-screen w-full flex flex-col items-center text-center justify-center text-primary-700',
				className,
			)}
		>
			<div className="w-full max-w-xl flex-1">
				<img className="w-full h-full object-contain" src={NotFoundIllustration} alt="Not Found" />
			</div>
			<h3 className="font-bold text-4xl md:text-8xl mb-6">Oops!</h3>
			<h3 className="font-bold text-xl max-w-lg md:max-w-3xl md:text-3xl mb-5">
				The page you&apos;re looking for can&apos;t be found or another error occured.
			</h3>
			<GoBackButton to="/" />
		</section>
	);
};

export { NotFound };

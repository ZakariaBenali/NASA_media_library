import { ReactComponent as ArrowCircle } from 'assets/arrow-left-circle-filled.svg';
import { cls } from 'helpers/classNames';
import { useNavigate, useLocation } from 'react-router-dom';

interface IProps extends React.HTMLAttributes<HTMLButtonElement> {
	to: string;
}

const GoBackButton: React.FC<IProps> = ({ to, className }) => {
	const navigate = useNavigate();
	const location = useLocation();
	const previousUrl = location.state?.from;
	return (
		<button
			className={cls('group flex items-center text-lg top-0 left-0 my-4 md:my-0', className)}
			onClick={() => (previousUrl ? navigate(-1) : navigate(to))}
		>
			<ArrowCircle className="group-hover:scale-110 transition-all mr-3 h-10 w-10  text-primary-400" /> Go Back
		</button>
	);
};

export { GoBackButton };

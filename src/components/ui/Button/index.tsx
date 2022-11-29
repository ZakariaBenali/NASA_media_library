import { ReactComponent as Spinner } from 'assets/spinner.svg';
import { cls } from 'helpers/classNames';
import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	isLoading?: boolean;
}

const Button: React.FC<PropsWithChildren<IProps>> = ({ children, isLoading, className, disabled, ...rest }) => {
	return (
		<button
			className={cls('bg-primary-400 text-white px-8 py-4 rounded-lg text-xl relative overflow-hidden', className)}
			disabled={disabled || isLoading}
			{...rest}
		>
			{isLoading && (
				<div className="h-full w-full absolute bg-primary-400 inset-0 flex items-center justify-center">
					<Spinner className="animate-spin h-6 w-6 text-white" />
				</div>
			)}
			{children}
		</button>
	);
};

Button.defaultProps = {
	isLoading: false,
};

export { Button };

import { cls } from 'helpers/classNames';
import { InputHTMLAttributes } from 'react';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
	error?: string | boolean;
}

const SearchInput: React.FC<IProps> = ({ onChange, value, placeholder, className, type, name, error }) => {
	const mainClasses =
		'bg-white placeholder:text-gray w-full flex-1 lg:w-auto text-base xl:text-lg outline-none lg:mb-0 py-6 lg:py-6 rounded-2xl shadow-primary-300 shadow-lg md:shadow-none';
	return (
		<input
			type={type}
			name={name}
			value={value}
			onChange={onChange}
			className={cls(mainClasses, error ? cls('border border-red-400', className) : className)}
			placeholder={placeholder}
		/>
	);
};

SearchInput.defaultProps = {
	type: 'text',
};

export { SearchInput };

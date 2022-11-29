import { ReactComponent as SearchIcon } from 'assets/search-outlined.svg';
import { Button } from 'components/ui/Button';
import { Formik } from 'formik';
import { ISearchParams } from 'types/search';
import { SearchInput } from './SearchInput';
import * as yup from 'yup';
import { FormError } from './FormError';

interface IProps {
	setSearchParams: React.Dispatch<React.SetStateAction<ISearchParams>>;
	searchParams: ISearchParams;
	isLoading: boolean;
	apiError: unknown;
}

const SearchBar: React.FC<IProps> = ({ setSearchParams, searchParams, apiError, isLoading }) => {
	const validationSchema = yup.object({
		q: yup
			.string()
			.typeError('Search keyword must be a single or multiple characters')
			.required('Search keyword is required'),
		year_start: yup
			.number()
			.typeError('Start year must be a number')
			.integer('Start year must be a non decimal')
			.positive('Start year must be greater than 0')
			.optional(),
		year_end: yup
			.number()
			.typeError('End year must be a number')
			.integer('End year must be a non decimal')
			.positive('End year must be greater than 0')
			.optional(),
	});

	return (
		<Formik
			initialValues={searchParams}
			validationSchema={validationSchema}
			onSubmit={async (values) => {
				const { q, year_start, year_end } = values;
				const newSearchParams = {
					q,
					...(year_start && { year_start }),
					...(year_end && { year_end }),
				};
				setSearchParams(newSearchParams);
			}}
		>
			{({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
				<form onSubmit={handleSubmit} className="mb-20">
					{(apiError || Object.keys(touched).length > 0) && <FormError validationErrors={errors} apiError={apiError} />}
					<div className="rounded-2xl flex flex-col items-center lg:bg-white lg:flex-row lg:shadow-xl lg:shadow-primary-300 pr-3">
						<div className="rounded-2xl flex flex-col items-center md:bg-white md:shadow-xl md:shadow-primary-300 md:flex-row lg:bg-transparent lg:shadow-none">
							<div className="relative">
								<SearchIcon className="mr-6 text-primary-300 absolute top-2/4 left-3 md:left-6 -translate-y-1/2" />
								<SearchInput
									name="q"
									value={values.q}
									onChange={handleChange}
									onBlur={handleBlur}
									placeholder="Search for something..."
									className="pl-16"
									error={touched.q && errors.q}
								/>
							</div>
							<div className="w-px h-8 bg-gray/30 mx-2 hidden md:block"></div>
							<SearchInput
								name="year_start"
								value={values.year_start}
								onChange={handleChange}
								onBlur={handleBlur}
								placeholder="Start year (optional)"
								className="indent-6 my-6 md:my-0"
								error={touched.year_start && errors.year_start}
							/>
							<div className="w-px h-8 bg-gray/30 mx-2 hidden md:block"></div>
							<SearchInput
								name="year_end"
								value={values.year_end}
								onChange={handleChange}
								onBlur={handleBlur}
								placeholder="End year (optional)"
								className="indent-6 lg:mr-2"
								error={touched.year_end && errors.year_end}
							/>
						</div>
						<Button type="submit" isLoading={isLoading} className="mt-8 lg:mt-0">
							Search
						</Button>
					</div>
				</form>
			)}
		</Formik>
	);
};

export { SearchBar };

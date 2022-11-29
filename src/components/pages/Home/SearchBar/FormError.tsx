import { FormikErrors } from 'formik';
import { formatAxiosErrors } from 'helpers/formatErrors';
import { ISearchParams } from 'types/search';

interface IProps {
	validationErrors: FormikErrors<ISearchParams>;
	apiError: unknown;
}
const FormError: React.FC<IProps> = ({ validationErrors, apiError }) => {
	const apiErrorFormatted = formatAxiosErrors(apiError);
	const combinedErrors = {
		...validationErrors,
		...(apiErrorFormatted ? { apiErrorFormatted } : {}),
	};

	if (Object.values(combinedErrors).length === 0) {
		return null;
	}

	return (
		<ul className="bg-red-100 p-4 rounded-xl list-disc list-inside mb-6">
			{Object.values(combinedErrors).map((err, i) => (
				<li className="text-red-400" key={i}>
					{err}
				</li>
			))}
		</ul>
	);
};

export { FormError };

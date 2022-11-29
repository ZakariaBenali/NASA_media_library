import NoDataIllustration from '/assets/images/NoDataIllustration.png';

export const NoDataFound: React.FC = () => {
	return (
		<div className="flex flex-col items-center justify-center text-lg uppercase font-bold">
			<img src={NoDataIllustration} alt="No Data Found" />
			<p className="mt-8">No Data found</p>
		</div>
	);
};

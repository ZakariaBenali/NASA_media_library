import { getAppropriateAsset } from 'helpers/asset';
import { useMemo } from 'react';
import { ICollection } from 'types/collection';
import { ReactComponent as SearchFilled } from 'assets/search-icon-filled.svg';

interface IProps {
	data?: ICollection;
}
const AssetComponent: React.FC<IProps> = ({ data }) => {
	const asset = useMemo(() => {
		return data && getAppropriateAsset(data);
	}, [data]);

	return (
		<div className="bg-black w-full h-image flex items-center justify-center flex-shrink-0 relative  text-white">
			{asset?.large && (
				<a
					href={asset?.large}
					target="_blank"
					rel="noopener noreferrer"
					className="group bg-primary-400 absolute top-4 right-4 p-2 rounded-lg hover:scale-110 transition-all flex"
				>
					<SearchFilled />
					<span className="ml-2">View original</span>
				</a>
			)}

			{data && <img className="h-full object-contain" src={asset?.display} />}
		</div>
	);
};

export { AssetComponent };

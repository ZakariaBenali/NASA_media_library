import { ICollection } from 'types/collection';
/**
 * Get appropriate assets for both display and external link
 * @param  {ICollection} assets
 */
export const getAppropriateAsset = (
	assets: ICollection,
): {
	large: string | undefined;
	display: string | undefined;
} => {
	const largestAsset = assets.items.find((asset) => asset.href.includes('.jpg'));
	const displayAsset = assets.items.find(
		(asset) => asset.href.includes('medium') || asset.href.includes('medium') || asset.href.includes('large'),
	);
	return {
		large: largestAsset?.href,
		display: displayAsset?.href || largestAsset?.href,
	};
};

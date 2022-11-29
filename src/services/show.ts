import axios from 'axios';
import { axiosInstance } from 'lib/axiosInstance';
import { ICollectionResponse } from 'types/collection';
import { ILocationMetaData, IMetaData } from 'types/metadata';

export const getMetaData = async (nasa_id: string) => {
	const { data } = await axiosInstance.get<ILocationMetaData>(`/metadata/${nasa_id}`);
	if (!data.location) {
		throw new Error('No Location found');
	}
	const { data: metaData } = await axios.get<IMetaData>(data.location);
	return metaData;
};

export const getAssets = async (nasa_id: string) => {
	const { data } = await axiosInstance.get<ICollectionResponse>(`/asset/${nasa_id}`);
	return data;
};

export const getShowData = async (nasa_id?: string) => {
	if (!nasa_id) {
		return;
	}
	const metaData = await getMetaData(nasa_id);
	const assets = await getAssets(nasa_id);
	return {
		assets,
		metaData,
	};
};

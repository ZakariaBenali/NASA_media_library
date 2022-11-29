import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import logo from '/assets/images/logo.png';
import { getShowData } from 'services/show';
import { DetailSingle } from './DetailSingle';
import { Keywords } from './Keywords';
import { MainTitle } from './MainTitle';
import { AssetComponent } from './AssetComponent';
import axios from 'axios';
import { formatAxiosErrors } from 'helpers/formatErrors';
import { toast } from 'react-toastify';
import { NotFound } from 'components/ui/NotFound';
import { GoBackButton } from 'components/ui/GoBackButton';

const Show: React.FC = () => {
	const { nasa_id } = useParams<'nasa_id'>();
	const { data, isLoading, error, isError } = useQuery(['metadata', nasa_id], () => getShowData(nasa_id), {
		enabled: Boolean(nasa_id),
		refetchOnWindowFocus: false,
		retry: 2,
		onError: (err) => {
			if (!axios.isAxiosError(err)) {
				return;
			}
			const message = formatAxiosErrors(err);
			toast.error(message);
		},
	});

	if (isError && axios?.isAxiosError(error) && error.response?.status === 404) {
		return <NotFound className="!min-h-full" />;
	}

	return (
		<section id="home" className="flex flex-col items-center  justify-center">
			<header className="flex flex-col-reverse md:flex-row items-center w-full relative">
				<GoBackButton to="/" className="md:absolute" />
				<img src={logo} className="w-14 mx-auto" alt="Logo" />
			</header>
			<article className="w-full mt-4">
				<MainTitle
					isLoading={isLoading}
					date={data?.metaData['AVAIL:DateCreated']}
					title={data?.metaData['AVAIL:Title']}
				/>
				<div className="bg-white mt-4 shadow-lg shadow-primary-300 rounded-2xl p-6 flex flex-col">
					<AssetComponent data={data?.assets.collection} />
					<main className="pt-8 flex-1">
						<DetailSingle
							isLoading={isLoading}
							label="Description"
							data={data?.metaData['AVAIL:Description']}
							isParagraph
						/>
						<DetailSingle isLoading={isLoading} label="Location" data={data?.metaData['AVAIL:Location']} />
						<DetailSingle isLoading={isLoading} label="Photographer" data={data?.metaData['AVAIL:Photographer']} />
						<Keywords isLoading={isLoading} keywords={data?.metaData['AVAIL:Keywords']} />
					</main>
				</div>
			</article>
		</section>
	);
};

export { Show };

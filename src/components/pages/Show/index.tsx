import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import logo from '/assets/images/logo.png';
import { DetailSingle } from './DetailSingle';
import { Keywords } from './Keywords';
import { MainTitle } from './MainTitle';
import { AssetComponent } from './AssetComponent';
import axios from 'axios';
import { formatAxiosErrors } from 'helpers/formatErrors';
import { toast } from 'react-toastify';
import { GoBackButton } from 'components/ui/GoBackButton';
import { showDetailQuery } from 'routes/loaders/showLoader';

const Show: React.FC = () => {
	const { nasa_id } = useParams<'nasa_id'>() as { nasa_id: string };
	const { queryKey, queryFn } = showDetailQuery(nasa_id);
	const { data } = useQuery(queryKey, queryFn, {
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

	return (
		<section id="home" className="flex flex-col items-center  justify-center">
			<header className="flex flex-col-reverse md:flex-row items-center w-full relative">
				<GoBackButton to="/" className="md:absolute" />
				<div className="h-14 w-14 mx-auto">
					<img src={logo} className="w-full h-full object-contain" alt="Logo" />
				</div>
			</header>
			<article className="w-full mt-4">
				<MainTitle date={data?.metaData['AVAIL:DateCreated']} title={data?.metaData['AVAIL:Title']} />
				<div className="bg-white mt-4 shadow-lg shadow-primary-300 rounded-2xl p-6 flex flex-col">
					<AssetComponent data={data?.assets.collection} />
					<main className="pt-8 flex-1">
						<DetailSingle label="Description" data={data?.metaData['AVAIL:Description']} isParagraph />
						<DetailSingle label="Location" data={data?.metaData['AVAIL:Location']} />
						<DetailSingle label="Photographer" data={data?.metaData['AVAIL:Photographer']} />
						<Keywords keywords={data?.metaData['AVAIL:Keywords']} />
					</main>
				</div>
			</article>
		</section>
	);
};

export { Show };

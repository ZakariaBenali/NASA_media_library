import { cls } from 'helpers/classNames';
import { Title } from 'components/ui/Title';
import { DetailLoader } from './Loader';

interface IProps {
	containerClass?: string;
	paragraphClass?: string;
	label: string;
	isLoading: boolean;
	data?: string;
	isParagraph?: boolean;
}

const DetailSingle: React.FC<IProps> = ({ isLoading, isParagraph, label, containerClass, paragraphClass, data }) => {
	return (
		<div className={cls('flex flex-col mb-4 text-lg xl:text-xl', containerClass)}>
			<Title label={label} />
			<div className={cls('', paragraphClass)}>
				{isLoading ? (
					<DetailLoader isParagraph={isParagraph || false} />
				) : (
					<div
						className="break-all"
						dangerouslySetInnerHTML={{
							__html: data && data.length > 0 ? data : '-',
						}}
					></div>
				)}
			</div>
		</div>
	);
};

DetailSingle.defaultProps = {
	isLoading: true,
};

export { DetailSingle };

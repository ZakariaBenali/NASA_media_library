import { cls } from 'helpers/classNames';
import { Title } from 'components/ui/Title';

interface IProps {
	containerClass?: string;
	paragraphClass?: string;
	label: string;
	data?: string;
	isParagraph?: boolean;
}

const DetailSingle: React.FC<IProps> = ({ label, containerClass, paragraphClass, data }) => {
	return (
		<div className={cls('flex flex-col mb-4 text-lg xl:text-xl', containerClass)}>
			<Title label={label} />
			<div className={cls('', paragraphClass)}>
				<div
					className="break-all"
					dangerouslySetInnerHTML={{
						__html: data && data.length > 0 ? data : '-',
					}}
				></div>
			</div>
		</div>
	);
};

export { DetailSingle };

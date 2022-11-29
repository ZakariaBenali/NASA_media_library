import { LineLoader } from 'components/ui/Loaders/LineLoader';
import { ParagraphLoader } from 'components/ui/Loaders/ParagraphLoader';

interface IProps {
	isParagraph: boolean;
}
const DetailLoader: React.FC<IProps> = ({ isParagraph }) => {
	return <>{isParagraph ? <ParagraphLoader /> : <LineLoader />}</>;
};

export { DetailLoader };

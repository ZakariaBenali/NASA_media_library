interface IProps {
	label: string;
}

const Title: React.FC<IProps> = ({ label }) => {
	return <p className="text-lg xl:text-xl font-bold mb-2">{label}</p>;
};

export { Title };

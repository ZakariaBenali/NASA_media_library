import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout: React.FC = () => {
	return (
		<main className="min-h-screen bg-primary-100 flex flex-col font-primary  py-20 text-bodyText">
			<ToastContainer />
			<div className="container mx-auto">
				<Outlet />
			</div>
		</main>
	);
};

export { Layout };

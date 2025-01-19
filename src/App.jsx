import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<DefaultLayout />}>
			<Route index element={<HomePage />} />
			<Route path="*" element={<NotFoundPage />} />
		</Route>
	)
);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
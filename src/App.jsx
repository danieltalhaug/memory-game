import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import GameSetupPage from './pages/GameSetupPage';
import GameBoardPage from './pages/GameBoardPage';
import NotFoundPage from './pages/NotFoundPage';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<DefaultLayout />}>
			<Route index element={<GameSetupPage />} />
			<Route  path="/play" element={<GameBoardPage />} />
			<Route path="*" element={<NotFoundPage />} />
		</Route>
	)
);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
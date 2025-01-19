import { Outlet } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop';
import { GameContextProvider } from '../contexts/GameContext';

const DefaultLayout = () => {
    return (
        <GameContextProvider>
            <ScrollToTop />
            <Outlet />
        </GameContextProvider>
    );
};

export default DefaultLayout;
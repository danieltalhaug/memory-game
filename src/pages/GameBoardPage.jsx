import { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';

const GameBoardPage = () => {
    const {
        playerName,
        gameType,
        cardAmount,
    } = useContext(GameContext);

    console.log(playerName);
    return (
        <>
            <pre>
                Player: {playerName}<br/>
                Cards: {cardAmount}<br/>
                Game type: {gameType.type}<br/>
            </pre>
        </>
    );
};

export default GameBoardPage;
import { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';
import GameBoard from '../components/GameBoard';

const GameBoardPage = () => {
    const {
        playerName,
        gameType,
        cardAmount,
    } = useContext(GameContext);

    return (
        <article className="bg-base-200 h-screen flex justify-center items-center">
            <div>
                <pre>
                    Player: {playerName}<br/>
                    Cards: {cardAmount}<br/>
                    Game type: {gameType.type}<br/>
                </pre>
                <GameBoard />
            </div>
        </article>
    );
};

export default GameBoardPage;
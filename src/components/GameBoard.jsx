import { useContext, useEffect } from 'react';
import { useGame } from '../hooks/useGame';
import { GameContext } from '../contexts/GameContext';
import GameCard from '../components/GameCard';

const GameBoard = () => {
    const { cardAmount, gameType } = useContext(GameContext);
    const { initGame, cards, flipCard } = useGame(cardAmount, gameType);

    useEffect(() => {
        initGame();
    }, []);

	return (
        <article className="grid grid-cols-4 gap-8">
            {cards && cards.map(card => (
                <GameCard
                    key={card.id}
                    card={card}
                    onClickCard={(e) => flipCard(e)}
                >
                    <span
                        className="h-24 w-24 rounded-full"
                        style={{backgroundColor: card.color }}
                    />
                </GameCard>
            ))}
        </article>
	);
};

export default GameBoard;
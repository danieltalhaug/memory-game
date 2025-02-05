const GameCard = ({ card, onClickCard, children }) => {
	return (
        <button
            className="game-card rounded-xl outline-primary"
            onClick={() => onClickCard(card.id)}
        >
            <div className={`game-card-inner rounded-xl ${card.isFlipped ? 'flipped' : ''}`}>
                <section className="game-card-face rounded-xl">
                    { children }
                    <div className="game-card-pulse-base game-card-pulse-circle" />
                </section>
                <section className="game-card-back rounded-xl" />
            </div>
        </button>
	);
};

export default GameCard;
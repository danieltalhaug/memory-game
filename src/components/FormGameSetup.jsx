import { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';

const FormGameSetup = () => {
    const [
        playerName,
        setPlayerName,
        gameType,
        setGameType,
        gameTypeOptions,
        cardAmount,
        setCardAmount,
        cardAmountOptions,
    ] = useContext(GameContext);

    return (
        <form
            className="flex flex-col gap-4"
            onSubmit={($event) => $event.preventDefault()}
        >
            <div>
                <label
                    htmlFor="playerName"
                    className="label"
                >
                    <span className="label-text">
                        Spiller
                    </span>
                </label>
                <input
                    value={playerName}
                    id="playerName"
                    type="text"
                    placeholder="Ditt navn her"
                    className="input input-bordered w-full max-w-xs"
                    onChange={($event) => setPlayerName($event.target.value)}
                />
            </div>
            <div>
                <label
                    htmlFor="cardAmount"
                    className="label"
                >
                    <span className="label-text">
                        Antall kort
                    </span>
                </label>
                <div id="cardAmount" className="join">
                    {cardAmountOptions.map(option => (
                        <input
                            key={option}
                            checked={cardAmount === option}
                            className="join-item btn"
                            type="radio"
                            name="amount"
                            aria-label={option}
                            onChange={() => setCardAmount(option)}
                        />
                    ))}
                </div>
            </div>
            <div>
                <label
                    htmlFor="gameType"
                    className="label"
                >
                    <span className="label-text">
                        Type
                    </span>
                </label>
                <div id="gameType" className="join color-accent">
                    {gameTypeOptions.map(option => (
                        <input
                            key={option.type}
                            checked={gameType.type === option.type}
                            className="join-item btn"
                            type="radio"
                            name="gameType"
                            aria-label={option.text}
                            onChange={() => setGameType(option)}
                        />
                    ))}
                </div>
            </div>
        </form>
    );
};

export default FormGameSetup;
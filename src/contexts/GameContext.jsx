import { useState, createContext } from 'react';

export const GameContext = createContext();

export function GameContextProvider({ children }) {
    const defaults = {
        playerName: 'Spiller',
        gameType: {
            type: 'colours',
            text: 'Farger',
        },
        cardAmount: 4,
    };
    const gameTypeOptions = [
        {
            type: 'colours',
            text: 'Farger',
        },
    ];
    const cardAmountOptions = [4, 8, 12];

    const [playerName, setPlayerName] = useState(defaults.playerName);
    const [gameType, setGameType] = useState(defaults.gameType);
    const [cardAmount, setCardAmount] = useState(defaults.cardAmount);

    return (
        <GameContext.Provider
            value={{playerName, setPlayerName, gameType, setGameType, gameTypeOptions, cardAmount, setCardAmount, cardAmountOptions}}
        >
            {children}
        </GameContext.Provider>
    );
};
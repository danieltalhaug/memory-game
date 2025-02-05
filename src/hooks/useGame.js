import { useState, useEffect } from 'react';
import colours from '../utils/games/colours';
import { duplicateArrayItems, shuffleArray, generateUid } from '../utils/shared';

export function useGame(cardAmount, gameType) {
    const [ cards, setCards ] = useState([]);
    // Keep track of the current round by storing the selected cards (2)
    // A round is every two cards the user has flipped
    const [ gameRound, setGameRound ] = useState([]);
    const [ gameComplete, setGameComplete ] = useState(false);
    const [ waiting, setWaiting ] = useState(false);

    const cardResetTimer = 2500;

    function getCards() {
        // Get the correct amount of cards based on the game context
        // This will later be duplicated, shuffled and manipulated to have 
        // the necessary keys
        return colours.slice(0, cardAmount);
    }

    function initGame() {
        const uniqueCards = getCards();
        const duplicatedCards = duplicateArrayItems(uniqueCards);
        const shuffledCards = shuffleArray(duplicatedCards);

        // Create the card objects we need for the game board with unique ID and flipped state
        setCards(shuffledCards.map(card => {
            return {
                id: generateUid(),
                isFlipped: false,
                isMatched: false,
                ...card,
            };
        }));
    }

    function flipCard(id) {
        const card = cards.find(card => card.id === id);

        // Stop if we're waiting for a reset or if the card has been flipped already
        if (waiting || card.isFlipped) {
            return;
        }

        setGameRound(round => {
            return [...round, card];
        });

        setCards(cards => {
            return cards.map(card => {
                if (card.id === id) {
                    return {
                        ...card,
                        isFlipped: true,
                    };
                } else {
                    return card;
                }
            });
        });
    }

    useEffect(() => {
        const flippedCardsCount = cards.filter(card => card.isFlipped).length;
        const gameRoundIds = Object.values(gameRound.map(r => r.id));

        // Game completed
        if (flippedCardsCount !== 0 && flippedCardsCount === cards.length) {
            console.log('Game completed!');
            setGameComplete(true);
        }

        // Two cards have been flipped
        if (gameRound.length === 2) {
            // Found a match
            if (gameRound[0].color === gameRound[1].color) {
                // Set cards to matched and reset game round
                setCards(cards => {
                    return cards.map(card => {
                        if (gameRoundIds.includes(card.id)) {
                            return {
                                ...card,
                                isMatched: true,
                            };
                        } else {
                            return card;
                        }
                    });
                });
                setGameRound([]);
            } else {
                // Since two has been flipped without match, we flip them around again
                setWaiting(true);
                setTimeout(() => {
                    setCards(cards => {
                        return cards.map(card => {
                            if (gameRoundIds.includes(card.id)) {
                                return {
                                    ...card,
                                    isFlipped: false,
                                };
                            } else {
                                return card;
                            }
                        });
                    });
                    setGameRound([]);
                    setWaiting(false);
                }, cardResetTimer);
            }
        }
      }, [cards, gameRound]);

    return { initGame, cards, flipCard, gameComplete };
}
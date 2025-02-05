function shuffleArray(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
}

function duplicateArrayItems(cards) {
    return [...cards, ...cards];
}

function generateUid() {
    return crypto.randomUUID();
}

export {
    shuffleArray,
    duplicateArrayItems,
    generateUid,
};
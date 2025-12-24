/**
 * 
 * @param {Boolean} isturn 
 * @param {Number} leading_suit 
 * @param {Object} card 
 * @param {Boolean} hand_has_ace 
 * @param {Array} hand
 */


export function valid_card(isturn, leading_suit, card, hand_has_ace, hand_has_suit) {
    if (!isturn) return false;

    if (hand_has_ace) { 
        return card.value === 14 && card.suit === 1; 
    }
    
    if (!hand_has_suit) return true;

    if (leading_suit === 0) {
        return true;
    } else {
        return card.suit === leading_suit;
    }
}

export function hand_has_ace(isturn, hand) {
    if (!isturn) return false;

    return hand.some(card => card.value === 14 && card.suit === 1);
}

export function hand_has_suit(hand, suit) {
    return hand.some(card => card.suit === suit);
}
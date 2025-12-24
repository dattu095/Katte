/**
 * 
 * @param {Boolean} isturn 
 * @param {Number} leading_suit 
 * @param {Array} hand 
 * @param {Function} play_card
 * @returns {HTMLDivElement}
 */

import { valid_card, hand_has_ace, hand_has_suit } from "./rules.js";


export function create_hand(isturn, leading_suit, hand, play_card) {
    const label = document.createElement('label');
    label.htmlFor = 'hand';
    label.innerText = 'Hand: ';

    const div = document.createElement('div');
    div.id = 'hand';

    hand.forEach(card => {
        const c = document.createElement('button');
        c.type = "button";
        c.innerText = `${card.value_name} of ${card.suit_name}`;
        c.disabled = (!valid_card(isturn, leading_suit, card, hand_has_ace(isturn, hand), hand_has_suit(hand, leading_suit)));
        c.onclick = (event) => {
            event.preventDefault();
            play_card(card.value, card.suit, !hand_has_suit(hand, leading_suit));
        }

        div.appendChild(c)
    });

    const wrapper = document.createElement('div');
    wrapper.appendChild(label);
    wrapper.appendChild(div);

    return wrapper
}
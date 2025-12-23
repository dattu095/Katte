/**
 * 
 * @param {Boolean} isturn 
 * @param {Number} leading_suit 
 * @param {Array} hand 
 * @returns {HTMLDivElement}
 */

import { valid_card, hand_has_ace } from "./rules.js";


export function create_hand(isturn, leading_suit, hand) {
    const label = document.createElement('label');
    label.htmlFor = 'hand';
    label.innerText = 'Hand: ';

    const div = document.createElement('div');
    div.id = 'hand';

    hand.forEach(card => {
        const c = document.createElement('button');
        c.type = "button";
        c.innerText = `${card.value_name} of ${card.suit_name}`;
        c.disabled = (!valid_card(isturn, leading_suit, card, hand_has_ace(isturn, hand)));

        div.appendChild(c)
    });

    const wrapper = document.createElement('div');
    wrapper.appendChild(label);
    wrapper.appendChild(div);

    return wrapper
}
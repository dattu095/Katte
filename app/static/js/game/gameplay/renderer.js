/**
 * 
 * @param {HTMLDivElement} container 
 * @param {String} username 
 * @param {String} turn 
 * @param {Array} pool 
 * @param {Number} leading_suit 
 * @param {Object} hands 
 */

import { create_pool } from "./pool.js";
import { create_hand } from "./hand.js";


export function render_gameplay(container, username, turn, pool, leading_suit, hands) {
    const poolRender = create_pool(pool);
    const handRender = create_hand(turn === username, leading_suit, hands[username])

    container.innerHTML = '';
    container.appendChild(poolRender);
    container.appendChild(handRender);
}
/**
 * 
 * @param {HTMLDivElement} container 
 * @param {String} username 
 * @param {String} turn 
 * @param {Array} pool 
 * @param {Number} leading_suit 
 * @param {Object} hands 
 */


function create_pool(pool) {
    const label = document.createElement('label');
    label.htmlFor = 'pool';
    label.innerText = 'Pool:';

    const div = document.createElement('div');
    div.id = 'pool';

    pool.forEach(card => {
        const c = document.createElement('p');
        c.innerText = `${card.value_name} of ${card.suit_name}`;
        div.appendChild(c);
    });

    const wrapper = document.createElement('div');
    wrapper.appendChild(label);
    wrapper.appendChild(div);

    return wrapper;
}

function valid_card(isturn, leading_suit, card, hand_has_ace) {
    if (!isturn) return false;

    if (hand_has_ace) {
        return card.value === 14 && card.suit === 1;
    }
    
    if (leading_suit === 0) {
        return true;
    } else {
        return card.suit === leading_suit;
    }
}

function hand_has_ace(isturn, hand) {
    if (!isturn) return false;

    return hand.some(card => card.value === 14 && card.suit === 1);
}

function create_hand(isturn, leading_suit, hand) {
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

export function render_gameplay(container, username, turn, pool, leading_suit, hands) {
    const poolRender = create_pool(pool);
    const handRender = create_hand(turn === username, leading_suit, hands[username])

    container.innerHTML = '';
    container.appendChild(poolRender);
    container.appendChild(handRender);
}
/**
 * 
 * @param {Array} pool 
 * @returns {HTMLDivElement}
 */


export function create_pool(pool) {
    const label = document.createElement('label');
    label.htmlFor = 'pool';
    label.innerText = 'Pool:';

    const div = document.createElement('div');
    div.id = 'pool';

    pool.forEach(card => {
        const c = document.createElement('button');
        c.type = "button";
        c.innerText = `${card.value_name} of ${card.suit_name}`;
        c.disabled = true;

        div.appendChild(c);
    });

    const wrapper = document.createElement('div');
    wrapper.appendChild(label);
    wrapper.appendChild(div);

    return wrapper;
}
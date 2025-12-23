/**
 * 
 * @param {HTMLDivElement} container 
 * @param {String} room_id
 * @param {Array} players 
 * @param {Number} max_players 
 */


export function render_waiting(container, room_id, players, max_players) {
    const roomIdLable = document.createElement('label');
    roomIdLable.innerHTML = `<b>Name: </b>${room_id}<br>`;

    const roomOccupency = document.createElement('label');
    roomOccupency.innerHTML = `<b>Occupency: </b>${players.length}/${max_players}<br>`;

    const playersList = document.createElement('ul');
    players.forEach(player => {
        const li = document.createElement('li');
        li.textContent = player;
        playersList.appendChild(li);
    });

    container.innerHTML = '';
    container.appendChild(roomIdLable);
    container.appendChild(roomOccupency);
    container.appendChild(playersList);
}
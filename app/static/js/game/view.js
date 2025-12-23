import { render_waiting } from "./waiting.js";

console.log(`${sessionStorage.getItem('username')}: ${sessionStorage.getItem('room_id')}`);

const sio = io();

sio.on('state', (data) => {
    console.log(`${data}`);
    if (data.started) {
        document.getElementById('container').innerHTML = '<h1>Game Started</h1>';
    } else {
        render_waiting(
            document.getElementById('container'),
            sessionStorage.getItem('username'),
            data.room_id,
            data.players,
            data.max_players
        )
    }
})
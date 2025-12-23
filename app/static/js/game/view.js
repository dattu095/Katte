import { render_waiting } from "./waiting.js";
import { render_gameplay } from "./gameplay/renderer.js";

const sio = io();

sio.on('state', (data) => {
    console.log(`${data}`);
    if (data.started) {
        render_gameplay(
            document.getElementById('container'),
            sessionStorage.getItem('username'),
            data.game_state.turn,
            data.game_state.pool,
            data.game_state.leading_suit,
            data.game_state.hands
        )
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
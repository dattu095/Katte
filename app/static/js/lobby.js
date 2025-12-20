import { create_form } from "./utils/form.js";


function create_choice(onclick) {
    const form = document.createElement('form');
    form.style = 'display: block;';
    form.action = '/create';
    form.method = 'get';

    const create_btn = document.createElement('button');
    create_btn.type = 'submit';
    create_btn.innerText = 'Create Room';

    const join_btn = document.createElement('button');
    join_btn.type = 'button';
    join_btn.innerText = 'Join Room';
    join_btn.onclick = (event) => {
        event.preventDefault();
        onclick();
    };

    form.appendChild(create_btn);
    form.appendChild(join_btn);

    return form
}

const container = document.getElementById('container');
container.innerHTML = '';

container.appendChild(create_choice(() => {
    const container = document.getElementById('container');
    container.innerHTML = '';

    container.appendChild(create_form('room_id', 'Enter room id', 'Join'));
}));
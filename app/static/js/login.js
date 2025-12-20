import { create_form } from "./utils/form.js";


const form = create_form('username', 'Enter username', 'Login')
const container = document.getElementById('container');

container.innerHTML = '';
container.appendChild(form)
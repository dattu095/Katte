/**
 * 
 * @param {String} name 
 * @param {String} placeholder 
 * @param {String} type 
 * @returns {HTMLFormElement}
 */


export function create_form(name, placeholder, type) {
    const form = document.createElement('form');
    form.method = 'post';

    const input = document.createElement('input');
    input.type = 'text';
    input.name = name;
    input.placeholder = placeholder;
    input.required = true;

    const button = document.createElement('button');
    button.type = 'submit';
    button.innerText = type;

    form.appendChild(input);
    form.appendChild(button)

    return form
}
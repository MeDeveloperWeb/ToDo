/**
 * 
 * @param {*} param0 
 * @returns {HTMLElement} htmlEl
 */
export default function htmlEl ({tag, text = "", classList = [], id = "", children = [], props = {}}) {
    const el = document.createElement(tag);
    el.innerText = text;
    if (classList.length) el.classList.add(...classList);
    if (children.length) {
        for (const child of children) {
            el.appendChild(child);
        }
    }
    if (id) el.id = id;

    for (const [key, value] of Object.entries(props)) el.setAttribute(key, value);

    return el;
}
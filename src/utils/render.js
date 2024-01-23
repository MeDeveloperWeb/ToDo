/**
 * 
 * @param {*} param0 
 * @returns {HTMLElement} htmlEl
 */
export default function htmlEl ({tag, text = "", classList = [], id = "", children = [], props = {}, svg = false}) {
    const el = svg ? document.createElementNS("http://www.w3.org/2000/svg", tag) : document.createElement(tag);
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
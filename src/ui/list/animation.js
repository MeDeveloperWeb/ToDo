export function removeWithAnimation (el) {
    el.classList.add("remove");

    el.addEventListener("animationend", () => el.remove());
}

export function addWithAnimation (el, container) {
    el.classList.add("add");

    el.addEventListener("animationend", () => el.classList.remove("add"));

    container.appendChild(el);
}
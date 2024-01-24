export default function setRoute (section) {
    showSection(section);
    setHash(section);
}

function showSection (section) {
    hideAllSiblings (section);
    const currSection = document.querySelector(`#${section}`);
    if (currSection) currSection.style.display = "block";
}

function hideAllSiblings (section) {
    const els = document.querySelector(`#${section}`)?.parentElement?.children;
    
    for (let el of els) {
        el.style.display = "none"
    }
}

function setHash (section) {
    window.location.hash = section;
}

export function getRoute () {
    return window.location.hash.substring(1);
}
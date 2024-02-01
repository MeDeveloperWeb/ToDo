import { defaultRoute } from "../data/constants";
import { setProject } from "../pages/project-task";

/**
 * 
 * @param {string} section 
 */
export default function setRoute (section) {
    setHash(section);
    handleRoute(section)
}

export function handleRoute (section) {
    if (section.startsWith("project-")) handleProjectRoute(section);
    else showSection(section);
}

function showSection (section) {
    hideAllSiblings (section);
    const currSection = document.querySelector(`#${section}`) || document.querySelector(`#${defaultRoute}`);
    currSection.style.display = "block";
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

function handleProjectRoute (section) {
    try {
        setProject(section.substring(8));
        showSection("project-task");
    } catch (error) {
        setRoute(defaultRoute);
        console.log(error);
    }
}

export function setProjectRoute (pId) {
    setRoute("project-" + pId);
}

export function getRoute () {
    return window.location.hash.substring(1);
}

window.addEventListener('hashchange', () => {
    handleRoute(getRoute());
})
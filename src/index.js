import htmlEl from "./utils/render";
import header from "./ui/layout/header";
import "./styles/styles.css"
import sidebar from "./ui/layout/sidebar";
import today from "./pages/today";
import upcoming from "./pages/upcoming";
import checklist from "./pages/checklist";
import projects from "./pages/projects";
import setRoute, { getRoute } from "./routing/routes";
import modalForm from "./ui/layout/modal-form";
import projectTask from "./pages/project-task";
import { defaultRoute } from "./data/constants";
const feather = require('feather-icons');

const component = (() => {
    const mainContainer = htmlEl({
        tag: "main",
        children: [
            today(),
            upcoming(),
            checklist(),
            projects(),
            projectTask()
        ]
    });

    return htmlEl({
        tag: "div",
        id: "content",
        children: [
            header(),
            sidebar(),
            mainContainer,
            modalForm
        ]
    });
})();

function handleRoute() {
    const section = getRoute() || defaultRoute;
    setRoute(section);
}

function setTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) 
        document.querySelector(":root").classList.add("dark");
}

document.body.appendChild(component);

// Show SVGs
function showSVGs () {
    feather.replace();
    // Listen for changes in DOM
    const observer = new MutationObserver(() => {
        feather.replace()
    })

    observer.observe(component, {
        subtree: true,
        childList: true
    })
}

setTheme();
handleRoute();
showSVGs();

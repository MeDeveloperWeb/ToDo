import htmlEl from "./utils/render";
import header from "./ui/layout/header";
import "./styles/styles.css"
import sidebar from "./ui/layout/sidebar";
import today from "./pages/today";
import upcoming from "./pages/upcoming";
import checklist from "./pages/checklist";
import projects from "./pages/project";
import setRoute, { getRoute } from "./routing/routes";
const feather = require('feather-icons');

function component () {
    const mainContainer = htmlEl({
        tag: "main",
        children: [
            today(),
            upcoming(),
            checklist(),
            projects()
        ]
    });

    return htmlEl({
        tag: "div",
        id: "content",
        children: [
            header(),
            sidebar(),
            mainContainer
        ]
    });
}

function handleRoute() {
    const section = getRoute() || "home";
    setRoute(section);
}

function setTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) 
        document.querySelector(":root").classList.add("dark");
}

document.body.appendChild(component());

// Show SVGs
feather.replace();

setTheme();
handleRoute();

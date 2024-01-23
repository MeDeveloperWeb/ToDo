import htmlEl from "./utils/render";
import { tasks, projects, checklist } from "./data/data";

function component () {
    addProject("temp");
    return htmlEl({
        tag: "div",
        text: showProjects()
    });
}

document.body.appendChild(component());
console.log({tasks, projects, checklist});


function addProject(name, color) {
    projects.add(name, color)
}

function showProjects() {
    console.log(JSON.stringify(projects.list));
}
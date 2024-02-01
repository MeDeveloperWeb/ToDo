import { projects } from "../../data/data";
import icon from "../../ui/layout/icon";
import htmlEl from "../../utils/render";
import addProjectButton from "./utils/addProject";
import { handleIcons } from "./utils/icon";
import projectElement from "./utils/project-el";

export default function project () {

    const liEls = projects.list.map(project => projectElement(project));

    const projectCont = htmlEl({
        tag: "ul",
        classList: ["todo-item-container"],
        children: [...liEls]
    });

    const pageCont = htmlEl({
        tag: "div",
        classList: ["page-container"],
        children: [
            htmlEl({
                tag: "div",
                classList: ["heading"],
                children: [
                    icon("folder"),
                    htmlEl({
                        tag: "h1",
                        text: "My Projects"
                    })
                ]
            }),
            addProjectButton(projectCont),
            projectCont
        ]
    });

    pageCont.addEventListener('click', ({target}) => handleIcons(target));

    return htmlEl({
        tag: "div",
        id: "projects",
        children: [pageCont]
    });
}


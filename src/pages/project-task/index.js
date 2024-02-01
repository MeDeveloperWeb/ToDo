import { projects } from "../../data/data";
import { filterIncompleteTasks, getProjectTasks, getTaskProject } from "../../data/dataOp";
import icon from "../../ui/layout/icon";
import htmlEl from "../../utils/render";
import addTaskButton from "../utils/tasks/add-task";
import { updateTaskForm } from "../utils/tasks/form";
import { handleIcons } from "../utils/tasks/icon";
import taskElement from "../utils/tasks/task-element";
import updateDatedView from "../utils/update-dated-view";
import { removeProject, getProjectId } from "./utils";

const taskCont = htmlEl({
    tag: "ul",
    classList: ["todo-item-container"],
});

const heading = htmlEl({
    tag: "h1",
});

const addTaskBtn = addTaskButton((task) => {
    updateDatedView();
    if (getTaskProject(task.id) === projects.get(getProjectId())) showNewProjectTask(task);
});

function deleteProjectEl () {
    const el = htmlEl ({
        tag: "div",
        classList: ["todo-item", "item-adder"],
        children: [
            icon("trash-2"),
            htmlEl({
                tag: "span",
                text: "Delete Project"
            })
        ]
    });

    el.addEventListener('click', () => removeProject(getProjectId()));

    return el;
}

export default function projectTask () {

    const pageCont = htmlEl({
        tag: "div",
        classList: ["page-container"],
        children: [
            htmlEl({
                tag: "div",
                classList: ["heading"],
                children: [
                    icon("folder"),
                    heading
                ]
            }),
            addTaskBtn,
            taskCont,
            deleteProjectEl()
        ]
    });

    pageCont.addEventListener('click', ({target}) => handleIcons(target));

    return htmlEl({
        tag: "div",
        id: "project-task",
        children: [
            pageCont
        ]
    });
}

export function setProject (projectId) {
    const project = projects.get(projectId);
    if (!project) throw new Error("Invalid Project");

    heading.textContent = project.title;
    const projTasks = getProjectTasks(projectId);

    const liEls = filterIncompleteTasks(projTasks).map(task => taskElement(task));
    
    taskCont.replaceChildren(...liEls);

    updateTaskForm({projectId});
}

export function showNewProjectTask (task) {
    const taskEl = taskElement(task);
    taskEl.classList.add("add");
    taskCont.appendChild(taskEl);
}
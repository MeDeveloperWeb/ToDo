import { priorities } from "../data/constants";
import { tasks } from "../data/data";
import { filterIncompleteTasks } from "../data/dataOp";
import icon from "../ui/layout/icon";
import htmlEl from "../utils/render";
import { handleIcons } from "./utils/tasks/icon";
import taskElement from "./utils/tasks/task-element";

const pageCont = htmlEl({
    tag: "div",
    classList: ["page-container"],
});

export default function today () {

    updateTodayView();

    pageCont.addEventListener('click', ({target}) => handleIcons(target));

    return htmlEl({
        tag: "div",
        id: "today",
        children: [
            pageCont
        ]
    });
}

export function updateTodayView () {
    const todayTasks = tasks.getTasksByDate(new Date());

    const taskList = {}

    for (const i in priorities) {
        taskList["p" + priorities[i]] = [];
    }

    filterIncompleteTasks(todayTasks).forEach(task => taskList["p" + task.priority].push(taskElement(task)));

    const taskCont = []
    for (const [key, value] of Object.entries(taskList)) {
        taskCont.push(htmlEl({
            tag: "ul",
            classList: ["todo-item-container", key],
            children: value
        }))
    }

    pageCont.replaceChildren(htmlEl({
        tag: "div",
        classList: ["heading"],
        children: [
            icon("hash"),
            htmlEl({
                tag: "h1",
                text: "Today"
            })
        ]
    }),
    ...taskCont);
}

export function appendTodayTask (task) {
    const container = pageCont.querySelector(".p" + task.priority);
    if (!container) throw new Error("Invalid Task");

    const newTask = taskElement(task);
    newTask.classList.add("add");
    container.appendChild(newTask);
}
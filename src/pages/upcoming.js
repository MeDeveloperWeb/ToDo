import { startOfTomorrow } from "date-fns";
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

export default function upcoming () {

    updateUpcomingView();

    pageCont.addEventListener('click', ({target}) => handleIcons(target));

    return htmlEl({
        tag: "div",
        id: "upcoming",
        children: [
            pageCont
        ]
    });
}

export function updateUpcomingView () {
    const tomorrowTasks = tasks.getTasksByDate(startOfTomorrow());

    const liEls = filterIncompleteTasks(tomorrowTasks, startOfTomorrow()).map(task => taskElement(task));
    
    const taskCont = htmlEl({
        tag: "ul",
        classList: ["todo-item-container"],
        children: liEls
    });

    pageCont.replaceChildren(htmlEl({
        tag: "div",
        classList: ["heading"],
        children: [
            icon("calendar"),
            htmlEl({
                tag: "h1",
                text: "Upcoming"
            })
        ]
    }),
    taskCont);
}
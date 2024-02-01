import { checklist as checklistData } from "../data/data";
import icon from "../ui/layout/icon";
import htmlEl from "../utils/render";
import { handleIcons } from "./utils/tasks/icon";
import taskElement from "./utils/tasks/task-element";

const taskCont = htmlEl({
    tag: "ul",
    classList: ["todo-item-container"]
});

export default function checklist () {

    const liEls = checklistData.list.map(task => taskElement(task, true))

    taskCont.replaceChildren(...liEls);

    const pageCont = htmlEl({
        tag: "div",
        classList: ["page-container"],
        children: [
            htmlEl({
                tag: "div",
                classList: ["heading"],
                children: [
                    icon("check-circle"),
                    htmlEl({
                        tag: "h1",
                        text: "Checklist"
                    })
                ]
            }),
            taskCont
        ]
    });

    pageCont.addEventListener('click', ({target}) => handleIcons(target));

    return htmlEl({
        tag: "div",
        id: "checklist",
        children: [pageCont]
    });
}

export function appendToChecklist (el) {
    taskCont.appendChild(el);
}
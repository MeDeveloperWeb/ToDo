import { endOfTomorrow, formatISO, intlFormat, startOfTomorrow } from "date-fns";
import { tasks } from "../data/data";
import { filterIncompleteTasks } from "../data/dataOp";
import icon from "../ui/layout/icon";
import htmlEl from "../utils/render";
import { handleIcons } from "./utils/tasks/icon";
import taskElement from "./utils/tasks/task-element";

const tmwTaskCont = htmlEl({
    tag: "div",
    classList: ["page-container"],
});

const datedTaskCont = htmlEl({
    tag: "div",
    classList: ["page-container"],
});

const container = htmlEl({
    tag: "div",
    classList: ["page-container"],
    children: [
        tmwTaskCont,
        datedTaskCont
    ]
});

export default function upcoming () {

    updateUpcomingView();

    container.addEventListener('click', ({target}) => handleIcons(target));

    return htmlEl({
        tag: "div",
        id: "upcoming",
        children: [
            container
        ]
    });
}

export function updateUpcomingView (date) {
    updateTomorrowView();
    updateUpcomingDatedView(date || "");
}

export function updateTomorrowView () {
    const taskList = tasks.getTasksByDate(endOfTomorrow());

    const taskNodes = filterIncompleteTasks(taskList, endOfTomorrow()).map(task => taskElement(task));
    
    tmwTaskCont.replaceChildren(
        htmlEl({
            tag: "div",
            classList: ["heading"],
            children: [
                icon("calendar"),
                htmlEl({
                    tag: "h1",
                    text: "Tomorrow"
                })
            ]
        }),
        htmlEl({
            tag: "ul",
            classList: ["todo-item-container"],
            props: {
                "data-date": formatISO(endOfTomorrow(), { representation: 'date' })
            },
            children: taskNodes
        })
    );
}

export function updateUpcomingDatedView (date) {

    const dateTxt = date
                    ?
                    intlFormat(date, {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    }, {
                        locale: 'en-IN',
                    })
                    :
                    "Select Date"

    const headingCont = htmlEl({
        tag: "div",
        classList: ["upcoming-heading-cont"],
        children: [
            headingEl(dateTxt),
            htmlEl({
                tag: "input",
                classList: ["upcoming-date-picker"],
                props: {
                    type: "date",
                    value: date ? formatISO(date, {representation: "date"}) : ""
                }
            })
        ]
    });

    headingCont.addEventListener('input', ({target}) => {
        updateUpcomingDatedView(target.value);
    })

    if (!date) {
        datedTaskCont.replaceChildren(headingCont);
        return;
    }

    const taskList = tasks.getTasksByDate(date);

    const taskNodes = filterIncompleteTasks(taskList, date).map(task => taskElement(task));
    
    datedTaskCont.replaceChildren(
        headingCont,
        htmlEl({
            tag: "ul",
            classList: ["todo-item-container"],
            props: {
                "data-date": date
            },
            children: taskNodes
        })
    );
}

function headingEl (text) {
    return htmlEl({
        tag: "div",
        classList: ["heading"],
        children: [
            icon("calendar"),
            htmlEl({
                tag: "h1",
                text
            })
        ]
    });
}
import { formatISO } from "date-fns";
import { daysOfWeek, priorities } from "../../../data/constants";
import { projects } from "../../../data/data";
import textInputEl from "../../../utils/form";
import htmlEl from "../../../utils/render";

const title = textInputEl("Task Name", "title");

const description = textInputEl("Description", "description", false, 64);

const today = formatISO(new Date(), { representation: 'date' });

const date = htmlEl({
    tag: "input",
    props : {
        name: "date",
        type: "date",
        id: "task-date",
        value: today,
        min: today
    },
});

const dateCont = htmlEl({
    tag: "div",
    children: [
        htmlEl({
            tag: "label",
            text: "Date:",
            props: {
                for: "task-date"
            }
        }),
        date
    ]
});

const days = daysOfWeek.map((day) => htmlEl({
    tag: "input",
    props: {
        type: "checkbox",
        name: "repeat",
        value: day,
        day: day.substring(0, 1).toUpperCase(),
    }
}));

const repeat = htmlEl({
    tag: "div",
    children: [
        htmlEl({
            tag: "label",
            text: "Repeat:",
        }),
        ...days
    ],
    classList: ["days-cont"]
});

const priority =  htmlEl({
    tag: "select",
    props: {
        name: "priority",
        required: true
    },
    children: priorities.map((prior) => htmlEl({
        tag: "option",
        text: "Priority "+ prior,
        props: {
            value: prior
        }
    }))
});
priority.selectedIndex = priorities.length - 1;

const project =  htmlEl({
    tag: "select",
    props: {
        name: "projectId",
        required: true
    }
});

const formContent = htmlEl({
    tag: "div",
    children: [
        title,
        description,
        repeat,
        htmlEl ({
            tag: "div",
            children: [
                dateCont,
                priority,
                project
            ],
            classList: ["date-priority-project-cont"]
        })
    ]
});

handleSchedule(date, repeat);
updateTaskFormProjectList();

export default function taskFormContents () {
    return formContent;
}

export function updateTaskForm (task = {}) {

    title.querySelector('input').value = task.title || "";

    description.querySelector('input').value = task.description || "";

    if (task.repeat && task.repeat.length) {
        days.forEach(day => {
            if (task.repeat.includes(day.value)) day.checked = true;
        });
        date.value = "";
    }
    else if (task.date) {
        date.value = task.date;
        date.classList.add("selected");
    }
    else date.value = today;

    // Set task's priority
    priority.selectedIndex =  task.priority ? priorities.indexOf(+task.priority) : priorities.length - 1;

    project.value = task.projectId || "";
}

/**
 * Allow only repeat or date
 * @param {HTMLInputElement} dateInput 
 * @param {HTMLElement} daysInput 
 */
function handleSchedule (dateInput, daysInput) {
    if (dateInput.value) dateInput.classList.add("selected");
    dateInput.addEventListener('input', () => {
        // Unselect Days
        daysInput.querySelectorAll('input[type="checkbox"]').forEach(day => day.checked = false);

        // Provide selected class to date input for css purposes
        dateInput.classList.add("selected");

        // Remove selected class if no value
        if (!dateInput.value) dateInput.classList.remove("selected");
    });

    daysInput.addEventListener("change", () => {
        // Remove date
        dateInput.value = "";
        dateInput.classList.remove("selected");
    });
}

export function updateTaskFormProjectList () {
    const projectList = projects.list.map((project) => htmlEl({
        tag: "option",
        text: project.title,
        props: {
            value: project.id
        }
    }));

    project.replaceChildren(htmlEl({
        tag: "option",
        text: "Project",
        props: {
            disabled: true,
            selected: true,
            value: ""
        }
    }),
    ...projectList);
}
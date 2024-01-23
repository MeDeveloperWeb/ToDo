import { isEqual, isSameDay } from "date-fns";
import { v4 as uuidv4 } from 'uuid';

export function projectsTemplate (arr) {
    return listTemplate(arr);
}

export function tasksTemplate (arr) {
    const {list, add, remove, get} = listTemplate(arr);

    const getTasksByTitle = (title) => list.filter((task) => task.title.includes(title));

    const getTasksByDate = (date) => [
        ...list.filter((task) => isEqual(task.date, date)),
        ...list.filter((task) => isSameDay(task.date, date))
    ];

    const getTasksByProjectId = (id) => list.filter((task) => task.projectId === id);

    return {
        list,
        add,
        remove,
        get,
        getTasksByDate,
        getTasksByTitle,
        getTasksByProjectId
    }
}

export function checklistTemplate (arr) {
    return listTemplate(arr);
}

function listTemplate (arr) {
    const list = arr || [];

    const add = (item) => list.push(item);

    const remove = (id) => {
        for (const i in list) {
            if (list[i].id === id) return list.splice(i, 1)[0];
        }
    }
    const get = (id) => list.find((item) => item.id === id);

    return {
        list,
        add, 
        remove,
        get
    }
}

export function project (name, color="default") {
    return {
        id: uuidv4(),
        name,
        color
    }
};

export function task ({
    id,
    title,
    description,
    date,
    days,
    priority,
    projectId
}) {
    if (!id) id = uuidv4();
    return {
        id,
        title,
        description,
        date,
        days,
        priority,
        projectId
    }
};
import { formatISO, getDay, isBefore, isEqual } from "date-fns";
import { v4 as uuidv4 } from 'uuid';
import { daysOfWeek } from "./constants";

export function projectsTemplate (arr) {
    return listTemplate(arr);
}

export function tasksTemplate (arr) {
    const {list, add, remove, get} = listTemplate(arr);

    const edit = (newTask) => {
        console.log(newTask)
        const index = list.findIndex(task => task.id === newTask.id);
        list[index] = newTask;
        return newTask;
    }

    const getTasksByTitle = (title) => list.filter((task) => task.title.includes(title));

    const getTasksByTaskDate = (date) => list.filter((task) => isEqual(task.date, formatISO(date, {representation: "date"})));

    const getTaskByTaskDay = (date) => list.filter((task) => {
        if (task.repeat) return task.repeat.includes(daysOfWeek[getDay(date)]);
        return false;
    });

    const getTasksByDate = (date) => [
        ...getTasksByTaskDate(date),
        ...getTaskByTaskDay(date)
    ];

    const getTasksByProjectId = (id) => list.filter((task) => task.projectId === id);

    return {
        list,
        add,
        remove,
        get,
        edit,
        getTasksByTaskDate,
        getTaskByTaskDay,
        getTasksByDate,
        getTasksByTitle,
        getTasksByProjectId
    }
}

export function checklistTemplate (arr) {
    const initList = arr || [];
    const list = initList.filter(task => !(isBefore(task.date, formatISO(new Date(), { representation: 'date' }))));

    const {add, remove, get} = listTemplate(list)
    
    return {
        list,
        add,
        remove,
        get
    };
}

function listTemplate (arr) {
    const list = arr || [];

    const add = (item) => list.push(item);

    const remove = (id) => {
        for (const i in list) {
            if (list[i].id === id) return list.splice(i, 1)[0];
        }
        return null;
    }
    const get = (id) => list.find((item) => item.id === id);

    return {
        list,
        add, 
        remove,
        get
    }
}

export function project (title, color="default") {
    return {
        id: uuidv4(),
        title,
        color
    }
};

export function task ({
    id,
    title,
    description,
    date,
    repeat,
    priority,
    projectId,
}) {
    if (!title || !priority || !projectId || !(date || (Array.isArray(repeat) && repeat.length))) {
        throw new Error("Invalid arguments")
    };

    if (!id) id = uuidv4();
    return {
        id,
        title,
        description,
        date,
        repeat,
        priority,
        projectId
    }
};
import { formatISO, isAfter, isBefore, isSameDay, isToday } from "date-fns";
import isLocalStorageAvailable from "../utils/checkStorage";
import { checklist, projects, tasks } from "./data";
import { daysOfWeek } from "./constants";
import { getRoute } from "../routing/routes";
import { updateTodayView } from "../pages/today";

function setTaskAsCompleted (taskId, date = new Date()) {
    const task = tasks.get(taskId);

    if (!task) throw new Error ("Invalid Task Id");

    // If one time task, delete from task list
    if (task.date) {
        tasks.remove(taskId);
        updateData("tasks", tasks.list);
        // Add to checklist
        checklist.add(task);
        updateData("checklist", checklist.list);
        return task;
    }

    // else
    const checkListTask = checklist.get(taskId);
    // If task already in checklist
    if (checkListTask) {
        // Update the date of completion
        checkListTask.date = date;
        updateData("checklist", checklist.list);

        if (getRoute() === "upcoming") updateTodayView();
        
        return task;
    }
    // else

    const clonedTask = structuredClone(task);
    // Add the date of task added to checklist to remove it later
    clonedTask.date = formatISO(date, { representation: 'date' });
    checklist.add(clonedTask);
    updateData("checklist", checklist.list);

    if (getRoute() === "upcoming") updateTodayView();

    return clonedTask;

}

function undoTaskCompletion (taskId) {
    const task = checklist.remove(taskId);

    if (!task) throw new Error ("Invalid Task Id");

    updateData("checklist", checklist.list);
    // If one time task, add it to task list
    if (!(task.repeat && task.repeat.length)) {
        tasks.add(task);
        updateData("tasks", tasks.list);
        return task;
    }
    return tasks.get(taskId);
}

function isDeadlineToday(task) {
    if (!task || typeof task !== 'object') throw new Error("Invalid Task");

    const todayDay = daysOfWeek[(new Date()).getDay()]
    return isToday(task.date) || (task.repeat && task.repeat.includes(todayDay));
}

function getProjectTasks (pId) {
    return tasks.getTasksByProjectId(pId);
}

function getTaskProject (taskId) {
    const task = tasks.get(taskId);
    if (!task) throw new Error("Invalid Task ID");

    return projects.get(task.projectId);
}

function getChecklistTaskProject (taskId) {
    const task = checklist.get(taskId);
    if (!task) throw new Error("Invalid Task ID");

    return projects.get(task.projectId);
}

function updateData (key, value) {
    if (!isLocalStorageAvailable) return;
    
    localStorage.setItem(key, JSON.stringify(value));
}

function filterIncompleteTasks (list, date = new Date()) {
    if (!Array.isArray(list)) throw new Error("Invalid Argument");
    return list.filter(task => {
        if (typeof task !== 'object') throw new Error("Invalid Argument");
        return task.date || !checklist.get(task.id) || !(isSameDay(checklist.get(task.id).date, date) || isAfter(checklist.get(task.id).date, date))
    })
}

function deleteProject (pId) {
    getProjectTasks(pId).forEach((task) => tasks.remove(task.id));
    updateData("tasks", tasks.list);
    const project = projects.remove(pId);
    updateData("projects", projects.list);
    return project;
}

export {
    setTaskAsCompleted,
    undoTaskCompletion,
    getProjectTasks,
    getTaskProject,
    getChecklistTaskProject,
    updateData,
    filterIncompleteTasks,
    isDeadlineToday,
    deleteProject
}

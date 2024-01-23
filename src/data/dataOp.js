import { checklist, projects, tasks } from "./data";

function setTaskAsCompleted (taskId) {
    const task = tasks.get(taskId);
    checklist.add(task);

    // If one time task, delete from task list
    if (task.date) tasks.remove(taskId);
}

function undoTaskCompletion (taskId) {
    let task = checklist.remove(taskId);
    // If one time task, add it to task list
    if (task.date) tasks.add(task);
}

function getProjectTasks (pId) {
    return tasks.getTasksByProjectId(pId);
}

function getTaskProject (taskId) {
    return projects.get(tasks.get(taskId).projectId);
}

export {
    setTaskAsCompleted,
    undoTaskCompletion,
    getProjectTasks,
    getTaskProject
}

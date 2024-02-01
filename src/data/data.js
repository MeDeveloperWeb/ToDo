import isLocalStorageAvailable from "../utils/checkStorage";
import { checklistTemplate, projectsTemplate, tasksTemplate } from "./dataStruct";

const tasks = isLocalStorageAvailable ? tasksTemplate(getParsedItem("tasks")) : tasksTemplate();
const projects = isLocalStorageAvailable ? projectsTemplate(getParsedItem("projects")) : projectsTemplate();
const checklist = isLocalStorageAvailable ? checklistTemplate(getParsedItem("checklist")) : checklistTemplate();

function getParsedItem (key) {
    return JSON.parse(localStorage.getItem(key));
}
export {tasks, projects, checklist};
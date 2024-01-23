import isLocalStorageAvailable from "../utils/checkStorage";
import { checklistTemplate, projectsTemplate, tasksTemplate } from "./dataStruct";

const tasks = isLocalStorageAvailable ? tasksTemplate(localStorage.getItem("tasks")) : tasksTemplate();
const projects = isLocalStorageAvailable ? projectsTemplate(localStorage.getItem("projects")) : projectsTemplate();
const checklist = isLocalStorageAvailable ? checklistTemplate(localStorage.getItem("checklist")) : checklistTemplate();

export {tasks, projects, checklist};
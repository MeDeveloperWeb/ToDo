import { getChecklistTaskProject, getTaskProject } from "../../../data/dataOp";
import todoItem from "../../../ui/list/list";
import { getIcons } from "./icon";
import { taskProjectViewer } from "./tools";


export default function taskElement (task, checklist = false) {
    if (!task || !task.id) throw new Error("Invalid Task");
    const project = checklist ? getChecklistTaskProject(task.id): getTaskProject(task.id);

    if (!project) throw new Error("Invalid Task");

    const el = todoItem(task.title, task.description, getIcons(checklist), {text: project.title, refFn: taskProjectViewer(project)}, true, checklist);
    el.id = task.id;
    return el;
}
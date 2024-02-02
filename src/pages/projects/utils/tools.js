import { projects } from "../../../data/data";
import { editModalForm } from "../../../ui/layout/modal-form";
import { replaceTodoItem } from "../../../ui/list/list";
import projectFormContents from "./form";
import projectElement from "./project-el";
import { setProjectRoute } from "../../../routing/routes";
import taskFormContents, { updateTaskForm, updateTaskFormProjectList } from "../../utils/tasks/form";
import { getAddTaskFn } from "../../utils/tasks/add-task";
import updateData from "../../../data/update-data";

export function addTask (projectEl) {
    updateTaskForm({projectId: projectEl.id});
    editModalForm(taskFormContents(), getAddTaskFn()).showModal();
}

export function viewProject (projectEl) {
    setProjectRoute(projectEl.id);
}

export function editProject (projectEl) {
    const project = projects.get(projectEl.id);

    if (!project) throw new Error("Invalid Project");

    editModalForm(projectFormContents(project.title), (formEl) => {
        const formData = new FormData(formEl);

        const title = formData.get("title");

        project.title = title;

        updateData("projects", projects.list);

        updateTaskFormProjectList();

        replaceTodoItem(projectElement(project), projectEl);
    }).showModal();
}


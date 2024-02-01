import { checklist, tasks } from "../../../data/data";
import { setTaskAsCompleted, undoTaskCompletion, updateData } from "../../../data/dataOp";
import { task } from "../../../data/dataStruct";
import { setProjectRoute } from "../../../routing/routes";
import { editModalForm } from "../../../ui/layout/modal-form";
import { replaceTodoItem } from "../../../ui/list/list";
import { removeWithAnimation } from "../../../ui/list/animation";
import { appendToChecklist } from "../../checklist";
import updateDatedView from "../update-dated-view";
import { getValidatedData } from "./add-task";
import taskFormContents, { updateTaskForm } from "./form";
import taskElement from "./task-element";

export function taskProjectViewer (projectEl) {
    const pId = projectEl.id;

    return () => setProjectRoute(pId);
}

export function editTask (taskEl) {
    const edit = (formEl) => {
        const data = getValidatedData(formEl);
        data.id = taskEl.id;

        const editedTask = tasks.edit(task(data));

        updateData("tasks", tasks.list);
        replaceTodoItem(taskElement(editedTask), taskEl);
        updateDatedView();
    }
    updateTaskForm(tasks.get(taskEl.id));
    editModalForm(taskFormContents(), edit).showModal();
}

export function deleteTask (taskEl) {
    const task = tasks.remove(taskEl.id);
    if (!task) throw new Error ("Invalid Id");

    updateData("tasks", tasks.list);

    removeWithAnimation(taskEl);
}

export function deleteChecklistTask (taskEl) {
    const task = checklist.remove(taskEl.id);
    if (!task) throw new Error ("Invalid Id");

    updateData("checklist", checklist.list);

    removeWithAnimation(taskEl);

   
}

export function toggleTaskCompletion (checkboxEl, taskEl) {
    if (checkboxEl.checked) {
        const task = setTaskAsCompleted(taskEl.id);
        removeWithAnimation(taskEl);

        appendToChecklist(taskElement(task, true));
        return;
    }

    const task = undoTaskCompletion(taskEl.id);
    removeWithAnimation(taskEl);

    updateDatedView();
}
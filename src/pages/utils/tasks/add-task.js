import { daysOfWeek } from "../../../data/constants";
import { tasks } from "../../../data/data";
import { task } from "../../../data/dataStruct";
import { showValidationError } from "../../../utils/form";
import itemAdderBtn from "../../../ui/list/item-adder-btn";
import taskFormContents, { updateTaskForm } from "./form";
import { editModalForm } from "../../../ui/layout/modal-form";
import updateData from "../../../data/update-data";

export function getValidatedData (formEl) {
    const formData = new FormData(formEl);

    const data = {};

    data.repeat = [];

    for (const [key, value] of formData.entries()) {
        if (key === "repeat") data.repeat.push(value);
        else data[key] = value;
    }

    if (!data.repeat.length && !data.date) {
        const err = "Please Enter either Date or select repeating days";
        const field = formEl.querySelector(`input[type=date]`);
        showValidationError(field, err);
        throw new Error(err);
    }
    return data;
} 

export function getAddTaskFn (callback) {
    return (formEl)  => {
        const data = getValidatedData(formEl);

        const newTask = task(data);

        tasks.add(newTask);
    
        updateData("tasks", tasks.list);
    
        if (callback) callback(newTask);
    }
}

/**
 * @param {HTMLElement} container 
 * @param {Function} callback returns control to this function 
 * @returns A div which can be clicked to add new projects in given container
 */
export default function addTaskButton (callback) {
    const btn = itemAdderBtn("Task");

    btn.addEventListener('click', () => {
        updateTaskForm({});
        editModalForm(taskFormContents(), getAddTaskFn(callback)).showModal();
    });

    return btn;
}

import icon from "../../../ui/layout/icon";
import { getClosestTodoItem } from "../../../ui/list/list";
import { deleteChecklistTask, deleteTask, editTask, toggleTaskCompletion } from "./tools";


const iconSet = [
    {
        icon:  "edit",
        class: "edit-task",
        function: editTask
    },
    {
        icon: "trash-2",
        class: "delete-task",
        function: deleteTask
    }
]

const checklistIconSet = [
    {
        icon: "trash-2",
        class: "delete-checklist-task",
        function: deleteChecklistTask
    }
]

/**
 * 
 * @returns array of project Icons
 */
export function getIcons (checklist = false) {
    const icons = [];

    if (checklist) {
        for (const each of checklistIconSet) 
            icons.push(icon (each.icon, {classList: [each.class]}));
    }
    else {
        for (const each of iconSet) 
            icons.push(icon (each.icon, {classList: [each.class]}));
    }

    return icons;
}

/**
 * 
 * @param {Element} el 
 */
export function handleIcons (el) {
    // Get project El
    const taskEl = getClosestTodoItem(el)
    if (!taskEl) return;

    // Execute required function
    for (const icon of iconSet) 
        if (el.closest(`.${icon.class}`)) return icon.function(taskEl);

    for (const icon of checklistIconSet) 
        if (el.closest(`.${icon.class}`)) return icon.function(taskEl);

    // If checkbox 
    const checkbox = el.closest('input[type="checkbox"]')
    if (el.closest('input[type="checkbox"]')) toggleTaskCompletion(checkbox, taskEl);
}
import icon from "../../../ui/layout/icon";
import { getClosestTodoItem } from "../../../ui/list/list";
import { addTask, editProject, viewProject } from "./tools";

const iconSet = [
    {
        icon: "plus",
        class: "add-task",
        function: addTask
    },
    {
        icon:  "edit",
        class: "edit-project",
        function: editProject
    },
    {
        icon: "eye",
        class: "view-project",
        function: viewProject
    }
]

/**
 * 
 * @returns array of project Icons
 */
export function getIcons () {
    const icons = [];

    for (const each of iconSet) 
        icons.push(icon (each.icon, {classList: [each.class]}));

    return icons;
}

/**
 * 
 * @param {Element} el 
 */
export function handleIcons (el) {
    // Get project Id
    const projectEl = getClosestTodoItem(el);
    if (!projectEl) return;

    // Execute required function
    for (const icon of iconSet) 
        if (el.closest(`.${icon.class}`)) return icon.function(projectEl);

}
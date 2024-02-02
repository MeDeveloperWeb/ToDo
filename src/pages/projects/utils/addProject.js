import itemAdderBtn from "../../../ui/list/item-adder-btn";
import { project as projectCreator } from "../../../data/dataStruct";
import { projects } from "../../../data/data";
import projectElement from "./project-el";
import projectFormContents from "./form";
import { updateTaskFormProjectList } from "../../utils/tasks/form";
import { editModalForm } from "../../../ui/layout/modal-form";
import { addWithAnimation } from "../../../ui/list/animation";
import updateData from "../../../data/update-data";

/**
 * @param {HTMLElement} container 
 * @returns A div which can be clicked to add new projects in given container
 */
export default function addProjectButton (container) {
    const addProject = (formEl) => {
        const formData = new FormData(formEl);
    
        const newProject = projectCreator(formData.get("title"));
    
        projects.add(newProject);
    
        updateData("projects", projects.list);
        
        updateTaskFormProjectList();
    
        const newProjectEl = projectElement(newProject);
        addWithAnimation(newProjectEl, container);
    }

    const btn = itemAdderBtn("project");

    btn.addEventListener('click' ,() => {
        editModalForm(projectFormContents(), addProject).showModal();
    });
    
    return btn;
}
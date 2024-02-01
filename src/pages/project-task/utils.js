import { projects } from "../../data/data";
import { deleteProject, updateData } from "../../data/dataOp";
import setRoute, { getRoute } from "../../routing/routes";

export function getProjectId () {
    if (getRoute().startsWith("project-")) return getRoute().substring(8);
    return null;
}

export function removeProject (pID) {
    const project = deleteProject(pID);
    if (!project) throw new Error ("Invalid Id");

    const projectEl = document.getElementById(pID);
    if (projectEl) projectEl.remove();

    setRoute("projects");
}
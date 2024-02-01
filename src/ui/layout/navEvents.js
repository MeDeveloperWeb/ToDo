import { isSameDay, isToday } from "date-fns";
import { showNewProjectTask } from "../../pages/project-task";
import { getProjectId } from "../../pages/project-task/utils";
import { getAddTaskFn } from "../../pages/utils/tasks/add-task";
import taskFormContents, { updateTaskForm } from "../../pages/utils/tasks/form";
import { getRoute } from "../../routing/routes";
import { editModalForm } from "./modal-form";
import { isDeadlineToday } from "../../data/dataOp";
import { appendTodayTask } from "../../pages/today";
import updateDatedView from "../../pages/utils/update-dated-view";

function plus () {
    function handleAnimation (task) {
        if (getRoute() === "today" && (isDeadlineToday(task))) {
            appendTodayTask(task);
            return;
        }

        if (getProjectId() === task.projectId) showNewProjectTask(task);

        updateDatedView();
    }
    updateTaskForm({});
    editModalForm(taskFormContents(), getAddTaskFn(handleAnimation)).showModal();
}

function search () {
    console.log("clicked Search");
}

function sun () {
    document.querySelector(":root").classList.toggle("dark");
}

function sidebar (e) {
    // flip sidebar svg
    e.target.closest('svg').classList.toggle("flip");

    const dialog = document.getElementById("sidebar-dialog");
    if (dialog) {
        if (dialog.open) dialog.close();
        else dialog.show();
    }
}

export default {
    plus,
    search,
    sun,
    sidebar
}
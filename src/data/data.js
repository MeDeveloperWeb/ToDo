import { formatISO, startOfTomorrow } from "date-fns";
import isLocalStorageAvailable from "../utils/checkStorage";
import { daysOfWeek } from "./constants";
import { checklistTemplate, project, projectsTemplate, task, tasksTemplate } from "./dataStruct";
import updateData from "./update-data";

let fetchedTasks = getParsedItem("tasks");
let fetchedProjects = getParsedItem("projects");
let fetchedChecklist = getParsedItem("checklist");

if (!fetchedProjects) initialize();

/**
 * Create default project and tasks
 */
function initialize () {
    const projectFitness = project("Fitness");
    const yogaTask = task({
        title: "Do Yoga",
        description: "Do Light Yoga for 30 minutes",
        repeat: [daysOfWeek[0], daysOfWeek[2], daysOfWeek[4], daysOfWeek[6]],
        priority: 4,
        projectId: projectFitness.id
    });

    const pullUp = task({
        title: "Do Pullups",
        description: "Do 12 pullups",
        repeat: [daysOfWeek[0], daysOfWeek[2], daysOfWeek[4], daysOfWeek[6]],
        priority: 4,
        projectId: projectFitness.id
    });

    const pushUp = task({
        title: "Do Pushups",
        description: "Do 3 sets of 25 pushups",
        repeat: daysOfWeek.slice(0, 6),
        priority: 4,
        projectId: projectFitness.id
    });

    const projectGrind = project("Grind");

    const pTask = task({
        title: "Tackle Programming Questions",
        description: "Solve a programming question",
        repeat: daysOfWeek.slice(0, 6),
        priority: 3,
        projectId: projectGrind.id
    });

    const dsaTask = task({
        title: "Crack Data Structure and Algorithm",
        description: "Solve a data structure and algorithm question.",
        repeat: daysOfWeek.slice(0, 6),
        priority: 3,
        projectId: projectGrind.id
    });

    const projectExplore = project("Explore");

    const today = formatISO((new Date()), {representation: "date"})

    const exploreToday = task({
        title: "Explore Today Section",
        description: "This is a task dated today",
        date: today,
        priority: 4,
        projectId: projectExplore.id
    });

    const exploreUpcoming = task({
        title: "Explore Upcoming Section",
        description: "Explore Upcoming Section for upcoming tasks",
        date: today,
        priority: 4,
        projectId: projectExplore.id
    });

    const exploreTomorrow = task({
        title: "Explore Upcoming Section",
        description: "This is task set for tomorrow.",
        date: formatISO((startOfTomorrow()), {representation: "date"}),
        priority: 4,
        projectId: projectExplore.id
    });

    const exploreCheckList = task({
        title: "Explore Upcoming Section",
        description: "Explore Checklist Section for completed tasks",
        date: today,
        priority: 4,
        projectId: projectExplore.id
    });

    const exploreProject = task({
        title: "Explore Project Section",
        description: "Explore Project Section for creating or deleting projects",
        date: today,
        priority: 4,
        projectId: projectExplore.id
    });


    fetchedProjects = [projectFitness, projectGrind, projectExplore]
    fetchedTasks = [yogaTask, pullUp, pushUp, pTask, dsaTask, exploreToday, exploreTomorrow, exploreUpcoming, exploreProject, exploreCheckList]

    const checklistTask = task({
        title: "Explore Checklist Section",
        description: "This is a completed Task",
        date: today,
        priority: 4,
        projectId: projectExplore.id
    });

    fetchedChecklist = [checklistTask];

    updateData("projects", fetchedProjects);
    updateData("tasks", fetchedTasks);
    updateData("checklist", fetchedChecklist);
}

const tasks = tasksTemplate(fetchedTasks);
const projects = projectsTemplate(fetchedProjects);
const checklist = checklistTemplate(fetchedChecklist);

function getParsedItem (key) {
    if (!isLocalStorageAvailable) return null;
    return JSON.parse(localStorage.getItem(key));
}

export {tasks, projects, checklist};
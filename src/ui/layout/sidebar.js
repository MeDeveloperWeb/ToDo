import setRoute from "../../routing/routes";
import htmlEl from "../../utils/render";
import icon from "./icon";

const iconMapper =  {
    "today": "hash",
    "upcoming": "calendar",
    "checklist": "check-circle",
    "projects": "folder"
}

function capitalizeFirstLetter (string) {
    return string.substring(0,1).toUpperCase() + string.substring(1);
}

function liEl (nav) {

    const text = htmlEl({
        tag: "span",
        text: capitalizeFirstLetter(nav)
    });

    const li = htmlEl({
        tag: "li",
        children: [
            icon(iconMapper[nav]),
            text
        ]
    });

    li.addEventListener('click', (e) => {
        setRoute(nav);
        // Hide Sidebar
        // e.target.closest("dialog").close();
    });

    return li;
}

export default function sidebar () {
    const nav = htmlEl({
        tag: "nav",
        children: [
            htmlEl({
                tag: "ul",
                children: [
                    liEl("today"),
                    liEl("upcoming"),
                    liEl("checklist"),
                    liEl("projects")
                ]
            })
        ]
    });
    return htmlEl({
        tag: "dialog",
        id: "sidebar-dialog",
        children: [
            nav
        ]
    });;
}
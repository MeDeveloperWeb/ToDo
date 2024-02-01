import todoItem from "../../../ui/list/list";
import { getIcons } from "./icon";

export default function projectElement (project) {
    const el = todoItem(project.title, "", getIcons());
    el.id = project.id;
    return el;
}

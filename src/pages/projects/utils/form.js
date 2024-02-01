import htmlEl from "../../../utils/render";
import textInputEl from "../../../utils/form";

export default function projectFormContents (value = "") {
    const textInput = textInputEl("Project Name", "title", value);
    return htmlEl({
        tag: "div",
        children: [
            textInput
        ]
    });
}
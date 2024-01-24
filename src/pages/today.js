import htmlEl from "../utils/render";

export default function today () {
    return htmlEl({
        tag: "div",
        id: "today",
        text: "today"
    })
}
import htmlEl from "../../utils/render";
import icon from "./icon";
import navEvents from "./navEvents";

export default function header () {
    const logo = htmlEl({tag:'h1', text:"#ToDo", classList:["logo"]});

    return htmlEl({
        tag: "header",
        classList: ["header"],
        children: [
            sidebar(),
            logo,
            nav(),
        ]
    })
}

function nav () {
    return htmlEl({
        tag: "nav",
        classList: ["main-nav", "nav"],
        children: [htmlEl({
                    tag: "ul",
                    children: [
                        // liEl("search"),
                        liEl("plus"),
                        liEl("sun")
                    ]
                })]
    });
}

function sidebar () {
    return htmlEl({
        tag: "ul",
        children: [
            liEl("sidebar"),
        ]
    })
}

function liEl (nav) {
    const iconLi = htmlEl({
        tag: "li",
        children: [icon(nav)]
    });

    iconLi.addEventListener('click', navEvents[nav]);

    return iconLi;
}
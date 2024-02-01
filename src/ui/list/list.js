import htmlEl from "../../utils/render";

function checkbox (isChecked) {
    const checkbox = htmlEl({
        tag: "input",
        classList: ["todo-item-checkbox"],
        props: {
            type: "checkbox",
        }
    });

    if (isChecked) checkbox.checked = true;

    const checkboxCont = htmlEl ({
        tag: "div",
        classList: ["round", "todo-item-checkbox"],
        children: [
            checkbox,
            // htmlEl({
            //     tag: "label",
            //     props: {
            //         for: "todo-item-checkbox"
            //     }
            // })
        ]
    });

    return checkboxCont;
}

export default function todoItem (title, description = "", iconSet = [], hashtag = {}, requiresCheckbox = false, isChecked = false) {

    const titleEl = htmlEl({
        tag: "div",
        text: title,
        classList: ["todo-item-title", "left", "text-container"]
    });
                        

    const descriptionEl = htmlEl({
        tag: "div",
        text: description,
        classList: ["todo-item-description", "todo-item-left", "text-container"]
    });

    const hashtagEl = htmlEl({
        tag: "div",
        text: hashtag?.text || "",
        classList: ["todo-item-hashtag", "todo-item-right","text-container"]
    });

    if (hashtag && hashtag.refFn) hashtagEl.addEventListener('click', hashtag.refFn);

    const iconList = iconSet.map(icon => htmlEl({
        tag: "li",
        children: [icon]
    }));

    const iconEls = htmlEl({
        tag: "div",
        classList: ["todo-item-icon-set", "todo-item-right"],
        children: [htmlEl({
            tag: "ul",
            children: iconList
        })]
    });

    const components = [
        titleEl,
        descriptionEl,
        iconEls,
        hashtagEl
    ];

    if (requiresCheckbox) components.push(checkbox(isChecked));

    return htmlEl({
        tag: "li",
        classList: ["todo-item"],
        children: components
    })
}

/**
 * 
 * @param {Element} el 
 */
export function getClosestTodoItem (el) {
    return el.closest("li.todo-item");
}

/**
 * 
 * @param {HTMLElement} currentItem 
 * @param {HTMLElement} newItem 
 */

export function replaceTodoItem (newItem, currentItem) {
    currentItem.replaceChildren(...newItem.children);
}
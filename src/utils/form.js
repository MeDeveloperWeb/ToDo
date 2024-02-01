import htmlEl from "./render";

export function formatText (text) {
    return text.trim().replaceAll(" ", "-").toLowerCase();
}

export default function textInputEl (text, name, required = true, maxlength = 16, htmlElOptions = {}, type = "text") {

    const id =  "text-input-" + formatText(text);

    const input = htmlEl({
        tag: "input",
        props: {
            type,
            name,
            maxlength
        },
        id
    });

    if (required) input.required = true;

    const label = htmlEl({
        tag: "label",
        text,
        props: {
            for: id
        }
    });

    htmlElOptions.children = [
        label,
        input
    ]

    if (!htmlElOptions.classList) htmlElOptions.classList = [];

    htmlElOptions.classList.push("text-input");

    return htmlEl ({
        tag: "div",
        ...htmlElOptions
    })
}
/**
 * 
 * @param {HTMLInputElement} field 
 * @param {string} err 
 */
export function showValidationError (field, err) {
    field.setCustomValidity(err);
    field.reportValidity();
    field.closest('form').addEventListener('change', () => field.setCustomValidity(''))
}

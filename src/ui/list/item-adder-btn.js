import htmlEl from "../../utils/render";
import icon from "../layout/icon";
import { editModalForm } from '../layout/modal-form';

export default function itemAdderBtn (name, content, addItem) {
    const el = htmlEl ({
        tag: "div",
        classList: ["todo-item", "item-adder"],
        children: [
            icon("plus"),
            htmlEl({
                tag: "span",
                text: "Add new " + name
            })
        ]
    });

    // el.addEventListener ('click', () => {
    //     editModalForm(content, addItem).showModal();
         
    // })

    return el;
}
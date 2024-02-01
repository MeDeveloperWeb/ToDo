import htmlEl from "../../utils/render"

const modalForm = htmlEl ({
    tag: "dialog",
    classList: ["modal-form-container"]
});

export function editModalForm (formContents, submitFn) {

    const submitBtn = htmlEl({
        tag: "button",
        props: {
            type: "submit"
        },
        text: "Add",
        classList: ["modal-form-submit"]
    });

    const cancelBtn = htmlEl({
        tag: "button",
        text: "Cancel",
        classList:["modal-form-cancel"],
        props: {
            type: "button"
        },
    });

    cancelBtn.addEventListener('click', () => modalForm.close());

    formContents.classList.add("modal-form-content");

    const formEl = htmlEl({
        tag: "form",
        classList: ["modal-form"],
        children: [
            formContents,
            submitBtn,
            cancelBtn
        ]
    });

    formEl.addEventListener('submit', (e) => {
        e.preventDefault();

        const form = e.target.closest('form');
        submitFn(form);
        
        form.reset();
        modalForm.close();
    });

    modalForm.replaceChildren(formEl);

    return modalForm;
}

export default modalForm;
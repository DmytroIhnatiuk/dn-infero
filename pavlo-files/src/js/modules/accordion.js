import {getElement, getElements} from "../core/index.js";

const accordion = () => {
    const acc = getElements(".accordion");
    if (acc && !acc.length) return

    for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            let panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }
};

export default accordion;

function accordionToggle(elements) {
    if (!elements.length) return
    elements.forEach((accordion) => {
        const header = getElement('.toggle-accordion__header', accordion);
        const body = getElement('.toggle-accordion__body', accordion);
        header?.addEventListener('click', () => {
            header.classList.toggle('active')
            body.classList.toggle('active')
        })
    })

}

export {accordionToggle};

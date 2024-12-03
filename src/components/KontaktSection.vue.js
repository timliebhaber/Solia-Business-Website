import axios from "axios";
import { defineComponent, reactive, ref } from "vue";
export default defineComponent({
    name: "ContactForm",
    setup() {
        // Define the form data with types
        const form = reactive({
            name: "",
            email: "",
            message: "",
        });
        // Success state
        const success = ref(false);
        // Method to send email
        const sendEmail = async () => {
            try {
                const response = await axios.post("http://localhost:5000/send-email", form);
                alert(response.data.message);
                success.value = true; // Set success to true
            }
            catch (error) {
                console.error(error);
                alert("Fehler beim Senden der Nachricht.");
            }
        };
        return {
            form,
            success,
            sendEmail,
        };
    },
});
;
function __VLS_template() {
    let __VLS_ctx;
    /* Components */
    let __VLS_otherComponents;
    let __VLS_own;
    let __VLS_localComponents;
    let __VLS_components;
    let __VLS_styleScopedClasses;
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ id: ("kontakt"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ id: ("adressandform"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("adress") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.br)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.br)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.br)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.br)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("mailto:info@solia-solutions.de"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.br)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.br)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.br)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.br)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.br)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.br)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.br)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("https://github.com/timliebhaber"), target: ("_blank"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: ("fa fa-github") }, ...{ style: ({}) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("https://www.linkedin.com/in/tim-liebhaber/"), target: ("_blank"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: ("fa fa-linkedin") }, ...{ style: ({}) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("container") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({ ...{ onSubmit: (__VLS_ctx.sendEmail) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("name"), });
    // @ts-ignore
    [sendEmail,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("text"), id: ("name"), name: ("name"), placeholder: ("Name"), value: ((__VLS_ctx.form.name)), required: (true), });
    // @ts-ignore
    [form,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("email"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("email"), id: ("email"), name: ("email"), placeholder: ("Email Adresse"), required: (true), });
    (__VLS_ctx.form.email);
    // @ts-ignore
    [form,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("subject"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.textarea, __VLS_intrinsicElements.textarea)({ id: ("subject"), name: ("subject"), placeholder: ("Nachricht"), ...{ style: ({}) }, value: ((__VLS_ctx.form.message)), required: (true), });
    // @ts-ignore
    [form,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("form-footer") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("submit"), value: ("Absenden"), });
    if (__VLS_ctx.success) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("success-message") }, });
        // @ts-ignore
        [success,];
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['adress'];
        __VLS_styleScopedClasses['fa'];
        __VLS_styleScopedClasses['fa-github'];
        __VLS_styleScopedClasses['fa'];
        __VLS_styleScopedClasses['fa-linkedin'];
        __VLS_styleScopedClasses['container'];
        __VLS_styleScopedClasses['form-footer'];
        __VLS_styleScopedClasses['success-message'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    const __VLS_name = "ContactForm";
    let __VLS_internalComponent;
}

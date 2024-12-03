import { ref, onMounted, onBeforeUnmount, defineProps } from 'vue';
const { defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
// Definiere die Props, die die Komponente akzeptiert
let __VLS_typeProps;
const props = defineProps();
// Setze Standardwerte für optionale Props
const words = props.words;
const typingSpeed = props.typingSpeed ?? 150;
const deletingSpeed = props.deletingSpeed ?? 75;
const waitTime = props.waitTime ?? 1000;
// Reactive States
const wordIndex = ref(0);
const letterIndex = ref(0);
const isDeleting = ref(false);
const displayText = ref('');
let timeout;
const type = () => {
    const currentWord = words[wordIndex.value];
    if (isDeleting.value) {
        // Löschen
        letterIndex.value--;
        displayText.value = currentWord.substring(0, letterIndex.value);
        if (letterIndex.value === 0) {
            isDeleting.value = false;
            wordIndex.value = (wordIndex.value + 1) % words.length;
            timeout = window.setTimeout(type, typingSpeed);
        }
        else {
            timeout = window.setTimeout(type, deletingSpeed);
        }
    }
    else {
        // Tippen
        letterIndex.value++;
        displayText.value = currentWord.substring(0, letterIndex.value);
        if (letterIndex.value === currentWord.length) {
            // Warten, bevor gelöscht wird
            isDeleting.value = true;
            timeout = window.setTimeout(type, waitTime);
        }
        else {
            timeout = window.setTimeout(type, typingSpeed);
        }
    }
};
onMounted(() => {
    if (words.length > 0) {
        type();
    }
});
onBeforeUnmount(() => {
    clearTimeout(timeout);
});
const __VLS_fnComponent = (await import('vue')).defineComponent({});
;
let __VLS_functionalComponentProps;
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("typewriter") }, });
    (__VLS_ctx.displayText);
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("cursor") }, "aria-hidden": ("true"), });
    // @ts-ignore
    [displayText,];
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['typewriter'];
        __VLS_styleScopedClasses['cursor'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                displayText: displayText,
            };
        },
        props: {},
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {},
});
;

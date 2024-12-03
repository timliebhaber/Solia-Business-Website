import TypeWriter from './TypeWriter.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
// Toggle Menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}
// Definiere die Wörter, die im Typewriter angezeigt werden sollen
const words = ["Private GPTs", "IT-Sicherheit", "Web-Entwicklung"];
document.addEventListener('DOMContentLoaded', () => {
    const interBubble = document.querySelector('.interactive');
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;
    const move = () => {
        curX += (tgX - curX) / 20;
        curY += (tgY - curY) / 20;
        if (interBubble) {
            interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
        }
        requestAnimationFrame(move);
    };
    window.addEventListener('mousemove', (event) => {
        tgX = event.clientX;
        tgY = event.clientY;
    });
    move();
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ id: ("heroSection"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("navbar") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ src: ("../assets/Logo White.png"), alt: ("Logo"), ...{ class: ("logo-small") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.nav, __VLS_intrinsicElements.nav)({ ...{ class: ("nav-links") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("#leistungen"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("#refSection"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("#über"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("#kontakt"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("hamburger") }, id: ("hamburger"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ id: ("contentContainer"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("logo") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({ viewBox: ("0 0 100% 100%"), xmlns: ('http://www.w3.org/2000/svg'), ...{ class: ("noise") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.filter, __VLS_intrinsicElements.filter)({ id: ('noiseFilter'), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.feTurbulence)({ type: ('fractalNoise'), baseFrequency: ('0.85'), numOctaves: ('6'), stitchTiles: ('stitch'), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.rect)({ width: ('100%'), height: ('100%'), preserveAspectRatio: ("xMidYMid meet"), filter: ('url(#noiseFilter)'), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("content") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("center-content") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ style: ({}) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.br, __VLS_intrinsicElements.br)({});
    // @ts-ignore
    [TypeWriter,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(TypeWriter, new TypeWriter({ words: ((__VLS_ctx.words)), typingSpeed: ((100)), deletingSpeed: ((40)), waitTime: ((1500)), }));
    const __VLS_1 = __VLS_0({ words: ((__VLS_ctx.words)), typingSpeed: ((100)), deletingSpeed: ((40)), waitTime: ((1500)), }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    ({}({ words: ((__VLS_ctx.words)), typingSpeed: ((100)), deletingSpeed: ((40)), waitTime: ((1500)), }));
    const __VLS_4 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(TypeWriter, __VLS_1));
    // @ts-ignore
    [words,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("second-content") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.br, __VLS_intrinsicElements.br)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("contentRow") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("https://github.com/timliebhaber"), target: ("_blank"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: ("fa fa-github") }, ...{ style: ({}) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("https://www.linkedin.com/in/tim-liebhaber/"), target: ("_blank"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: ("fa fa-linkedin") }, ...{ style: ({}) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("gradient-bg") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({ viewBox: ("0 0 100vw 100vw"), xmlns: ('http://www.w3.org/2000/svg'), ...{ class: ("noiseBg") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.filter, __VLS_intrinsicElements.filter)({ id: ('noiseFilterBg'), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.feTurbulence)({ type: ('fractalNoise'), baseFrequency: ('0.6'), stitchTiles: ('stitch'), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.rect)({ width: ('100%'), height: ('100%'), preserveAspectRatio: ("xMidYMid meet"), filter: ('url(#noiseFilterBg)'), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({ xmlns: ("http://www.w3.org/2000/svg"), ...{ class: ("svgBlur") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.defs, __VLS_intrinsicElements.defs)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.filter, __VLS_intrinsicElements.filter)({ id: ("goo"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.feGaussianBlur)({ in: ("SourceGraphic"), stdDeviation: ("10"), result: ("blur"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.feColorMatrix)({ in: ("blur"), mode: ("matrix"), values: ("1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"), result: ("goo"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.feBlend)({ in: ("SourceGraphic"), in2: ("goo"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("gradients-container") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("g1") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("g2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("g3") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("g4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("g5") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("interactive") }, });
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['navbar'];
        __VLS_styleScopedClasses['logo-small'];
        __VLS_styleScopedClasses['nav-links'];
        __VLS_styleScopedClasses['hamburger'];
        __VLS_styleScopedClasses['logo'];
        __VLS_styleScopedClasses['card'];
        __VLS_styleScopedClasses['noise'];
        __VLS_styleScopedClasses['content'];
        __VLS_styleScopedClasses['center-content'];
        __VLS_styleScopedClasses['second-content'];
        __VLS_styleScopedClasses['contentRow'];
        __VLS_styleScopedClasses['fa'];
        __VLS_styleScopedClasses['fa-github'];
        __VLS_styleScopedClasses['fa'];
        __VLS_styleScopedClasses['fa-linkedin'];
        __VLS_styleScopedClasses['gradient-bg'];
        __VLS_styleScopedClasses['noiseBg'];
        __VLS_styleScopedClasses['svgBlur'];
        __VLS_styleScopedClasses['gradients-container'];
        __VLS_styleScopedClasses['g1'];
        __VLS_styleScopedClasses['g2'];
        __VLS_styleScopedClasses['g3'];
        __VLS_styleScopedClasses['g4'];
        __VLS_styleScopedClasses['g5'];
        __VLS_styleScopedClasses['interactive'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                TypeWriter: TypeWriter,
                words: words,
            };
        },
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;

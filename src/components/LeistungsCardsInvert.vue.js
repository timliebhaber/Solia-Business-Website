import VanillaTilt from 'vanilla-tilt';
export default (await import('vue')).defineComponent({
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Tilt',
    data: function () {
        return {
            items: [
                { id: 1 }
            ]
        };
    },
    mounted() {
        // Überprüfen, ob $refs.tiltRef ein Array ist und ob es Elemente enthält
        if (Array.isArray(this.$refs.tiltRef) && this.$refs.tiltRef.length > 0) {
            this.$refs.tiltRef.forEach((element) => {
                VanillaTilt.init(element, this.options);
            });
        }
        else {
            console.error('Keine Elemente gefunden, auf die VanillaTilt angewendet werden kann.');
        }
    },
    props: {
        options: Object,
        parallax: Boolean
    }
});
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ id: ("leistungen"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ id: ("beschreibung"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ id: ("tiltcardcontainer"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("https://solia-solutions.de/KI"), ...{ style: ({}) }, });
    for (const [item] of __VLS_getVForSourceType((__VLS_ctx.items))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((item.id)), ref: ("tiltRef"), ...{ class: ("tiltMe") }, "data-tilt": (true), "data-tilt-glare": ("true"), "data-tilt-max-glare": ("0.6"), "data-tilt-scale": ("1.1"), "data-tilt-speed": ("2000"), "data-tilt-perspective": ("800"), "data-tilt-max": ("5"), });
        // @ts-ignore
        (__VLS_ctx.tiltRef);
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("../assets/kunstliche-intelligenz.png"), height: ("80px"), });
        // @ts-ignore
        [items, tiltRef,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.br, __VLS_intrinsicElements.br)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.br, __VLS_intrinsicElements.br)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ class: ("custom-list") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
        // @ts-ignore
        const __VLS_0 = {}
            .FontAwesomeIcon;
        ({}.FontAwesomeIcon);
        __VLS_components.FontAwesomeIcon;
        __VLS_components.fontAwesomeIcon;
        // @ts-ignore
        [FontAwesomeIcon,];
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ icon: ("play"), ...{ style: (({ fontSize: '14px' })) }, }));
        const __VLS_2 = __VLS_1({ icon: ("play"), ...{ style: (({ fontSize: '14px' })) }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ icon: ("play"), ...{ style: (({ fontSize: '14px' })) }, }));
        const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
        // @ts-ignore
        const __VLS_6 = {}
            .FontAwesomeIcon;
        ({}.FontAwesomeIcon);
        __VLS_components.FontAwesomeIcon;
        __VLS_components.fontAwesomeIcon;
        // @ts-ignore
        [FontAwesomeIcon,];
        // @ts-ignore
        const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ icon: ("play"), ...{ style: (({ fontSize: '14px' })) }, }));
        const __VLS_8 = __VLS_7({ icon: ("play"), ...{ style: (({ fontSize: '14px' })) }, }, ...__VLS_functionalComponentArgsRest(__VLS_7));
        ({}({ icon: ("play"), ...{ style: (({ fontSize: '14px' })) }, }));
        const __VLS_11 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8));
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
        // @ts-ignore
        const __VLS_12 = {}
            .FontAwesomeIcon;
        ({}.FontAwesomeIcon);
        __VLS_components.FontAwesomeIcon;
        __VLS_components.fontAwesomeIcon;
        // @ts-ignore
        [FontAwesomeIcon,];
        // @ts-ignore
        const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ icon: ("play"), ...{ style: (({ fontSize: '14px' })) }, }));
        const __VLS_14 = __VLS_13({ icon: ("play"), ...{ style: (({ fontSize: '14px' })) }, }, ...__VLS_functionalComponentArgsRest(__VLS_13));
        ({}({ icon: ("play"), ...{ style: (({ fontSize: '14px' })) }, }));
        const __VLS_17 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14));
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("https://solia-solutions.de/IT-Sicherheit"), ...{ style: ({}) }, });
    for (const [item] of __VLS_getVForSourceType((__VLS_ctx.items))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((item.id)), ref: ("tiltRef"), ...{ class: ("tiltMe") }, "data-tilt": (true), "data-tilt-glare": ("true"), "data-tilt-max-glare": ("0.6"), "data-tilt-scale": ("1.1"), "data-tilt-speed": ("2000"), "data-tilt-perspective": ("800"), "data-tilt-max": ("5"), });
        // @ts-ignore
        (__VLS_ctx.tiltRef);
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("../assets/sicherheit.png"), height: ("80px"), });
        // @ts-ignore
        [items, tiltRef,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.br, __VLS_intrinsicElements.br)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.br, __VLS_intrinsicElements.br)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ class: ("custom-list") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
        // @ts-ignore
        const __VLS_18 = {}
            .FontAwesomeIcon;
        ({}.FontAwesomeIcon);
        __VLS_components.FontAwesomeIcon;
        __VLS_components.fontAwesomeIcon;
        // @ts-ignore
        [FontAwesomeIcon,];
        // @ts-ignore
        const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ icon: ("play"), ...{ style: (({ fontSize: '14px' })) }, }));
        const __VLS_20 = __VLS_19({ icon: ("play"), ...{ style: (({ fontSize: '14px' })) }, }, ...__VLS_functionalComponentArgsRest(__VLS_19));
        ({}({ icon: ("play"), ...{ style: (({ fontSize: '14px' })) }, }));
        const __VLS_23 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20));
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
        // @ts-ignore
        const __VLS_24 = {}
            .FontAwesomeIcon;
        ({}.FontAwesomeIcon);
        __VLS_components.FontAwesomeIcon;
        __VLS_components.fontAwesomeIcon;
        // @ts-ignore
        [FontAwesomeIcon,];
        // @ts-ignore
        const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ icon: ("play"), ...{ style: (({ fontSize: '14px' })) }, }));
        const __VLS_26 = __VLS_25({ icon: ("play"), ...{ style: (({ fontSize: '14px' })) }, }, ...__VLS_functionalComponentArgsRest(__VLS_25));
        ({}({ icon: ("play"), ...{ style: (({ fontSize: '14px' })) }, }));
        const __VLS_29 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_24, __VLS_26));
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
        // @ts-ignore
        const __VLS_30 = {}
            .FontAwesomeIcon;
        ({}.FontAwesomeIcon);
        __VLS_components.FontAwesomeIcon;
        __VLS_components.fontAwesomeIcon;
        // @ts-ignore
        [FontAwesomeIcon,];
        // @ts-ignore
        const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ icon: ("play"), ...{ style: (({ fontSize: '14px' })) }, }));
        const __VLS_32 = __VLS_31({ icon: ("play"), ...{ style: (({ fontSize: '14px' })) }, }, ...__VLS_functionalComponentArgsRest(__VLS_31));
        ({}({ icon: ("play"), ...{ style: (({ fontSize: '14px' })) }, }));
        const __VLS_35 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32));
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("https://solia-solutions.de/Web-Entwicklung"), ...{ style: ({}) }, });
    for (const [item] of __VLS_getVForSourceType((__VLS_ctx.items))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((item.id)), ref: ("tiltRef"), ...{ class: ("tiltMe") }, "data-tilt": (true), "data-tilt-glare": ("true"), "data-tilt-max-glare": ("0.6"), "data-tilt-scale": ("1.1"), "data-tilt-speed": ("2000"), "data-tilt-perspective": ("800"), "data-tilt-max": ("5"), });
        // @ts-ignore
        (__VLS_ctx.tiltRef);
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("../assets/web-design.png"), height: ("80px"), });
        // @ts-ignore
        [items, tiltRef,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.br, __VLS_intrinsicElements.br)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.br, __VLS_intrinsicElements.br)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ class: ("custom-list") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
        // @ts-ignore
        const __VLS_36 = {}
            .FontAwesomeIcon;
        ({}.FontAwesomeIcon);
        __VLS_components.FontAwesomeIcon;
        __VLS_components.fontAwesomeIcon;
        // @ts-ignore
        [FontAwesomeIcon,];
        // @ts-ignore
        const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({ icon: ("play"), ...{ style: (({ fontSize: '14px' })) }, }));
        const __VLS_38 = __VLS_37({ icon: ("play"), ...{ style: (({ fontSize: '14px' })) }, }, ...__VLS_functionalComponentArgsRest(__VLS_37));
        ({}({ icon: ("play"), ...{ style: (({ fontSize: '14px' })) }, }));
        const __VLS_41 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38));
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
        // @ts-ignore
        const __VLS_42 = {}
            .FontAwesomeIcon;
        ({}.FontAwesomeIcon);
        __VLS_components.FontAwesomeIcon;
        __VLS_components.fontAwesomeIcon;
        // @ts-ignore
        [FontAwesomeIcon,];
        // @ts-ignore
        const __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({ icon: ("play"), ...{ style: (({ fontSize: '14px' })) }, }));
        const __VLS_44 = __VLS_43({ icon: ("play"), ...{ style: (({ fontSize: '14px' })) }, }, ...__VLS_functionalComponentArgsRest(__VLS_43));
        ({}({ icon: ("play"), ...{ style: (({ fontSize: '14px' })) }, }));
        const __VLS_47 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_42, __VLS_44));
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
        // @ts-ignore
        const __VLS_48 = {}
            .FontAwesomeIcon;
        ({}.FontAwesomeIcon);
        __VLS_components.FontAwesomeIcon;
        __VLS_components.fontAwesomeIcon;
        // @ts-ignore
        [FontAwesomeIcon,];
        // @ts-ignore
        const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({ icon: ("play"), ...{ style: (({ fontSize: '14px' })) }, }));
        const __VLS_50 = __VLS_49({ icon: ("play"), ...{ style: (({ fontSize: '14px' })) }, }, ...__VLS_functionalComponentArgsRest(__VLS_49));
        ({}({ icon: ("play"), ...{ style: (({ fontSize: '14px' })) }, }));
        const __VLS_53 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_48, __VLS_50));
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['tiltMe'];
        __VLS_styleScopedClasses['custom-list'];
        __VLS_styleScopedClasses['tiltMe'];
        __VLS_styleScopedClasses['custom-list'];
        __VLS_styleScopedClasses['tiltMe'];
        __VLS_styleScopedClasses['custom-list'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    const __VLS_name = 'Tilt';
    let __VLS_internalComponent;
}

import Kontakt from './components/KontaktSection.vue';
import Hero from './components/HeroSection.vue';
import LeistungsCardsInvert from './components/LeistungsCardsInvert.vue';
import AboutMeCard from './components/AboutMeCard.vue';
import ReferenzenSectionSlider from './components/ReferenzenSectionSlider.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.header, __VLS_intrinsicElements.header)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)({});
    // @ts-ignore
    [Hero,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(Hero, new Hero({}));
    const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
    ({}({}));
    const __VLS_4 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(Hero, __VLS_1));
    // @ts-ignore
    [LeistungsCardsInvert,];
    // @ts-ignore
    const __VLS_5 = __VLS_asFunctionalComponent(LeistungsCardsInvert, new LeistungsCardsInvert({}));
    const __VLS_6 = __VLS_5({}, ...__VLS_functionalComponentArgsRest(__VLS_5));
    ({}({}));
    const __VLS_9 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(LeistungsCardsInvert, __VLS_6));
    // @ts-ignore
    [ReferenzenSectionSlider,];
    // @ts-ignore
    const __VLS_10 = __VLS_asFunctionalComponent(ReferenzenSectionSlider, new ReferenzenSectionSlider({}));
    const __VLS_11 = __VLS_10({}, ...__VLS_functionalComponentArgsRest(__VLS_10));
    ({}({}));
    const __VLS_14 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(ReferenzenSectionSlider, __VLS_11));
    // @ts-ignore
    [AboutMeCard,];
    // @ts-ignore
    const __VLS_15 = __VLS_asFunctionalComponent(AboutMeCard, new AboutMeCard({}));
    const __VLS_16 = __VLS_15({}, ...__VLS_functionalComponentArgsRest(__VLS_15));
    ({}({}));
    const __VLS_19 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(AboutMeCard, __VLS_16));
    // @ts-ignore
    [Kontakt,];
    // @ts-ignore
    const __VLS_20 = __VLS_asFunctionalComponent(Kontakt, new Kontakt({}));
    const __VLS_21 = __VLS_20({}, ...__VLS_functionalComponentArgsRest(__VLS_20));
    ({}({}));
    const __VLS_24 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(Kontakt, __VLS_21));
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                Kontakt: Kontakt,
                Hero: Hero,
                LeistungsCardsInvert: LeistungsCardsInvert,
                AboutMeCard: AboutMeCard,
                ReferenzenSectionSlider: ReferenzenSectionSlider,
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

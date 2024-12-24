import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import dhrwEngLogo from '../assets/DHRW_ENG_WHITE.png';
import rempelLogo from '../assets/Rempel.png';
import khettabiLogo from '../assets/Logo-Badro-white.svg';
import siraliLogo from '../assets/Logo Sirali.png';
import futureFoodsLogo from '../assets/FutureFoods.png';
import dhrwAkademieLogo from '../assets/Logo_Akad_Normal.png';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const references = ref([
    {
        link: 'https://dhrw-engineering.de',
        imgSrc: dhrwEngLogo,
        imgAlt: 'DHRW Engineering GmbH',
        imgHeight: '60px',
        description: 'Bei der DHRW Engineering GmbH habe ich die Sicherheitsstandards für Mitarbeiterzugänge und Datenzugriffe verbessert, um den Schutz sensibler Informationen zu gewährleisten. Zusätzlich habe ich eine Mitarbeiterschulung zum Thema IT-Sicherheit durchgeführt, um das Bewusstsein für potenzielle Risiken zu schärfen.',
    },
    {
        link: 'https://rempel-gmbh.de',
        imgSrc: rempelLogo,
        imgAlt: 'Rempel GmbH',
        imgHeight: '60px',
        description: 'Bei der Rempel GmbH habe ich ein umfassendes Kommunikationssystem entwickelt und implementiert. Dieses System verbessert den Austausch und die Zusammenarbeit innerhalb des Unternehmens und stärkt die Kommunikation mit externen Partnern.',
    },
    {
        link: 'https://www.khettabi.com',
        imgSrc: khettabiLogo,
        imgAlt: 'Khettabi',
        imgHeight: '50px',
        description: 'In Zusammenarbeit mit Khettabi habe ich erfolgreich kundenübergreifende Frontend-Probleme gelöst. Dabei lag der Fokus auf der Optimierung der Benutzeroberflächen, um eine einheitliche und reibungslose Nutzererfahrung über verschiedene Plattformen hinweg zu gewährleisten.',
    },
    {
        link: 'https://sirali.de',
        imgSrc: siraliLogo,
        imgAlt: 'Sirali',
        imgHeight: '55px',
        description: 'Hier habe ich die vollständige Betreuung des Web-Auftritts übernommen. Dabei habe ich nicht nur das visuelle Erscheinungsbild der Website gestaltet, sondern auch gezielte Online-Marketing-Strategien implementiert, um die Reichweite zu erhöhen und den Traffic zu verbessern.',
    },
    {
        link: 'https://future-foods.org',
        imgSrc: futureFoodsLogo,
        imgAlt: 'Future Foods',
        imgHeight: '60px',
        description: 'Bei Future Foods habe ich die Rolle als IT-Lead übernommen. In dieser Funktion habe ich eine maßgeschneiderte Netzwerkstruktur entworfen und bin verantwortlich für die Durchführung sämtlicher EDV-Arbeiten, um einen reibungslosen und effizienten IT-Betrieb sicherzustellen.',
    },
    {
        link: 'https://dhrw-akademie.de',
        imgSrc: dhrwAkademieLogo,
        imgAlt: 'DHRW Akademie GmbH',
        imgHeight: '60px',
        description: 'In Kooperation mit der DHRW Akademie GmbH habe ich ein Netzwerkkonzept entwickelt, das die Netzwerkinfrastruktur nachhaltig sichert. Durch die Implementierung von intrusion detection und automatisierter Reaktionen auf Angriffe werden zukünftige Attacken schon behoben, bevor sie stattgefunden haben.',
    },
]);
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ id: ("refSection"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    // @ts-ignore
    const __VLS_0 = {}
        .Swiper;
    ({}.Swiper);
    ({}.Swiper);
    __VLS_components.Swiper;
    __VLS_components.Swiper;
    // @ts-ignore
    [Swiper, Swiper,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ modules: (([__VLS_ctx.Navigation, __VLS_ctx.Pagination, __VLS_ctx.Autoplay])), navigation: ((true)), pagination: (({ clickable: true })), spaceBetween: ((30)), slidesPerView: ((3)), autoplay: (({ delay: 2000 })), loop: (true), ...{ class: ("referenzen") }, }));
    const __VLS_2 = __VLS_1({ modules: (([__VLS_ctx.Navigation, __VLS_ctx.Pagination, __VLS_ctx.Autoplay])), navigation: ((true)), pagination: (({ clickable: true })), spaceBetween: ((30)), slidesPerView: ((3)), autoplay: (({ delay: 2000 })), loop: (true), ...{ class: ("referenzen") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ modules: (([__VLS_ctx.Navigation, __VLS_ctx.Pagination, __VLS_ctx.Autoplay])), navigation: ((true)), pagination: (({ clickable: true })), spaceBetween: ((30)), slidesPerView: ((3)), autoplay: (({ delay: 2000 })), loop: (true), ...{ class: ("referenzen") }, }));
    const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
    for (const [ref, index] of __VLS_getVForSourceType((__VLS_ctx.references))) {
        // @ts-ignore
        const __VLS_6 = {}
            .SwiperSlide;
        ({}.SwiperSlide);
        ({}.SwiperSlide);
        __VLS_components.SwiperSlide;
        __VLS_components.SwiperSlide;
        // @ts-ignore
        [SwiperSlide, SwiperSlide,];
        // @ts-ignore
        const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ key: ((index)), }));
        const __VLS_8 = __VLS_7({ key: ((index)), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
        ({}({ key: ((index)), }));
        const __VLS_11 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("refCard") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ((ref.link)), target: ("_blank"), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((ref.imgSrc)), alt: ((ref.imgAlt)), height: ((ref.imgHeight)), });
        // @ts-ignore
        [Navigation, Pagination, Autoplay, references,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        (ref.description);
        __VLS_nonNullable(__VLS_11.slots).default;
    }
    __VLS_nonNullable(__VLS_5.slots).default;
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['referenzen'];
        __VLS_styleScopedClasses['refCard'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                Swiper: Swiper,
                SwiperSlide: SwiperSlide,
                Navigation: Navigation,
                Pagination: Pagination,
                Autoplay: Autoplay,
                references: references,
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

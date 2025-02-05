<script setup lang="ts">
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

interface Reference {
  link: string;
  imgSrc: string;
  imgAlt: string;
  imgHeight: string;
  description: string;
}

const references = ref<Reference[]>([
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
</script>

<template>
  <div id="refSection">
    <h4>REFERENZEN & PROJEKTE</h4>
    <h2>Kooperationspartner</h2>

    <Swiper
  :modules="[Navigation, Pagination, Autoplay]"
  :navigation="true"
  :pagination="{ clickable: true }"
  :spaceBetween="30"
  :slidesPerView="3"
  :autoplay="{ delay: 2000 }"
  loop
  class="referenzen"
>
  <SwiperSlide v-for="(ref, index) in references" :key="index">
    <div class="refCard">
      <a :href="ref.link" target="_blank">
        <img :src="ref.imgSrc" :alt="ref.imgAlt" :height="ref.imgHeight" />
      </a>
      <p>{{ ref.description }}</p>
    </div>
  </SwiperSlide>
</Swiper>

  </div>
</template>

<style scoped>
.refCard {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: top;
  background-color: var(--vt-c-background-dark);
  border-radius: 10px;
  padding: 1.2rem;
  margin: 0;
  width: 450px;
  height: 420px;
}

.refCard p {
  color: white;
  font-size: 1.2rem;
  font-weight: medium;
  margin-top: 2rem;
  margin-bottom: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  text-align: left;
  align-self: flex-start;
}

#refSection {
  align-items: center;
  justify-content: center;
  background-color: white;
  padding: 0 15rem;
  padding-top: 2rem;
  padding-bottom: 5rem;
  display: block;
}

h2 {
  color: black;
}

.referenzen {
  margin-top: 5rem;
  background-color: white;
  position: relative;
  justify-content: flex-start;
  width: 1450px;
}

img {
  filter: brightness(0) invert(1);
  justify-self: center;
}

a {
  display: flex;
  background-color: transparent;
  height: 80px;
  padding: 4px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 2px transparent solid;
  transition: border-color 1s;
}

@media (max-width: 1700px) {
  #refSection {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    height: auto;
    padding: 3rem 15rem;
    display: block;
  }

  .referenzen {
  width:100%;
}

  .refCard {
    width: 100%;
    height: auto;
    /* Removed margin to eliminate the gap on smaller screens */
    margin: 0;
  }

  .refCard p {
    display: none;
  }
}

@media (max-width: 1180px) {
  #refSection {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
    padding: 5rem 2rem;
    display: block;
  } 
  
  .refCard {
    width: 100%;
    height: auto;
    margin: 0;
  }

  .refCard p {
    display: none;
  }
}

@media (max-width: 800px) {
  

  h2 {
  font-size: 2.2rem;
}

  .refCard {
    width: 100%;
    height: auto;
    margin: 0;
  }

  .refCard p {
    display: none;
  }

  img {
  filter: brightness(0) invert(1);
  justify-self: center;
  width: 95%;
  height: auto;
}
}
</style>

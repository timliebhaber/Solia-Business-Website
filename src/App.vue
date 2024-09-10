<script setup lang="ts">
import AboutMeCard from './components/AboutMeCard.vue'
import Kontakt from './components/KontaktSection.vue';
import Referenzen from './components/ReferenzenSection.vue';
import LeistungsCards from './components/LeistungsCards.vue';
import Hero from './components/HeroSection.vue';
import LeistungsCardsInvert from './components/LeistungsCardsInvert.vue';
</script>


<template>
  <header>
    
  </header>

  <main>
    <Hero />
    <LeistungsCardsInvert/>
    <LeistungsCards/>
    <Referenzen />
    <AboutMeCard />
    <Kontakt />
  </main>
</template>


<style scoped lang="scss">



</style>
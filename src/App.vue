<script setup lang="ts">
import Header from './components/Header.vue'
import AboutMe from './components/AboutMe.vue'
</script>

<template>
  <header>
    <img alt="Solia Logo" class="logo" src="./assets/Logo Border.png" width="125" height="125" />

    <div class="wrapper">
      <img alt="Solia Solutions" class="logo" src="./assets/Solia Solutions Color.png" width="259" height="113" />
    </div>
  </header>

  <main>
    <AboutMe />

  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>

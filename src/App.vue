<script setup lang="ts">
import AboutMeCard from './components/AboutMeCard.vue'
import Kontakt from './components/KontaktSection.vue';
import Referenzen from './components/ReferenzenSection.vue';
import LeistungsCards from './components/LeistungsCards.vue';
import Hero from './components/HeroSection.vue';
</script>


<template>
  <header>
    <div class="navbar">
        <img src="./assets/Logo White.png" alt="Logo" class="logo-small">
        <nav class="nav-links">
            <a href="#home">Home</a>
            <a href="#leistungen">Leistungen</a>
            <a href="#über">Über mich</a>
            <a href="#kontakt">Kontakt</a>
        </nav>
    </div>
  </header>

  <main>
    <Hero />
    <Referenzen />
    <LeistungsCards/>
    <AboutMeCard />
    <Kontakt />
  </main>
</template>


<style scoped lang="scss">

.navbar {
    background-color: transparent;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    height: 8vh;
}

.logo-small {
    width: 30px;
    height: 30px;
    margin-right: 20px;
}

.nav-links a {
    color: white;
    padding: 10px 20px;
    text-decoration: none;
    margin: 0 15px;
    font-family: 'Haas', sans-serif;
    font-weight: bold;
    font-size: 18px;
    transition: background-color 0.3s ease-in-out;
    border-radius: 5px;
}

.nav-links a:hover {
    background-color: #ffffff23;
    -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  border-radius: 8px;
  box-shadow: 0 4px 90px rgba(0,0,0,0.1);
  overflow: hidden;
  &:before {
    content: "";
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: rgb(255,255,255);
    background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255, 255, 255, 0.473) 34%, rgba(255,255,255,1) 89%, rgba(255,255,255,0) 100%);
    opacity: 0.3;
    filter: blur(.5px);
    mix-blend-mode: hard-light;
  }
}

</style>
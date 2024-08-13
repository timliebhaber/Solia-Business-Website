<script setup lang="ts">
import Willkommen from './components/Willkommen.vue';
import AboutMe from './components/AboutMe.vue'
import Kontakt from './components/Kontakt.vue';
import Leistungen from './components/Leistungen.vue';

</script>

<template>
  <header>
    <div class="logo-container">
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
    <Willkommen />
    <Leistungen/>
    <AboutMe />
    <div id="kontakt">
        <Kontakt />
    </div>
   
    
  </main>
</template>

<style scoped>

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    color: white;
}

.logo-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo-small {
    width: 30px;
    height: 30px;
    margin-right: 20px;
}

.logo-large {
    width: 60px;
    height: 40px;
    transform: scaleX(1.5); /* Slightly horizontally bigger */
    margin-top: 5px;
}

#kontakt {
  display: flex;
  justify-content: center; /* Horizontally centers the container */
}

.nav-links a {
    color: white;
    padding: 10px 20px;
    text-decoration: none;
    margin: 0 15px;
    font-size: 18px;
    transition: color 0.3s ease;
}

</style>
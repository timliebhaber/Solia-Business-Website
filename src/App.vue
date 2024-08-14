<script setup lang="ts">
import Willkommen from './components/Willkommen.vue';
import AboutMe from './components/AboutMe.vue'
import Kontakt from './components/Kontakt.vue';
import Leistungen from './components/Leistungen.vue';
import Referenzen from './components/Referenzen.vue';

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
    <Willkommen />
    <Referenzen />
    <Leistungen />
    <AboutMe />
    <Kontakt />
   
    
  </main>
</template>

<style scoped>

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
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
    font-size: 18px;
    transition: background-color 0.3s ease-in-out;
    border-radius: 5px;
}

.nav-links a:hover {
    background-color: #0EA0D7;
}

</style>
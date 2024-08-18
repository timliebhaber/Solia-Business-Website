<script setup lang="ts">
</script>

<template>
    <div id="über">
    <h3>Über mich</h3>
    <div class="card">
    <p>
    Ich bin studierter Informatiker mit Schwerpunkt in künstlicher Intelligenz. Ich bin interessiert an Neuroinformatik, KI und Blockchain-Technologie, Web Entwicklung und Software Engineering.
    Mehr über mich findest du auf meinem <a href="https://www.linkedin.com/in/tim-liebhaber/" target="_blank" rel="noopener">LinkedIn</a>.
    </p> 
    </div>

    </div>

</template>

<style scoped>

#über {
  padding: 2rem;
  --card-height: 40vh;
  --card-width: 50vw;
  display: flex;
  align-items: center;
  flex-direction: column;
}

@property --rotate {
  syntax: "<angle>";
  initial-value: 132deg;
  inherits: false;
}


body {
  min-height: 100vh;
  background: #212534;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 2rem;
  padding-bottom: 2rem;
  box-sizing: border-box;
}


.card {
  background: #191c29;
  width: var(--card-width);
  height: var(--card-height);
  padding: 10px;
  position: relative;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;
  font-size: 1.5em;
  color: rgba(255, 255, 255, 0.925);
  cursor: pointer;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}


.card::before {
  content: "";
  width: 51vw;
  height: 41vh;
  border-radius: 8px;
  background-image: linear-gradient(
    var(--rotate)
    , #5ddcff, #3c67e3 43%, #4e00c2);
    position: absolute;
    z-index: -1;
    top: -1%;
    left: -1%;
    animation: spin 2.5s linear infinite;
}

.card::after {
  position: absolute;
  content: "";
  top: calc(var(--card-height) / 6);
  left: 0;
  right: 0;
  z-index: -1;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  transform: scale(0.8);
  filter: blur(calc(var(--card-height) / 6));
  background-image: linear-gradient(
    var(--rotate)
    , #5ddcff, #3c67e3 43%, #4e00c2);
    opacity: 1;
  transition: opacity .5s;
  animation: spin 2.5s linear infinite;
}

@keyframes spin {
  0% {
    --rotate: 0deg;
  }
  100% {
    --rotate: 360deg;
  }
}

a {
  color: #ffffffd0;
  text-decoration: none;
  font-family: sans-serif;
  font-weight: bold;
  margin-top: 2rem;
}

</style>
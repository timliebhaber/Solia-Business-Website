<script setup lang="ts">
</script>

<template>
    <div id="über">
    <h3>Über mich</h3>
    <div class="card">
    <div class="cardImage">
      <img src="../assets/Logo Border.png" alt="Profilbild" style="width: 180px; height: 180px;"> 
    </div>
    <div class="separator"></div>
    <div class="cardText">
    <h3>Tim Liebhaber</h3>
    <p>
    Ich bin studierter Informatiker mit Schwerpunkt in künstlicher Intelligenz. Ich bin interessiert an Neuroinformatik, KI und Blockchain-Technologie, Web Entwicklung und Software Engineering.
    <br/><br/>Mehr über mich findest du auf meinem <a href="https://www.linkedin.com/in/tim-liebhaber/" target="_blank" rel="noopener">LinkedIn</a>. <br/>Ausklappen für Lebenslauf.
    </p> 
    </div>
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
  background-color: var(--color-background-dark);
}

.card {
  background: linear-gradient(135deg, rgb(255, 255, 255), rgb(202, 202, 202));
  width: var(--card-width);
  height: var(--card-height);
  border-radius: 110px;
  padding: 1rem;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.cardImage {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem;
  background: radial-gradient(circle, #ffffff 50%, #616161 100%);
  border-radius: 100px;
  
}

.separator {
  width: 5px; /* Thickness of the line */
  height: 80%; /* Height of the line */
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.75) 25%, rgba(0, 0, 0, 0.75) 75%, rgba(0, 0, 0, 0) 100%);
  margin-right: 2rem;
}

.cardText {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: first baseline;
  text-align: left;
}

.card h3 {
  font-size: 2rem;
  color: rgba(0, 0, 0, 0.829);
}

.cardImage img {
  height: 10px;
  border-radius: 100px;
  padding: 1rem;
  opacity: 0.9;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.6);
}

.card p {
  font-size: 1.2rem;
  color: rgba(0, 0, 0, 0.829)
}

</style>
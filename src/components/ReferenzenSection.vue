<script setup lang="ts">

</script>

<template>
  <div id = "refSection">
    <h4>REFERENZEN & PROJEKTE</h4>
    <h2>Kooperationspartner</h2>

    <div class="referenzen">
      <div class = "refCard">
        <a href="https://dhrw-engineering.de" target="_blank"><img src="../assets/DHRW_ENG_WHITE.png" alt="DHRW Engineering GmbH" height = 60px></a>
        <p>Bei der DHRW Engineering GmbH habe ich die Sicherheitsstandards für 
          Mitarbeiterzugänge und Datenzugriffe verbessert, um den Schutz 
          sensibler Informationen zu gewährleisten. Zusätzlich habe ich 
          eine Mitarbeiterschulung zum Thema IT-Sicherheit durchgeführt, 
          um das Bewusstsein für potenzielle Risiken zu schärfen.</p>
      </div>
      
      <div class = "refCard">
        <a href="https://rempel-gmbh.de" target="_blank"><img src="../assets/Rempel.png" alt="Rempel GmbH" height = 60px></a>
        <p>
          Bei der Rempel GmbH habe ich ein umfassendes Kommunikationssystem 
          entwickelt und implementiert, das sowohl interne als auch externe 
          Kommunikation für die Mitarbeiter optimiert. Dieses System 
          verbessert den Austausch und die Zusammenarbeit innerhalb des 
          Unternehmens und stärkt die Kommunikation mit 
          externen Partnern.</p>
      </div>

      <div class = "refCard">
        <a href="https://www.khettabi.com" target="_blank"><img src="../assets/Logo-Badro-white.svg" alt="Khettabi" height = 50px></a>
        <p>In Zusammenarbeit mit Khettabi habe ich erfolgreich 
          kundenübergreifende Frontend-Probleme gelöst. Dabei lag 
          der Fokus auf der Optimierung der Benutzeroberflächen, 
          um eine einheitliche und reibungslose Nutzererfahrung 
          über verschiedene Plattformen hinweg zu gewährleisten.</p>
      </div>
      
      </div>
      <div class="referenzen">
      <div class = "refCard">
        <a href="https://sirali.de" target="_blank"><img src="../assets/Logo Sirali.png" alt="Sirali" height = 55px></a>
          <p>Hier habe ich die vollständige Betreuung des Web-Auftritts 
            übernommen. Dabei habe ich nicht nur das visuelle 
            Erscheinungsbild der Website gestaltet, sondern auch 
            gezielte Online-Marketing-Strategien implementiert, 
            um die Reichweite zu erhöhen und den Traffic 
            zu verbessern.</p>
      </div>
      <div class = "refCard">
        <a href="https://future-foods.org" target="_blank"><img src="../assets/FutureFoods.png" alt="Future Foods" height = 60px></a>
        <p>
          Bei Future Foods habe ich die Rolle als IT-Lead übernommen. In 
          dieser Funktion habe ich eine maßgeschneiderte Netzwerkstruktur 
          entworfen und bin verantwortlich für die Durchführung sämtlicher 
          EDV-Arbeiten, um einen reibungslosen und effizienten IT-Betrieb 
          sicherzustellen.</p>
      </div>
      <div class = "refCard">
        <a href="https://dhrw-akademie.de" target="_blank"><img src="../assets/Logo_Akad_Normal.png" alt="DHRW Akademie GmbH" height = 60px></a>
        <p>In Kooperation mit der DHRW Akademie GmbH habe ich ein Netzwerkkonzept 
          entwickelt, das die Netzwerkinfrastruktur nachhaltig sichert.
          Durch die Implementierung von intrusion detection und automatisierter 
          Reaktionen auf Angriffe werden zukünftige Attacken
          schon behoben, bevor sie stattgefunden haben.</p>
      </div>
    </div>
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
  width: 450px;
  height: 450px;
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
  display: flex;
  justify-content: space-between;
  align-items: center;
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

@media (max-width: 1150px) {
  
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
    margin: 1rem;
  }

  .refCard p {
    display: none;
  }


}



</style>
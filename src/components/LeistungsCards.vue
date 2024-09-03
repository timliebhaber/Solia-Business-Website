<script setup lang="js"></script>

<script>
import VanillaTilt from 'vanilla-tilt';
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Tilt',
    data: function(){
        return {
            items: [
        {id: 1}]
        }
    },
    mounted() {
  // Überprüfen, ob $refs.tiltRef ein Array ist und ob es Elemente enthält
  if (Array.isArray(this.$refs.tiltRef) && this.$refs.tiltRef.length > 0) {
    this.$refs.tiltRef.forEach((element) => {
      VanillaTilt.init(element, this.options);
    });
  } else {
    console.error('Keine Elemente gefunden, auf die VanillaTilt angewendet werden kann.');
  }
},
    props: {
        options: Object,
        parallax: Boolean
    }
}
</script>


<template>

<div id="leistungen">
    <!-- Über und unter Leistungen noch mehr Text -->
<h4>INDIVIDUELLE LÖSUNGEN</h4>
<h2>Leistungen</h2>
<p id="beschreibung">In einer zunehmend digitalisierten Welt sind maßgeschneiderte Lösungen der Schlüssel zum Erfolg.
    In den folgenden Bereichen biete ich Ihnen individuell abgestimmte Dienstleistungen, die Ihre Geschäftsprozesse optimieren, 
    Ihre Daten schützen und Ihre Online-Präsenz stärken.</p>
<div id="tiltcardcontainer">
<!-- Kleine "Highlights" über Karten, so wie Beleuchtungen in einem Trophäenschrank -->
    <!-- Tiltkarten bei kleinerem Bildschirm in Reihen, nur mit Logo, Titel und Leistungen aber gleichem style -->
    <a href="https://solia-solutions.de/KI" style="text-decoration: none; color: inherit;">
    <div v-for="(item) in items" :key="item.id" ref="tiltRef" class="tiltMe" data-tilt data-tilt-glare="true"
        data-tilt-max-glare="0.3"
        data-tilt-scale ="1.1"
        data-tilt-speed="1000"
        data-tilt-perspective="500"
        data-tilt-max="5">
        <img src="../assets/kunstliche-intelligenz.png" height="80px" />
        <h3>Künstliche Intelligenz</h3>
        <p>Künstliche Intelligenz wird immer wichtiger, um wettbewerbsfähig zu bleiben und Prozessabläufe zu beschleunigen. <br><br>
            <ul class="custom-list">
                <li><font-awesome-icon icon="play" :style="{ fontSize: '14px' }" /> ‎ Unternehmensanalysen</li> 
                <li><font-awesome-icon icon="play" :style="{ fontSize: '14px' }" /> ‎ Individuelle Beratungen</li>             
                <li><font-awesome-icon icon="play" :style="{ fontSize: '14px' }" /> ‎ Maßgeschneiderte KI-Lösungen</li> 
            </ul>
            </p>
            
    </div>
    </a>

    <a href="https://solia-solutions.de/IT-Sicherheit" style="text-decoration: none; color: inherit;">
    <div v-for="(item) in items" :key="item.id" ref="tiltRef" class="tiltMe" data-tilt data-tilt-glare="true"
        data-tilt-max-glare="0.3"
        data-tilt-scale ="1.1"
        data-tilt-speed="1000"
        data-tilt-perspective="500"
        data-tilt-max="5">
        <img src="../assets/sicherheit.png" height="80px" />
        <h3>IT-Sicherheit</h3>
        <p>Eine starke IT-Sicherheit ist essenziell, um Ihre Informationen und Ihr Unternehmen zu schützen.<br><br>
            <ul class="custom-list">
                <li><font-awesome-icon icon="play" :style="{ fontSize: '14px' }" /> ‎ Umfassende Systemchecks</li> 
                <li><font-awesome-icon icon="play" :style="{ fontSize: '14px' }" /> ‎ Penetration Testing</li>             
                <li><font-awesome-icon icon="play" :style="{ fontSize: '14px' }" /> ‎ Individuelle Sicherheitslösungen</li>
            </ul> 
        </p>
    </div>
    </a>

    <a href="https://solia-solutions.de/Web-Entwicklung" style="text-decoration: none; color: inherit;">
    <div v-for="(item) in items" :key="item.id" ref="tiltRef" class="tiltMe" data-tilt data-tilt-glare="true"
        data-tilt-max-glare="0.3"
        data-tilt-scale ="1.1"
        data-tilt-speed="1000"
        data-tilt-perspective="500"
        data-tilt-max="5">
        <img src="../assets/web-design.png" height="80px" />
        <h3>Web-Entwicklung</h3>
        <p>Der Internetauftritt ist oft der erste Eindruck, den Kunden von Ihrem Unternehmen bekommen.
            <br><br>
            <ul class="custom-list">
                <li><font-awesome-icon icon="play" :style="{ fontSize: '14px' }" /> ‎ Ansprechende Websites</li> 
                <li><font-awesome-icon icon="play" :style="{ fontSize: '14px' }" /> ‎ Interne Firmenwebsite</li>             
                <li><font-awesome-icon icon="play" :style="{ fontSize: '14px' }" /> ‎ Front- und Backendlösungen</li>
            </ul> 
        </p>
    </div>
    </a>

</div>
</div>

</template>


<style scoped>

#leistungen {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
    background-color: white;
    padding: 5rem 15rem;
    display: block;
}

#beschreibung {
    margin: 2rem 0;
    color: black;
    width: 50%;
    font-size: 1.3rem;
}

ul.custom-list {
            list-style-type: none; /* Disable default bullets */
            padding: 0; /* Remove default padding */
            margin-top: 0px; /* Remove default margin */
        }

        ul.custom-list li {
            margin: 1rem 0;
            padding-left: 0; /* Remove any padding */
            position: relative;
            display: flex;
            align-items: center; /* Align items vertically */
        }

h2 {
    margin-bottom: 2rem;
    color: black;
}

h3 {
    color: white;
    font-size: 1.9rem;
    font-weight: bold;
}

#tiltcardcontainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: auto;
    gap: 50px;
    background-color: #e0e0e0;
    padding: 30px 30px;
    border: 1px solid #919191;
    border-radius: 10px;
    box-shadow: inset 0px 0px 30px rgba(0, 0, 0, 0.7); /* Basic inner shadow */
}

.tiltMe {
	width : 420px;
	height: 500px;
    padding: 30px;
    background: rgba(0, 0, 0, .9);
    border-radius: 10px;
    border: 1px solid rgba(255,255,255,.15);
    display: flex;
    flex-direction: column;
    align-items: center;
}

.tiltMe:hover{
    border: 2px solid rgba(104, 104, 104, 0.356);
}

.tiltMe img {
    filter: invert(100%) grayscale(100%);
}

.tiltMe p {
    color: rgb(201, 201, 201);
    font-size: 1.2rem;
    font-weight: medium;
}

</style>
<script setup lang="js"></script>

<script>
import VanillaTilt from 'vanilla-tilt';
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Tilt',
    data: function(){
        return {
            items: [
        { id: 1, text: 'Element 1' }]
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
<h2>Leistungen</h2>
</div>
<div id="tiltcardcontainer">
    
    <a href="https://solia-solutions.de/KI" style="text-decoration: none; color: inherit;">
    <div v-for="(item) in items" :key="item.id" ref="tiltRef" class="tiltMe" data-tilt data-tilt-glare="true"
        data-tilt-max-glare="0.5"
        data-tilt-scale ="1.1"
        data-tilt-speed="200"
        data-tilt-perspective="500"
        data-tilt-max="5">
        <img src="../assets/kunstliche-intelligenz.png" height="60px" />
        <h3>Künstliche Intelligenz</h3>
        <p>Künstliche Intelligenz wird immer wichtiger, um wettbewerbsfähig zu bleiben. 
            <br> 
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
        data-tilt-max-glare="0.5"
        data-tilt-scale ="1.1"
        data-tilt-speed="200"
        data-tilt-perspective="500"
        data-tilt-max="5">
        <img src="../assets/sicherheit.png" height="60px" />
        <h3>IT-Sicherheit</h3>
        <p>IT-Sicherheit wird immer entscheidender, um Ihr Unternehmen vollständig zu schützen.
            <br> 
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
        data-tilt-max-glare="0.5"
        data-tilt-scale ="1.1"
        data-tilt-speed="200"
        data-tilt-perspective="500"
        data-tilt-max="5">
        <img src="../assets/web-design.png" height="60px" />
        <h3>Web-Entwicklung</h3>
        <p>Der Internetauftritt ist oft der erste Eindruck, den Kunden von Ihrem Unternehmen bekommen.
            <br>
            <ul class="custom-list">
                <li><font-awesome-icon icon="play" :style="{ fontSize: '14px' }" /> ‎ Ansprechende Websites</li> 
                <li><font-awesome-icon icon="play" :style="{ fontSize: '14px' }" /> ‎ Interne Firmenwebsite</li>             
                <li><font-awesome-icon icon="play" :style="{ fontSize: '14px' }" /> ‎ Front- und Backendlösungen</li>
            </ul> 
        </p>
    </div>
    </a>

</div>

</template>


<style scoped>

ul.custom-list {
            list-style-type: none; /* Disable default bullets */
            padding: 0; /* Remove default padding */
            margin: 0; /* Remove default margin */
        }

        ul.custom-list li {
            margin: 10px 0;
            padding-left: 0; /* Remove any padding */
            position: relative;
            display: flex;
            align-items: center; /* Align items vertically */
         
        }

h2 {
    margin: 2rem;
}

#tiltcardcontainer {
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
}

.tiltMe {
	width : 350px;
	height: 400px;
    margin: 20px;
    padding: 30px;
    background: rgba(255,255,255,.25);
    border-radius: 10px;
    border: 1px solid rgba(255,255,255,.15);
    display: flex;
    flex-direction: column;
    align-items: center;
    
}

.tiltMe img {
    filter: invert(100%) grayscale(100%);
}

.tiltMe p {
    color: rgb(201, 201, 201);
    font-size: 1rem ;
}

</style>
<script setup lang="js"></script>

<script>
import VanillaTilt from 'vanilla-tilt';
export default {
    name: 'Tilt',
    data: function(){
        return {
        }
    },
    mounted(){
        VanillaTilt.init(this.$refs.tiltRef,this.options)
    },
    props: {
        options: Object,
        parallax: Boolean
    }
}
</script>


<template>
<h2>Leistungen</h2>

<div id="tiltcardcontainer">
    
    <a href="https://solia-solutions.de/KI" style="text-decoration: none; color: inherit;">
    <div class="tiltMe" ref="tiltRef" data-tilt data-tilt-glare="true"
        data-tilt-max-glare="0.5"
        data-tilt-speed="200"
        data-tilt-perspective="500"
        data-tilt-max="5">
        <img src="../assets/kunstliche-intelligenz.png" height="60px"></img>
        <h3>Künstliche Intelligenz</h3>
        <p>Künstliche Intelligenz wird immer wichtiger, um wettbewerbsfähig zu bleiben. Hier erhalten Sie Unternehmensanalysen, Beratungen sowie 
            die Entwicklung maßgeschneiderter KI-Lösungen, die perfekt auf Ihre Bedürfnisse zugeschnitten sind.</p>
    </div>
    </a>

    <a href="https://solia-solutions.de/IT-Sicherheit" style="text-decoration: none; color: inherit;">
    <div class="tiltMe" data-tilt data-tilt-glare="true"
        data-tilt-max-glare="0.5"
        data-tilt-speed="200"
        data-tilt-perspective="500"
        data-tilt-max="5">
        <img src="../assets/sicherheit.png" height="60px"></img>
        <h3>IT-Sicherheit</h3>
        <p>IT-Sicherheit wird immer entscheidender, um Ihr Unternehmen zu schützen. Daher biete ich umfassende 
            Systemchecks, Penetration Testing und individuelle Sicherheitslösungen an, die speziell mit Ihren Anforderungen abgestimmt sind.</p>
    </div>
    </a>

    <a href="https://solia-solutions.de/Web-Entwicklung" style="text-decoration: none; color: inherit;">
    <div class="tiltMe" ref="tiltRef" data-tilt data-tilt-glare="true"
        data-tilt-max-glare="0.5"
        data-tilt-speed="200"
        data-tilt-perspective="500"
        data-tilt-max="5">
        <img src="../assets/web-design.png" height="60px"></img>
        <h3>Web-Entwicklung</h3>
        <p>Eine starke Web-Präsenz ist heute unverzichtbar. Ich entwickle ansprechende Websites für Ihren öffentlichen 
            Internetauftritt, sowie effiziente Front- und Backendlösungen für den internen Firmengebrauch.</p>
    </div>
    </a>

</div>



</template>


<style scoped>

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
    font-size: 1 rem ;
}

</style>
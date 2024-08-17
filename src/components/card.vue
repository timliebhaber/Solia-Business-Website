<script setup lang="ts">
</script>

<template>
      <h3>Leistungen</h3>
  <div id="Leistungen">

  <div class="container">
        <div class="card">
            <div class="face face1">
                <div class="content">
                    <img src="../assets/Logo Border.png">
                    <h3>Künstliche Intelligenz</h3>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <p>Künstliche Intelligenz wird immer wichtiger, um wettbewerbsfähig zu bleiben. Hier erhalten Sie Unternehmensanalysen, Beratungen sowie die 
                      Entwicklung maßgeschneiderter KI-Lösungen, die perfekt auf Ihre Bedürfnisse zugeschnitten sind.</p>
                        <a href="#kontakt">Zum Kontakt</a>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="face face1">
                <div class="content">
                    <img src="../assets/Logo Border.png">
                    <h3>IT-Sicherheit</h3>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <p>IT-Sicherheit wird immer entscheidender, um Ihr Unternehmen zu schützen. Daher biete ich umfassende 
                      Systemchecks, Penetration Testing und individuelle Sicherheitslösungen an, die speziell mit Ihren Anforderungen abgestimmt sind.</p>
                        <a href="#kontakt">Zum Kontakt</a>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="face face1">
                <div class="content">
                    <img src="../assets/Logo Border.png">
                    <h3>Web-Entwicklung</h3>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <p>
                      Eine starke Web-Präsenz ist heute unverzichtbar. Ich entwickle ansprechende Websites für Ihren 
                      öffentlichen Internetauftritt, sowie effiziente Front- und Backendlösungen für den internen Firmengebrauch.</p>
                        <a href="#kontakt">Zum Kontakt</a>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<style scoped>

h3 {
    margin: 2rem;
}

#Leistungen{
    margin-top: 50px;
    padding: 0;
    min-height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: consolas;
}

.container{
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container .card{
    position: relative;
    cursor: pointer;
}

.container .card .face{
    width: 300px;
    height: 300px;
    margin-right: 10px;
    margin-left: 10px;
    transition: 0.7s;
}

.container .card .face.face1{
    position: relative;
    background: #333;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    transform: translateY(100px);
}

.container .card:hover .face.face1{
    background: var(--color-ci1);
    transform: translateY(0);
}

.container .card .face.face1 .content{
    opacity: 1;
    transition: 1s;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}



.container .card .face.face1 .content img{
    max-width: 100px;
}

.container .card .face.face1 .content h3{
    margin: 10px 0 0;
    padding: 0;
    color: #fff;
    text-align: center;
    font-size: 1.5em;
}

.container .card .face.face2{
    position: relative;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);
    transform: translateY(-200px);
}

.container .card:hover .face.face2{
    transform: translateY(0);
}

.container .card .face.face2 .content p{
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #333;  
  margin: 0;
    padding: 0;
}

.container .card .face.face2 .content a{
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;  
  margin: 15px 0 0;
    display:  inline-block;
    text-decoration: none;
    font-weight: 400;
    color: #333;
    padding: 5px;
    border: 1px solid #333;
    border-radius: 5px;
}

.container .card .face.face2 .content a:hover{
    background: #333;
    color: #fff;
}
</style>
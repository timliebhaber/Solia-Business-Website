<script setup lang="ts">
import { onMounted, ref } from 'vue';

const hiddenElements = ref<Element[]>([]);

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {null}
    });
  });

  hiddenElements.value = Array.from(document.querySelectorAll('.hidden'));
  hiddenElements.value.forEach((el) => observer.observe(el));
});

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('toggle-button');
    const container = document.getElementById('container');
    const hiddenDiv = document.getElementById('hidden-div');

    if (!button || !container || !hiddenDiv) {
        console.error('One or more required elements are missing from the DOM');
        return;
    }

    let isExpanded = false;

    button.addEventListener('click', () => {
        if (!isExpanded) {
            container.style.maxHeight = `${container.scrollHeight}px`;
            hiddenDiv.style.transform = 'translateY(0)';
        } else {
            container.style.maxHeight = 'auto';
            hiddenDiv.style.transform = 'translateY(-100%)';
        }
        isExpanded = !isExpanded;
    });
});
</script>

<template>
    <div id="über">
    
      
      <h4>WARUM SOLIA</h4>
    <h2>Über mich</h2>
    <div class="content">
      <button id="toggle-button">v</button>
    <div id="container">
   
        <div id="expandable-div">
          <div class="card">
    <div class="cardTop">
    <div class="cardImage">
      <img src="../assets/Logo Border.png" alt="Profilbild" style="width: 180px; height: 180px;"> 
    </div>
    <div class="separator"></div>
    <div class="cardText">
    <div class="infoText">
    <h3>Tim Liebhaber</h3>
    <p>
    Ich bin studierter Informatiker mit Schwerpunkt in künstlicher Intelligenz. <br/>Meine größten Interessen sind Neuroinformatik, KI- und System-Sicherheit, Web Entwicklung und Software Engineering.
    <br/><br/>
      <!-- Relevanten Lebenslauf dazuschreiben inkl aller relevanter Module -->
  </p> 
    </div>
  </div>
    </div>
          </div>
  
        </div>
        <div id="hidden-div">
          <div class="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2">
            <ul class="timeline">
              <div class="timeline-content">
                        <h2 class="timeline-title">Erfahrungen</h2>
                    </div>
                <li class="timeline-item">
                    <div class="timeline-info">
                        <h4>2023 - Heute</h4>
                    </div>
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <h3 class="timeline-title">IT - Projektmanager</h3>
                        <p>Als IT-Projektmanager leitete ich ein kleines Team und übernahm sowohl die Koordination als auch operative Aufgaben im Web Development. 
                          Neben der Projektplanung und -steuerung entwickelte ich eine maßgeschneiderte Software zur Optimierung interner Prozesse.</p>
                    </div>
                </li>
                <li class="timeline-item">
                    <div class="timeline-info">
                        <h4>2021 - Heute</h4>
                    </div>
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <h3 class="timeline-title">Selbstständiger Softwareentwickler</h3>
                        <p>Als selbstständiger Softwareentwickler habe ich in der Vergangenheit für verschiedene Partner Systementwicklungsprojekte realisiert, 
                          bei denen ich sowohl Frontend- als auch Backendaufgaben übernahm. Mein Fokus lag dabei auf der IT-Sicherheit und Benutzerfreundlichkeit 
                          der entwickelten Software, um robuste und zugleich intuitive Lösungen zu schaffen. 
                          Durch maßgeschneiderte Systeme sorgte ich dafür, dass die individuellen Anforderungen meiner Kunden bestmöglich erfüllt wurden. </p>
                    </div>
                </li>
                <li class="timeline-item period">
                    <div class="timeline-info"></div>
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <h2 class="timeline-title">Bildung</h2>
                    </div>
                </li>
                <li class="timeline-item">
                    <div class="timeline-info">
                        <h4>2019 - 2024</h4>
                    </div>
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <h3 class="timeline-title">Bachelor of Science - Informatik</h3>
                        <p>In meinem Bachelorstudium der Informatik lag der Schwerpunkt auf Neuroinformatik, Künstlicher Intelligenz und IT-Sicherheit. 
                          Dabei habe ich fundierte Kenntnisse in den Bereichen maschinelles Lernen, neuronale Netze und sicherheitsrelevante IT-Systeme erworben. 
                          Durch praxisorientierte Projekte und theoretische Ansätze konnte ich mein Verständnis für innovative Technologien vertiefen und deren 
                          Anwendung in der realen Welt kennenlernen. 
                          Diese Schwerpunkte haben mein technisches Wissen und mein Interesse an zukunftsweisenden Entwicklungen nachhaltig geprägt. </p>
                    </div>
                </li>
                <li class="timeline-item">
                    <div class="timeline-info">
                        <h4>2015</h4>
                    </div>
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <h3 class="timeline-title">Praktikum Informatik</h3>
                        <p>
                          Während meines Praktikums in der Informatikabteilung der Firma Allgaier erhielt ich einen umfassenden Einblick in die vielfältigen 
                          Aufgaben eines Informatikers. Ich konnte erste praktische Erfahrungen in der Systemadministration sowie in der Softwareentwicklung 
                          sammeln und habe dabei wertvolle Kenntnisse in der IT-Infrastruktur und im Support erworben. 
                          Dieses Praktikum hat mein Verständnis für die IT-Welt deutlich erweitert und mein Interesse an der Informatik weiter gestärkt. </p>
                    </div>
                </li>
            </ul>
        </div>
        </div>
    </div>
    <div class="iconContainer">
      <div class="hidden">
        <img src="../assets/python.png">
        <h2>Python</h2>
      </div>
      <div class="hidden">
      <img src="../assets/typescript.png">
      <h2>Typescript</h2>
      </div>
      <div class="hidden">
      <img src="../assets/csharp.svg">
      <h2>C#</h2>
      </div>
      <div class="hidden">
      <img src="../assets/java.png">
      <h2>Java</h2>
      </div>
      <div class="hidden">
      <img src="../assets/html.png">
      <h2>HTML</h2>
      </div>
      <div class="hidden">
      <img src="../assets/css-3.png">
      <h2>(S)CSS</h2>
      </div>
      </div>
    </div>
    </div>

</template>

<style scoped lang="scss">

#container {
            overflow: hidden;
            transition: max-height 0.5s ease-out;
            max-height: auto;
        }
#expandable-div {
    position: relative;
    background-color: #f0f0f0;
  z-index: 20;
  p {color: black;}

    padding: 20px;
}
#hidden-div {
    background-color: #e0e0e0;
  z-index: -10;
  p {color: black;}
    padding: 20px;
    transform: translateY(-100%);
    transition: transform 0.5s ease-out;
}

#über {
  padding: 5rem 15rem;
  // --card-height: 35vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: var(--color-background-dark);
  display: block;
  position: relative;
}

h2 {
  margin-bottom: 2rem;
}

h4 {
  color: rgb(207, 207, 207);
}

.card {
  background: linear-gradient(135deg, rgb(255, 255, 255), rgb(212, 212, 212));
  border-radius: 80px;
  width: 100%;
  padding: 1rem;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  flex: 3;
}

.cardTop {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.cardImage {
  display: flex;
  align-self: flex-start; /* Force this child to be aligned at the top */
  margin: 2rem;
  background: radial-gradient(circle, #ffffff 50%, #616161 100%);
  border-radius: 100px;
  
}

.separator {
  width: 3px; /* Thickness of the line */
  height: 100%; /* Height of the line */
  display: flex;
  align-self: flex-start; /* Force this child to be aligned at the top */
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.75) 25%, rgba(0, 0, 0, 0.75) 75%, rgba(0, 0, 0, 0) 100%);
  margin-right: 2rem;
}

.cardText {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: first baseline;
  text-align: left;
  padding-right: 10%;
}

.card h3 {
  font-size: 2rem;
  font-weight: bold;
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

.content {
  display: flex;  
  position: relative;
  justify-content: space-between;
}

.iconContainer {
  margin-top: 7rem;
  display: flex;
  flex-direction: column;
  align-items: end;
  flex:1;
}

.hidden {
  z-index: 20;
  width: 140px;
  height: 140px;
  margin: 1rem;
  margin-bottom: 4.5rem;
  padding: 1rem;
  border-radius: 5px;
  transform: translateX(80%);
  opacity: 0;
  transition: transform 2s, opacity 2s ease-in;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h2 {
    margin-top: 1rem;
    font-size: 1.5rem;
    opacity: 0;
    transition: 500ms;
  }
}

.hidden img{
  z-index: 26;
  width: 140px;
  height: 140px;
  padding: 1rem;
  border-radius: 5px;
  background: linear-gradient(135deg, rgba(252, 252, 252, 0.973), rgb(134, 134, 134));
}


.visible {
  opacity: 1;
  filter: blur(0);
  transform: translateX(0);
}

.visible:hover {
  h2{
    opacity: 1;
  }
}


/*----- TIMELINE -----*/
    .timeline {
        line-height: 1.4em;
        list-style: none;
        margin: 0;
        margin-top: 5rem;
        padding-left: 3rem;
        padding-right: 3rem;
        width: 100%;
        h1, h2, h3, h4, h5, h6 {
            line-height: inherit;
        }

        h2 {
          font-size: 3rem;
          margin-top: 3rem;  
          margin-bottom: 0;
          color: black;
        }

        h4 {
          margin: 0;
          padding: 0;
          color: rgb(141, 141, 141);
        }
    }

    /*----- TIMELINE ITEM -----*/

    .timeline-item {
        padding-left: 40px;
        position: relative;
        &:last-child {
            padding-bottom: 0;
        }
    }

    /*----- TIMELINE INFO -----*/

    .timeline-info {
        font-size: 12px;
        font-weight: 700;
        letter-spacing: 2px;
        margin: 0 0 .5em 0;
        white-space: nowrap;
    }
    /*----- TIMELINE MARKER -----*/

    .timeline-marker {
        position: absolute;
        top: 0; bottom: 0; left: 0;
        width: 15px;
        &:before {
            background: var(--color-ci1);
            border: 3px solid transparent;
            border-radius: 100%;
            content: "";
            display: block;
            height: 15px;
            position: absolute;
            top: 4px; left: 0;
            width: 15px;
            transition: background 0.3s ease-in-out,
                    border 0.3s ease-in-out;
        }
        &:after {
            content: "";
            width: 3px;
            background: #CCD5DB;
            display: block;
            position: absolute;
            top: 24px; bottom: 0; left: 6px;
        }
        .timeline-item:last-child &:after {
            content: none;
        }
    }
    .timeline-item:not(.period):hover .timeline-marker:before {
        background: transparent;
        border: 3px solid var(--color-ci1);
    }

    /*----- TIMELINE CONTENT -----*/

    .timeline-content {
        padding-bottom: 40px;
        p:last-child {
            margin-bottom: 0;
        }
    }

    /*----- TIMELINE PERIOD -----*/
    
    .period {
        padding: 0;
        .timeline-info {
            display: none;
        }
        .timeline-marker {
            &:before {
                background: transparent;
                content: "";
                width: 15px;
                height: auto;
                border: none;
                border-radius: 0;
                top: 0;
                bottom: 30px;
                position: absolute;
                border-top: 3px solid #CCD5DB;
                border-bottom: 3px solid #CCD5DB;
            }
            &:after {
                content: "";
                height: 32px;
                top: auto;
            }
        }
        .timeline-content {
            padding: 40px 0 70px;
        }
        .timeline-title {
            margin: 0;
        }
    }


</style>
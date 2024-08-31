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
</script>

<template>
    <div id="über">
    <h4>WARUM SOLIA</h4>
    <h2>Über mich</h2>
    <div class="content">
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
                        <p>DNS Settings vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis
                            eu pede mollis pretium. Pellentesque ut neque.</p>
                    </div>
                </li>
                <li class="timeline-item">
                    <div class="timeline-info">
                        <h4>2021 - Heute</h4>
                    </div>
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <h3 class="timeline-title">Selbstständiger Softwareentwickler</h3>
                        <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis
                            eu pede mollis pretium. Pellentesque ut neque. </p>
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
                        <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis
                            eu pede mollis pretium. Pellentesque ut neque. </p>
                    </div>
                </li>
                <li class="timeline-item">
                    <div class="timeline-info">
                        <h4>2015</h4>
                    </div>
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <h3 class="timeline-title">Praktikum Informatik</h3>
                        <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis
                            eu pede mollis pretium. Pellentesque ut neque. </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    <div class="iconContainer">
      <img class="hidden" src="../assets/python.png">
      <img class="hidden" src="../assets/typescript.png">
      <img class="hidden" src="../assets/csharp.svg">
      <img class="hidden" src="../assets/java.png">
      <img class="hidden" src="../assets/html.png">
      <img class="hidden" src="../assets/css-3.png">
    </div>
    </div>
 
    </div>

</template>

<style scoped lang="scss">

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
  margin-top: 3rem;
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
  margin-bottom: 3rem;
  padding: 1rem;
  border-radius: 5px;
  transform: translateX(80%);
  background: linear-gradient(135deg, rgba(252, 252, 252, 0.973), rgb(134, 134, 134));
  opacity: 0;
  transition: all 2s;
}

.visible {
  opacity: 1;
  filter: blur(0);
  transform: translateX(0);
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
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
    <div id="container">  
      <div id="card">
        <div id="expandable-div">
          <div class="cardTop">
            <div class="cardImage">
              <img src="../assets/Logo Border.png" alt="Profilbild" style="width: 180px; height: 180px;"> 
            </div>
            <div class="separator"></div>
          <div class="cardText">
        <div class="infoText">
          <h3>Tim Liebhaber</h3>
          <p>
          Ich bin studierter Informatiker mit  Schwerpunkt in der künstlichen Intelligenz. <br/>Meine größten Interessen sind Neuroinformatik, KI- und System-Sicherheit, Web Entwicklung und Software Engineering.
          <br/><br/>
            <!-- Relevanten Lebenslauf dazuschreiben inkl aller relevanter Module -->
          </p> 
        </div>
    </div>
    </div>
    </div>
  
        </div>
        <div id="iconContainer">
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
    </div>

</template>

<style scoped lang="scss">

#button-box {
    display: flex;
    width: 100%;
    justify-content: flex-start;
    align-items: flex-end;
    padding-top: 0.5rem;
}

#toggle-button {
    background: none;
    padding: 2px 10px;
    color: rgb(22, 22, 22);
    border: 1px solid rgba(116, 116, 116, 0.356);
    border-radius: 10px;
    font-size: 1.5rem;
    transition: all 0.3s;
}

#toggle-button:hover {
    background: none;
    padding: 2px 10px;
    transform: scale(1.05);
    color: rgb(0, 0, 0);
    border: 1px solid rgba(116, 116, 116, 0.13);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    font-size: 1.5rem;
}

#container {
            overflow: hidden;
            transition: max-height 0.5s ease-out;
            max-height: auto;
            border-radius: 80px;
        }
#expandable-div {
  position: relative;
  z-index: 20;
  padding: 20px;
}

#expandable-div p {color: black;}

#hidden-div {
    background-color: #e0e0e0;
    border-radius: 80px;
    flex:3;
    position: relative;
    z-index: 0;
    padding: 20px;
    transform: translateY(-100%);
    transition: transform 2s ease-in-out;
}

#hidden-div p {color: black;}

#über {
  padding: 5rem 15rem;
  // --card-height: 35vh;
  height:auto;
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

h3 {
  font-size: 2rem;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.829);
}

h4 {
  color: rgb(207, 207, 207);
}

#card {
  background: linear-gradient(135deg, rgb(255, 255, 255), rgb(212, 212, 212));
  border-radius: 80px;
  position: relative;
  z-index: 30;
  width: 100%;
  padding: 1rem;
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

.infoText p{
  font-size: 1.2rem;
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
  height: auto;
  justify-content: space-between;
}

#iconContainer {
  margin-top: 7rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
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

@media (max-width: 767px){
.infoText h3{
  display: none;
}


.cardTop {
  display: flex; /* Aktiviert Flexbox */
  justify-content: center; /* Horizontales Zentrieren */
  align-items: center; /* Vertikales Zentrieren */
  text-align: center;
  height: 100%; /* Stellt sicher, dass die Höhe des Containers berücksichtigt wird */
}

.cardImage {
  height: 0;
  width: 0;
}

.cardImage img {
  display: none;  
  margin: 0; /* Entfernt eventuell vorhandene automatische Margins */
    align-self: center; /* Zentriert das Bild im Flex-Container */
  }

}

@media(max-width: 1180px) {
  #über {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  padding: 2rem 2rem;
  display: block;
}

}

@media (max-width: 1600px) {
  .visible{
    display: none;
  }

  .cardTop {
  display: flex; /* Aktiviert Flexbox */
  justify-content: center; /* Horizontales Zentrieren */
  align-items: center; /* Vertikales Zentrieren */
  text-align: center;
  height: 100%; /* Stellt sicher, dass die Höhe des Containers berücksichtigt wird */
}


.cardImage {
  height: 100%;
  display: flex;
  justify-content: center;
  align-self: center;
  align-items: center;
}

.cardImage img {
    margin: 0; /* Entfernt eventuell vorhandene automatische Margins */
    align-self: center; /* Zentriert das Bild im Flex-Container */
  }

}





</style>
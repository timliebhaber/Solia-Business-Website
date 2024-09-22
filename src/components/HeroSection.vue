<script setup lang="ts">

import TypeWriter from './TypeWriter.vue'

// Definiere die Wörter, die im Typewriter angezeigt werden sollen
const words = ["Künstliche Intelligenz", "IT-Sicherheit", "Web-Entwicklung", "Software-Entwicklung"]

document.addEventListener('DOMContentLoaded', () => {
    const interBubble = document.querySelector('.interactive') as HTMLElement | null;
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    const move = (): void => {
        curX += (tgX - curX) / 20;
        curY += (tgY - curY) / 20;
        if (interBubble) {
            interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
        }
        requestAnimationFrame(move);
    };

    window.addEventListener('mousemove', (event: MouseEvent): void => {
        tgX = event.clientX;
        tgY = event.clientY;
    });

    move();
});

</script>

<template>

  <div id="heroSection">
<!-- TODO: Navbar for sizes that overlap code -> Slide-out Menu (Hamburger) -->
    <div class="navbar">
        <img src="../assets/Logo White.png" alt="Logo" class="logo-small">
        <nav class="nav-links">
            <a href="#leistungen">Leistungen</a>
            <a href="#refSection">Partner</a>
            <a href="#über">Über mich</a>
            <a href="#kontakt">Kontakt</a>
        </nav>
    </div>
    <!-- Include Logo on the left -->
  <div id="contentContainer">
    <div class="logo">
      
      <div class="card">
         <svg 
     viewBox="0 0 100% 100%"
     xmlns='http://www.w3.org/2000/svg'
     class="noise"
     >
  <filter id='noiseFilter'>
    <feTurbulence 
                  type='fractalNoise' 
                  baseFrequency='0.85' 
                  numOctaves='6' 
                  stitchTiles='stitch'/>
  </filter>

  <rect
        width='100%'
        height='100%'
        preserveAspectRatio="xMidYMid meet"
        filter='url(#noiseFilter)' />
</svg>

<div class="content">
  <div class="center-content">
      <h1><span style="font-weight: bold;">Gemeinsam moderne Lösungen finden</span>  <br> <TypeWriter
      :words="words"
      :typingSpeed="100"
      :deletingSpeed="40"
      :waitTime="1000"/>
    </h1>
  <div class="second-content">
      <p>Entwicklung individueller IT-Lösungen für Ihren Betrieb <br> maßgeschneidert, modern und effizient</p>
      <a class="button" href="#kontakt">Kontaktieren Sie mich!</a>  
    </div>
  </div>
  <div class="contentRow">
    <a href="https://github.com/timliebhaber" target="_blank"><i class="fa fa-github" style="font-size:45px"></i></a>
    <a href="https://www.linkedin.com/in/tim-liebhaber/" target="_blank"><i class="fa fa-linkedin" style="font-size:45px"></i></a>
  </div>
</div>
</div>
    </div>
    
</div>
<div class="gradient-bg">
  <svg 
       viewBox="0 0 100vw 100vw"
       xmlns='http://www.w3.org/2000/svg'
       class="noiseBg"
       >
    <filter id='noiseFilterBg'>
      <feTurbulence 
                    type='fractalNoise'
                    baseFrequency='0.6'
                    stitchTiles='stitch' />
    </filter>

    <rect
          width='100%'
          height='100%'
          preserveAspectRatio="xMidYMid meet"
          filter='url(#noiseFilterBg)' />
  </svg>
  <svg xmlns="http://www.w3.org/2000/svg" class="svgBlur">
    <defs>
      <filter id="goo">
        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
        <feBlend in="SourceGraphic" in2="goo" />
      </filter>
    </defs>
  </svg>
  <div class="gradients-container">
    <div class="g1"></div>
    <div class="g2"></div>
    <div class="g3"></div>
    <div class="g4"></div>
    <div class="g5"></div>
    <div class="interactive"></div>
  </div>
</div>
</div>
</template>


<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');

#heroSection{
  display: flex;
  flex-direction: column;
  height: 100vh;
    justify-content: space-between; /* Space between the left and right sides */
}

h1 {
    font-size: 4.7rem;
    font-weight: 200;
    text-align: center;
    color: white;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    margin-bottom: 0rem;
}

p {
    font-size: 1.4rem;
    font-weight: 200;
    color: white;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    text-align: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
}

.navbar {
    background-color: transparent;
    display: flex;
    justify-content: space-between;
    grid-area: 10px;
    align-items: center;
    padding-top: 4.5rem;
    height: 8vh;
    padding-left: 15rem;
    padding-right: 15rem;
    z-index: 100;
}

.center-content {
  display: flex;
  flex-direction: column;
  align-items: center; // Center the <h1> and <p> horizontally
  justify-content: center; // Center them vertically
  transform: translateY(2rem); ;
  flex-grow: 1; // Allow this container to take up all available space
}

.second-content {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center; // Center the <h1> and <p> horizontally
  justify-content: flex-end; // Center them vertically
}

.logo { 
  width: 100%;
}

.card {
  position: relative; // Ensure .card is positioned relative to allow absolute positioning
  z-index: 10;
  width: 100%;
  min-height: 85vh;
  padding: 40px;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  border-radius: 8px;
  box-shadow: 0 4px 50px rgba(0,0,0,.3);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center; // Center content vertically
  align-items: center; // Center content horizontally
  &:before {
    content: "";
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: rgb(255,255,255);
    background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 34%, rgba(255,255,255,1) 89%, rgba(255,255,255,0) 100%);
    opacity: 0.3;
    filter: blur(.5px);
    mix-blend-mode: hard-light;
  }

  .noise {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
    opacity: 0.1;
  }

  .content {
    height: 100%;
    display: flex;
    flex-direction: column; // Make sure items stack vertically
    align-items: flex-start; // Align items to the left (if needed)
    justify-content: flex-start; // Align items to the top
} 
}

.logo-small {
    width: 40px;
    height: 40px;
    margin-right: 20px;
}

.button {
    color: white;
    background-color: #ffa612;
    padding: 10px 20px;
    margin-top: 1rem;
    text-decoration: none;
    font-family: 'Haas', sans-serif;
    font-weight: bold;
    font-size: 20px;
    box-shadow: 0px 4px 3px rgba(255, 123, 0, 0.8);
    text-shadow: 0px 2px 2px rgba(0,0,0,.3);
    transition: background-color 0.2s ease-in-out,transform 0.2s, box-shadow 0.2s;
    border-radius: 5px;
}

.button:hover {
  background-color: #ff8c00  ;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  box-shadow: 0px 0px 0px rgba(0,0,0,0);
  overflow: hidden;
  transform: translateY(4px); 
}

.nav-links a {
    color: white;
    padding: 10px 20px;
    margin-left: 2rem;
    text-decoration: none;
    font-family: 'Haas', sans-serif;
    font-weight: bold;
    font-size: 18px;
    transition: background-color 0.3s ease-in-out;
    border-radius: 5px;
}

.nav-links a:hover {
    background-color: #ffffff23;
    -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  border-radius: 8px;
  box-shadow: 0 4px 90px rgba(0,0,0,0.1);
  overflow: hidden;
  &:before {
    content: "";
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: rgb(255,255,255);
    background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255, 255, 255, 0.473) 34%, rgba(255,255,255,1) 89%, rgba(255,255,255,0) 100%);
    opacity: 0.3;
    filter: blur(.5px);
    mix-blend-mode: hard-light;
  }
}

* {
  margin:0;
  padding:0;
  outline:none;
  list-style:none;
  text-decoration:none;
  box-sizing:border-box;
  color:#FFF;
  background: transparent;
  border:none;
}

#contentContainer {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: transparent;
    justify-content: center;
    position: absolute;
    top: 55%;
    transform: translateY(-50%); 
   
}

li {
  font-size: 1.5rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  
}

@keyframes moveInCircle {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes moveVertical {
  0% {
    transform: translateY(-50%);
  }
  50% {
    transform: translateY(50%);
  }
  100% {
    transform: translateY(-50%);
  }
}

@keyframes moveHorizontal {
  0% {
    transform: translateX(-50%) translateY(-10%);
  }
  50% {
    transform: translateX(50%) translateY(10%);
  }
  100% {
    transform: translateX(-50%) translateY(-10%);
  }
}


.gradient-bg {
  margin-top: -27.9rem;
  width: 100%;
  height: 100vh;
  position: relative;
  z-index: -200;
  overflow: hidden;
  background: linear-gradient(135deg, black,var(--color-grad2));

  .svgBlur {
    display: none;
  }

  .noiseBg {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    mix-blend-mode: soft-light;
    opacity: 0.6;
  }
  .gradients-container {
    filter: url(#goo) blur(40px) ;
    width: 100%;
    height: 100%;
  }

  .g1 {
    position: absolute;
    background: radial-gradient(circle at center, rgba(#50238a, 0.8) 0, rgba(#50238a, 0) 50%) no-repeat;
    mix-blend-mode: var(--blending);

    width: var(--circle-size);
    height: var(--circle-size);
    top: calc(50% - var(--circle-size) / 2);
    left: calc(50% - var(--circle-size) / 2);

    transform-origin: center center;
    animation: moveVertical 30s ease infinite;

    opacity: 0.6;
  }

  .g2 {
    position: absolute;
    background: radial-gradient(circle at center, rgba(#8a2370, 0.8) 0, rgba(#8A2387, 0) 50%) no-repeat;
    mix-blend-mode: var(--blending);

    width: var(--circle-size);
    height: var(--circle-size);
    top: calc(50% - var(--circle-size) / 2);
    left: calc(50% - var(--circle-size) / 2);

    transform-origin: calc(50% - 400px);
    animation: moveInCircle 20s reverse infinite;

    opacity: 0.6;
  }

  .g3 {
    position: absolute;
    background: radial-gradient(circle at center, rgba(#6d40e9, 0.8) 0, rgba(#6d40e9, 0) 50%) no-repeat;
    mix-blend-mode: var(--blending);

    width: var(--circle-size);
    height: var(--circle-size);
    top: calc(50% - var(--circle-size) / 2 + 200px);
    left: calc(50% - var(--circle-size) / 2 - 500px);

    transform-origin: calc(50% + 400px);
    animation: moveInCircle 40s linear infinite;

    opacity: 0.7 ;
  }

  .g4 {
    position: absolute;
    background: radial-gradient(circle at center, rgba(#e97640, 0.8) 0, rgba(#e97640, 0) 50%) no-repeat;
    mix-blend-mode: var(--blending);

    width: var(--circle-size);
    height: var(--circle-size);
    top: calc(50% - var(--circle-size) / 2);
    left: calc(50% - var(--circle-size) / 2);

    transform-origin: calc(50% - 200px);
    animation: moveHorizontal 40s ease infinite;

    opacity: 0.6;
  }

  .g5 {
    position: absolute;
    background: radial-gradient(circle at center, rgba(#540ea5, 0.8) 0, rgba(#540ea5, 0) 50%) no-repeat;
    mix-blend-mode: var(--blending);

    width: calc(var(--circle-size) * 2);
    height: calc(var(--circle-size) * 2);
    top: calc(50% - var(--circle-size));
    left: calc(50% - var(--circle-size));

    transform-origin: calc(50% - 800px) calc(50% + 200px);
    animation: moveInCircle 20s ease infinite;

    opacity: 0.7;
  }

  .interactive {
    position: absolute;
    background: radial-gradient(circle at center, rgba(#c06418, 0.7) 0, rgba(#c06418, 0) 50%) no-repeat;
    mix-blend-mode: var(--blending);

    width: 100%;
    height: 100%;
    top: -50%;
    left: -50%;
    opacity: 0.8;
  }
}

.content i {
    font-size: 1.375rem;
    color: #ffffff;
    transition: color 0.3s ease-in-out;
}

.contentRow {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute; // Use absolute positioning to place it at the bottom
  bottom: 20px; // Adjust this value as needed for spacing from the bottom
  left: 50%; // Center horizontally
  transform: translateX(-50%); // Correct the position after left: 50%
}

.content i:hover {
    color: #b8b8b8;
}

.fa-github {
    margin-right: 1rem;
}

.hero-list {
    list-style-type: none; /* Disable default bullets */
    line-height: 3rem;
    margin-top: 5rem;
    margin-bottom: 6rem;
}

nav a[href="#kontakt"] {
    /* Your styles here */
    color: white;
    background-color: #ffa612;
    padding: 10px 20px;
    margin-top: 1rem;
    text-decoration: none;
    font-family: 'Haas', sans-serif;
    font-weight: bold;
    font-size: 20px;
    text-shadow: 0px 2px 2px rgba(0,0,0,.3);
    transition: background-color 0.2s ease-in-out,transform 0.2s, box-shadow 0.2s;
    border-radius: 5px;
}

nav a[href="#kontakt"]:hover {
  background-color: #ff8c00  ;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  box-shadow: 0px 0px 0px rgba(0,0,0,0);
  border-radius: 5px;
  overflow: hidden;
}

</style>
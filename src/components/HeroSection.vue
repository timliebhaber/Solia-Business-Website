<script setup lang="ts">
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
            <a href="#über">Über mich</a>
            <a href="#refSection">Partner</a>
            <a href="#kontakt">Kontakt</a>
        </nav>
    </div>
    <!-- Include Logo on the left -->
  <div id="contentContainer">
    <div class="logo">
      <img src="../assets/Solia Solutions Color.png" alt="Logo"></img>
    </div>
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
                    stitchTiles='stitch' />
    </filter>

    <rect
          width='100%'
          height='100%'
          preserveAspectRatio="xMidYMid meet"
          filter='url(#noiseFilter)' />
  </svg>
  
  <div class="content">
    <h1>Moderne Lösungen</h1>
    <p>Von AI-Beratung, über System- und Netzwerksicherheit bis hin zur Webentwicklung finde ich die passende Lösung zu jedem Ihrer Probleme. Um mehr zu erfahren, scrollen Sie runter oder klicken Sie hier:</p>
    <a href="https://github.com/timliebhaber" target="_blank"><i class="fa fa-github" style="font-size:36px"></i></a>
        <a href="https://www.linkedin.com/in/tim-liebhaber/" target="_blank"><i class="fa fa-linkedin" style="font-size:36px"></i></a>
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

.logo-small {
    width: 40px;
    height: 40px;
    margin-right: 20px;
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
    height:100%;
    background-color: transparent;
    justify-content: space-between;
    padding: 0 15rem;
    position: absolute;
    top: 50%;
    transform: translateY(-50%); 
   
}

.logo {
  z-index: 10;
  max-width: 600px;  
}

  .card {
  z-index: 10;
  max-width: 535px;
  min-width: 535px;
  padding: 40px;
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
    z-index: 1;
    opacity: 0.1;
  }

  .content {
    position: relative;
    z-index: 2;
    text-shadow: -3px 0px 2px rgba(0,0,0,0.1);
  }
}

h1 {
  font-size: 3rem;
  margin-bottom: 16px;
}

p {
  font-size: 1.2rem;
  line-height: 1.6;
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
    opacity: 0.3;
  }
  .gradients-container {
    filter: url(#goo) blur(40px) ;
    width: 100%;
    height: 100%;
  }

  .g1 {
    position: absolute;
    background: radial-gradient(circle at center, rgba(var(--color1), 0.8) 0, rgba(var(--color1), 0) 50%) no-repeat;
    mix-blend-mode: var(--blending);

    width: var(--circle-size);
    height: var(--circle-size);
    top: calc(50% - var(--circle-size) / 2);
    left: calc(50% - var(--circle-size) / 2);

    transform-origin: center center;
    animation: moveVertical 30s ease infinite;

    opacity: 1;
  }

  .g2 {
    position: absolute;
    background: radial-gradient(circle at center, rgba(var(--color2), 0.8) 0, rgba(var(--color2), 0) 50%) no-repeat;
    mix-blend-mode: var(--blending);

    width: var(--circle-size);
    height: var(--circle-size);
    top: calc(50% - var(--circle-size) / 2);
    left: calc(50% - var(--circle-size) / 2);

    transform-origin: calc(50% - 400px);
    animation: moveInCircle 20s reverse infinite;

    opacity: 1;
  }

  .g3 {
    position: absolute;
    background: radial-gradient(circle at center, rgba(var(--color3), 0.8) 0, rgba(var(--color3), 0) 50%) no-repeat;
    mix-blend-mode: var(--blending);

    width: var(--circle-size);
    height: var(--circle-size);
    top: calc(50% - var(--circle-size) / 2 + 200px);
    left: calc(50% - var(--circle-size) / 2 - 500px);

    transform-origin: calc(50% + 400px);
    animation: moveInCircle 40s linear infinite;

    opacity: 1;
  }

  .g4 {
    position: absolute;
    background: radial-gradient(circle at center, rgba(var(--color4), 0.8) 0, rgba(var(--color4), 0) 50%) no-repeat;
    mix-blend-mode: var(--blending);

    width: var(--circle-size);
    height: var(--circle-size);
    top: calc(50% - var(--circle-size) / 2);
    left: calc(50% - var(--circle-size) / 2);

    transform-origin: calc(50% - 200px);
    animation: moveHorizontal 40s ease infinite;

    opacity: 0.7;
  }

  .g5 {
    position: absolute;
    background: radial-gradient(circle at center, rgba(var(--color5), 0.8) 0, rgba(var(--color5), 0) 50%) no-repeat;
    mix-blend-mode: var(--blending);

    width: calc(var(--circle-size) * 2);
    height: calc(var(--circle-size) * 2);
    top: calc(50% - var(--circle-size));
    left: calc(50% - var(--circle-size));

    transform-origin: calc(50% - 800px) calc(50% + 200px);
    animation: moveInCircle 20s ease infinite;

    opacity: 1;
  }

  .interactive {
    position: absolute;
    background: radial-gradient(circle at center, rgba(var(--color-interactive), 0.8) 0, rgba(var(--color-interactive), 0) 50%) no-repeat;
    mix-blend-mode: var(--blending);

    width: 100%;
    height: 100%;
    top: -50%;
    left: -50%;
    opacity: 0.7;
  }
}

.content i {
    font-size: 1.375rem;
    margin-top: 1rem;
    color: #afafaf;
    transition: color 0.3s ease-in-out;
}

.content i:hover {
    color: #ffffff;
}

.fa-github {
    margin-right: 15px;
}

</style>
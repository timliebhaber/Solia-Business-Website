<script setup lang="ts">
</script>

<template>
  <div class="card">
  <h2>Scroll Now<br>Thank Yourself Later</h2>
  <button><a href="#footer">Scroll</a></button>
</div>
<footer id="footer">
  <div class="col col1">
    <h3>CoolSite</h3>
    <p>Made with <span style="color: #BA6573;">❤</span> by Jux</p>
    <div class="social">
      <a href="https://codepen.io/Juxtopposed" target="_blank" class="link"><img src="https://assets.codepen.io/9051928/codepen_1.png" alt="" /></a>
      <a href="https://twitter.com/juxtopposed" target="_blank" class="link"><img src="https://assets.codepen.io/9051928/x.png" alt="" /></a>
      <a href="https://youtube.com/@juxtopposed" target="_blank" class="link"><img src="https://assets.codepen.io/9051928/youtube_1.png" alt="" /></a>
    </div>
    <p style="color: #818181; font-size: smaller">2024 © All Rights Reserved</p>
  </div>
  <div class="col col2">
    <p>About</p>
    <p>Our mission</p>
    <p>Privacy Policy</p>
    <p>Terms of service</p>
  </div>
  <div class="col col3">
    <p>Services</p>
    <p>Products</p>
    <p>Join our team</p>
    <p>Partner with us</p>
  </div>
  <div class="backdrop"></div>
</footer>
</template>

<style scoped>

@import url("https://fonts.googleapis.com/css?family=IBM%20Plex%20Sans:500|IBM%20Plex%20Sans:300");

:root {
  --m: 4rem;
}

* {
  box-sizing: border-box;
  scroll-behavior: smooth;
}

body {
  background-color: black;
  color: white;
  font-family: "IBM Plex Sans";
  font-weight: 300;

  display: flex;
  flex-direction: column;

  align-items: center;
  height: 190vh;
  margin: 0;
  color: #d5d5d5;
  font-size: calc(0.3 * var(--m));
}

h2 {
  font-weight: 500;
  text-align: center;
  font-size: var(--m);
  margin: 0;
}

h3 {
  font-weight: 500;
  font-size: calc(0.6 * var(--m));
  margin: 0;
}

.card {
  height: calc(8 * var(--m));
  width: calc(12 * var(--m));
  background: linear-gradient(120deg, #ff8064, #725bdc);
  color: black;
  border-radius: calc(0.5 * var(--m));

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: var(--m);

  position: fixed;
  margin: calc(2 * var(--m)) calc(5 * var(--m)) calc(5 * var(--m))
    calc(5 * var(--m));
}

button {
  background-color: #000;
  font-size: calc(0.4 * var(--m));
  border: none;
  color: #e5e5e5;
  font-family: "IBM Plex Sans";
  font-weight: 400;
  padding: calc(0.35 * var(--m)) calc(0.8 * var(--m));
  border-radius: calc(0.3 * var(--m));
}

footer {
  margin-top: 80vh;
  z-index: 500;
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-end;
  padding: 5rem 2vw;
  position: relative;
}

footer::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    rgba(0, 0, 0, 0) 5%,
    rgba(0, 0, 0, 0.3) 20%,
    rgba(0, 0, 0, 0.6) 30%,
    rgba(0, 0, 0, 0.8) 40%,
    rgba(0, 0, 0, 1) 50%,
    rgb(0, 0, 0)
  );
  z-index: -7;
}

.backdrop {
  z-index: -5;
  position: absolute;
  inset: 0;

  backdrop-filter: blur(40px);
  -webkit-backdrop-filter: blur(40px);

  mask-image: linear-gradient(
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.5) 10%,
    rgba(0, 0, 0, 0.8) 20%,
    rgba(0, 0, 0, 1) 30%,
    rgb(0, 0, 0)
  );

  -webkit-mask-image: linear-gradient(
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.5) 10%,
    rgba(0, 0, 0, 0.8) 20%,
    rgba(0, 0, 0, 1) 30%,
    rgb(0, 0, 0)
  );
}

.col {
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: calc(0.3 * var(--m)) calc(0.8 * var(--m));
  width: 28%;
}

.col2,
.col3 {
  background-color: #121212;
  border-radius: calc(0.5 * var(--m));
}

img {
  height: calc(0.3 * var(--m));
  object-fit: cover;
}

.social {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 1rem;
}

a {
  text-decoration: none;
  color: inherit;
}

.link {
  width: calc(0.8 * var(--m));
  height: calc(0.8 * var(--m));
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: calc(0.1 * var(--m));

  display: flex;
  justify-content: center;
  align-items: center;
}

@media screen and (max-width: 1000px) {
  :root {
    --m: 3rem;
  }
}

@media screen and (max-width: 700px) {
  footer {
    flex-direction: column;
    padding: 5rem 20vw;
  }
  .col {
    width: 100%;
  }
}

</style>
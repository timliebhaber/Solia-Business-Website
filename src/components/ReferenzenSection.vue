<script setup lang="ts">

</script>

<template>
  <div id = "refSection">
  <h4>REFERENZEN & PROJEKTE</h4>
  <h2>Kooperationspartner</h2>
  <div id="referenzen">
    <a href="https://www.khettabi.com" target="_blank"><img src="../assets/Logo-Badro-white.svg" alt="Khettabi" height = 50px></a>
    <a href="https://dhrw-engineering.de" target="_blank"><img src="../assets/DHRW_ENG_WHITE.png" alt="DHRW Engineering" height = 60px></a>
    <a href="https://dhrw-akademie.de" target="_blank"><img src="../assets/Logo_Akad_Normal.png" alt="DHRW Akademie" height = 60px></a>
    <a href="https://sirali.de" target="_blank"><img src="../assets/Logo Sirali.png" alt="Sirali" height = 55px></a>
  </div>
  </div>
</template>

<style scoped>

#refSection {
  align-items: center;
  justify-content: center;
  background-color: white;
  padding: 0 15rem;
  padding-top: 5rem;
  display: block;
}

h2 {
  color: black;
}


#referenzen {
  margin-top: 5rem;
  background-color: white;  
  display: flex;
  justify-content: space-between;
  align-items: center;
}

img {
  filter: brightness(0);
  justify-self: center;
}

a {
  display: flex;
  background-color: transparent;
  height: 80px;
  padding: 4px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 2px transparent solid;
  transition: border-color 1s;
}




</style>
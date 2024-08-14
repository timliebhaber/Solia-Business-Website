<script setup lang="ts">

</script>

<template>
 <section class="full-screen-section">
    <div class="logo">
        <img src="../assets/Solia Solutions Color.png" alt="My Logo" class="logo">
    </div>
    <div class="text">
        <h1>Ihr Dienstleister für individuelle Software</h1>
        <a href="https://github.com/timliebhaber"><i class="fa fa-github" style="font-size:36px"></i></a>
        <a href="https://www.linkedin.com/in/tim-liebhaber/"><i class="fa fa-linkedin" style="font-size:36px"></i></a>
    </div>
</section>
</template>


<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body, html {
    height: 100%;
    font-family: Arial, sans-serif;
}

.full-screen-section {
    display: flex;
    align-items: center; /* Vertically center items */
    justify-content: space-between; /* Space between the left and right sides */
    height: 100vh; /* Full viewport height */
    padding: 10%;
    gap: 200px;
    background-color: #f4f4f400; /* Light background color */
}


.logo img {
    max-height: 200px; /* Adjust the logo size */
    height: auto;
    width: auto;
}

.text {
    max-width: 600px; /* Optional: Limit the width of the text block */
    text-align: left;
}


.text a {
    font-size: 18px;
    color: #636363;
    transition: color 0.3s ease-in-out;
}

.text a:hover {
    color: #afafaf;
}

.fa-github {
    margin-right: 15px;
}


</style>
<script setup lang="ts">

</script>

<template>
 <section class="full-screen-section">
    <div class="logo">
        <img src="../assets/Solia Solutions Color.png" alt="My Logo" class="logo">
    </div>
    <div class="text">
        <h1>Ihr Dienstleister für individuelle Software</h1>
        GitHub Logo
        <img src="../assets/LinkedIn.png" alt="" class="icon" height="36px" onclick= "window.location.href= 'https://www.linkedin.com/in/tim-liebhaber/';">
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


.text p {
    font-size: 18px;
    color: #666;
}



</style>
<script setup lang="ts">
</script>

<template>
  <div id="kontakt">
  <h4>KOSTENLOSES ERSTGESPRÄCH VEREINBAREN</h4>
    <h2>Kontaktieren Sie mich</h2>
  <div id="adressandform">
  <div class="adress">
<p>
Ich freue mich, von Ihnen zu hören! <br>
Wenn Sie Fragen haben oder ein Angebot möchten,
zögern Sie nicht mich zu kontaktieren. <br>
Sie erreichen mich über das Kontaktformular oder per Email:<br><br>
<a href="mailto:info@solia-solutions.de">info@solia-solutions.de</a><br><br>
  Tim Liebhaber<br>
  Vöttinger Straße 34A<br>
  85354 Freising<br>
  <br><br> </p>
  <a href="https://github.com/timliebhaber" target="_blank"><i class="fa fa-github" style="font-size:36px"></i></a>
        <a href="https://www.linkedin.com/in/tim-liebhaber/" target="_blank"><i class="fa fa-linkedin" style="font-size:36px"></i></a>

  </div>
  <div class="container">
  <form action="action_page.php">

    <label for="name"></label>
    <input type="text" id="name" name="name" placeholder="Name">

    <label for="email"></label>
    <input type="email" id="email" name="email" placeholder="Email Adresse">

    <label for="subject"></label>
    <textarea id="subject" name="subject" placeholder="Nachricht" style="height:200px"></textarea>

    <input type="submit" value="Senden">

  </form>
  </div>
  </div>
</div>
</template>

<style scoped>

#adressandform {
  display: flex;
  justify-content: space-between;
  background-color: white;
}

.adress {
  width: 50%;
  min-width: 300px;
  padding-top: 1.2rem;
}

.adress p {
  color: black;
  font-size: 1.2rem;
  width: 80%;
}

#kontakt {
  align-items: center;
  background-color: white;
  padding: 5rem 15rem;
  display: block;
}

h2 {
  color: black;
}

input, select, textarea {
  width: 100%; /* Full width */
  color: rgb(255, 255, 255);
  font-family: 'Haas', sans-serif;
  font-size: 1rem;
  padding: 12px; /* Some padding */ 
  border: 1px solid #ccc; /* Gray border */
  border-radius: 4px; /* Rounded borders */
  box-sizing: border-box; /* Make sure that padding and width stays in place */
  margin-top: 6px; /* Add a top margin */
  margin-bottom: 16px; /* Bottom margin */
  resize: vertical; /* Allow the user to vertically resize the textarea (not horizontally) */
  background-color: var(--color-background-dark);
}

input::placeholder, textarea::placeholder {
  color: rgba(255, 255, 255, 0.863);
  font-family: 'Haas', sans-serif;
}

/* Style the submit button with a specific background color etc */
input[type=submit] {
  width: 30%;
  min-width: 100px; 
  background: linear-gradient(to bottom, #4d4d4d, #222222);
  color: rgb(255, 255, 255);
  font-weight: bold;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  
}

/* When moving the mouse over the submit button, add a darker green color */
input[type=submit]:hover {
  background: linear-gradient(to bottom, #303030, #2e2e2e);
  box-shadow: 0 0 10px rgba(5,0,0,0.5);
  
}

/* Add a background color and some padding around the form */
.container {
  padding: 1rem;
  border-radius: 5px;
  background: linear-gradient(135deg, #ffffff, #dbdbdb);
  width: 50%;
  min-width: 300px;
  margin-bottom: 2rem;
  box-shadow: #0000007a 0px 0px 10px;
}

#kontaktfeld {
  display: flex;
  justify-content: center; /* Horizontally centers the container */
  background-color: white;
  width: 100%;
}

.adress a{
    font-size: 1.375rem;
    margin-top: 1rem;
    color: #6b6b6b;
    transition: color 0.3s ease-in-out;
}

.adress a:hover {
    color: var(--color-ci1);
}

.fa-github {
    margin-right: 15px;
}

@media screen and (max-width: 850px) {
  #kontakt {
    padding: 5rem 2rem;
  }
  #adressandform {
    flex-direction: column;
  }
  .adress {
    width: 100%;
  }

  .fa-github, .fa-linkedin {
    display: none;
  }
  .container {
    width: 100%;
  }
  
}
</style>
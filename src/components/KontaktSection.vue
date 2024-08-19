<script setup lang="ts">
</script>

<template>
  <div id="kontakt">
  <h3>Kontakt</h3>
  <div id = kontaktfeld>
  <div class="container">
  <form action="action_page.php">

    <label for="name"></label>
    <input type="text" id="name" name="name" placeholder="Name">

    <label for="email"></label>
    <input type="email" id="email" name="email" placeholder="Email Adresse">

    <label for="subject"></label>
    <textarea id="subject" name="subject" placeholder="" style="height:200px"></textarea>

    <input type="submit" value="Submit">

  </form>
  </div>
  </div>
  </div>
</template>

<style scoped>

#kontakt {
  padding: 2rem;
}

/* Style inputs with type="text", select elements and textareas */
input, select, textarea {
  width: 100%; /* Full width */
  padding: 12px; /* Some padding */ 
  border: 1px solid #ccc; /* Gray border */
  border-radius: 4px; /* Rounded borders */
  box-sizing: border-box; /* Make sure that padding and width stays in place */
  margin-top: 6px; /* Add a top margin */
  margin-bottom: 16px; /* Bottom margin */
  resize: vertical /* Allow the user to vertically resize the textarea (not horizontally) */
}

/* Style the submit button with a specific background color etc */
input[type=submit] {
  width: 30%; /* Full width */
  background-color: #0B9DD2;
  color: rgb(255, 255, 255);
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

/* When moving the mouse over the submit button, add a darker green color */
input[type=submit]:hover {
  background-color: #0066ff;
}

/* Add a background color and some padding around the form */
.container {
  border-radius: 5px;
  background-color: #f2f2f210;
  margin-top: 50px;
  padding: 20px;
  width: 40%;
}

#kontaktfeld {
  display: flex;
  justify-content: center; /* Horizontally centers the container */
}
</style>
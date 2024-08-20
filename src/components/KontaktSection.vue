<script setup lang="ts">
</script>

<template>
  <div id="kontakt">
  <h2>Kontakt</h2>
</div>
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
</template>

<style scoped>

#kontakt {
  padding: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: var(--color-background-dark);
}

input, select, textarea {
  width: 100%; /* Full width */
  color: white;
  padding: 12px; /* Some padding */ 
  border: 1px solid #ccc; /* Gray border */
  border-radius: 4px; /* Rounded borders */
  box-sizing: border-box; /* Make sure that padding and width stays in place */
  margin-top: 6px; /* Add a top margin */
  margin-bottom: 16px; /* Bottom margin */
  resize: vertical; /* Allow the user to vertically resize the textarea (not horizontally) */
  background-color: #555555;
}

input::placeholder {
  color: rgba(255, 255, 255, 0.774);
}

/* Style the submit button with a specific background color etc */
input[type=submit] {
  width: 30%; 
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
  padding: 20px;
  width: 40%;
  margin-bottom: 2rem;
}

#kontaktfeld {
  display: flex;
  justify-content: center; /* Horizontally centers the container */
  background-color: var(--color-background-dark);
  width: 100%;
}
</style>
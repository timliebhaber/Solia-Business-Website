<script lang="ts">
import axios from "axios";
import { defineComponent, reactive, ref } from "vue";

export default defineComponent({
  name: "ContactForm",
  setup() {
    // Define the form data with types
    const form = reactive<{
      name: string;
      email: string;
      message: string;
    }>({
      name: "",
      email: "",
      message: "",
    });

    // Success state
    const success = ref(false);

    // Method to send email
    const sendEmail = async (): Promise<void> => {
      try {
        const response = await axios.post<{ message: string }>(
          "http://localhost:5000/send-email",
          form
        );
        alert(response.data.message);
        success.value = true; // Set success to true
      } catch (error) {
        console.error(error);
        alert("Fehler beim Senden der Nachricht.");
      }
    };

    return {
      form,
      success,
      sendEmail,
    };
  },
});
</script>


<template>
  <div id="kontakt">
    <h4>KOSTENLOSES ERSTGESPRÄCH VEREINBAREN</h4>
    <h2>Kontaktieren Sie mich</h2>
    <div id="adressandform">
      <div class="adress">
        <p>
          Ich freue mich, von Ihnen zu hören! <br />
          Wenn Sie Fragen haben oder ein Angebot möchten, zögern Sie nicht mich zu
          kontaktieren. <br />
          Sie erreichen mich über das Kontaktformular oder per Email:<br /><br />
          <a href="mailto:info@solia-solutions.de">info@solia-solutions.de</a><br /><br />
          Tim Liebhaber<br />
          Vöttinger Straße 34A<br />
          85354 Freising<br />
          <br /><br />
        </p>
        <a href="https://github.com/timliebhaber" target="_blank">
          <i class="fa fa-github" style="font-size:36px"></i>
        </a>
        <a href="https://www.linkedin.com/in/tim-liebhaber/" target="_blank">
          <i class="fa fa-linkedin" style="font-size:36px"></i>
        </a>
      </div>
      <div class="container">
        <form @submit.prevent="sendEmail">
          <label for="name"></label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            v-model="form.name"
            required
          />

          <label for="email"></label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email Adresse"
            v-model="form.email"
            required
          />

          <label for="subject"></label>
          <textarea
            id="subject"
            name="subject"
            placeholder="Nachricht"
            style="height:200px"
            v-model="form.message"
            required
          ></textarea>

          <div class="form-footer">
            <input type="submit" value="Absenden" />
            <!-- Success message displayed next to the button -->
            <span v-if="success" class="success-message">
              Vielen Dank! Ich melde mich schnellstmöglich bei Ihnen zurück!
            </span>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>



<style scoped>

.success-message {
  text-align: center;
  font-size: 1rem;
  color: rgb(0, 26, 0);
  margin-left: 1rem;
  margin-top: 1rem;
}


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
  height: 100vh;
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

input[type=submit]  {
    color: white;
    background-color: #ffa612;
    padding: 10px 20px;
    width: 30%;
    min-width: 150px;
    margin-top: 1rem;
    text-decoration: none;
    font-family: 'Haas', sans-serif;
    font-weight: bold;
    font-size: 21px;
    box-shadow: 0px 4px 3px rgba(255, 123, 0, 0.8);
    text-shadow: 0px 2px 5px rgba(0,0,0,.8);
    transition: background-color 0.2s ease-in-out,transform 0.2s, box-shadow 0.2s;
    border-radius: 5px;
}

input[type=submit]:hover {
  background-color: #ff8c00  ;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  box-shadow: 0px 0px 0px rgba(0,0,0,0);
  overflow: hidden;
  transform: translateY(4px); 
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


@media (max-width: 850px) {
  #kontakt {
    padding: 2rem 2rem;
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

@media (max-width: 1180px) {
#kontakt {
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: auto;
padding: 2rem 2rem;
display: block;
}
}

</style>
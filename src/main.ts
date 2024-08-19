import './assets/main.css'

import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import App from './App.vue'

library.add(faPlay);


const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app')


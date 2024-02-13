// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')



import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import router from the router.js file

createApp(App).use(router).mount('#app');

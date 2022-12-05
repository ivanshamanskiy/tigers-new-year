import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js';

import StartingPage from './components/StartingPage.vue';
import PageSecond from './components/PageSecond.vue';
import PageThird from './components/PageThird.vue';


const app = createApp(App);

app.use(router);

app.component('starting-page', StartingPage);
app.component('page-second', PageSecond);
app.component('page-third', PageThird);


app.mount('#app')

import { createRouter, createWebHistory } from 'vue-router';

import HoneyVictory from './App.vue'
import DelightfulSerenity from './App.vue'
import ErrorPage from './pages/ErrorPage.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/404', component: ErrorPage },
        { path: '/honeyvictory', component: HoneyVictory },
        { path: '/delightfulserenity', component: DelightfulSerenity }
    ]
})

// const handleLocation = function() {
//     const path = window.location.pathname;
//     console.log(path);
// }

export default router;
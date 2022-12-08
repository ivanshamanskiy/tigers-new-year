import { createRouter, createWebHistory } from 'vue-router';

import AllContent from './AllContent.vue';
import ErrorPage from './pages/ErrorPage.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/404' },
        { path: '/404', component: ErrorPage },
        { path: '/:pathMatch(.*)*', component: ErrorPage },
        { path: '/honeyvictory', component: AllContent },
        { path: '/delightfulserenity', component: AllContent},
        { path: '/sparklingpassion', component: AllContent},
        { path: '/burningdesire', component: AllContent},
        { path: '/breezeofchange', component: AllContent},
        { path: '/spicyrelationship', component: AllContent},
        { path: '/refreshingdiscoveries', component: AllContent},
        { path: '/tightembrace', component: AllContent},
        { path: '/juicyfruitsoflabor', component: AllContent},
        { path: '/breezyrelax', component: AllContent},
        { path: '/vanilladreams', component: AllContent},
        { path: '/deliciousadvances', component: AllContent},
        { path: '/crystaldreams', component: AllContent},
        { path: '/dasingflights', component: AllContent},
        { path: '/crystaldeals', component: AllContent},
        { path: '/warmappreciation', component: AllContent},
        { path: '/goldensummer', component: AllContent},
        { path: '/healinghope', component: AllContent},
        { path: '/etherealluck', component: AllContent},
        { path: '/captivationpassion', component: AllContent},
    ]
})

export default router;
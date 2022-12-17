import { createRouter, createWebHistory } from 'vue-router';

import AllContent from './AllContent.vue';
import ErrorPage from './pages/ErrorPage.vue';
import PageThird from './components/PageThird.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: AllContent },
        { path: '/:pathMatch(.*)*', component: ErrorPage },
        { path: '/honeyvictory', component: PageThird },
        { path: '/delightfulserenity', component: PageThird },
        { path: '/sparklingpassion', component: PageThird },
        { path: '/burningdesire', component: PageThird },
        { path: '/breezeofchange', component: PageThird },
        { path: '/spicyrelationship', component: PageThird },
        { path: '/refreshingdiscoveries', component: PageThird },
        { path: '/tightembrace', component: PageThird },
        { path: '/juicyfruitsoflabor', component: PageThird },
        { path: '/breezyrelax', component: PageThird },
        { path: '/vanilladreams', component: PageThird },
        { path: '/deliciousadvances', component: PageThird },
        { path: '/crystaldreams', component: PageThird },
        { path: '/dasingflights', ccomponent: PageThird },
        { path: '/crystaldeals', component: PageThird },
        { path: '/warmappreciation', component: PageThird },
        { path: '/goldensummer', component: PageThird },
        { path: '/healinghope', component: PageThird },
        { path: '/etherealluck', component: PageThird },
        { path: '/captivationpassion', component: PageThird },
    ]
})

export default router;
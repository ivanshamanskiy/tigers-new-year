import { createApp } from "vue";
import App from "./App.vue";
import router from "./router.js";
import { autoAnimatePlugin } from "@formkit/auto-animate/vue";

import StartingPage from "./components/StartingPage.vue";
import PageSecond from "./components/PageSecond.vue";
import PageThird from "./components/PageThird.vue";

const app = createApp(App);

app.use(router);
app.use(autoAnimatePlugin);

app.component("starting-page", StartingPage);
app.component("page-second", PageSecond);
app.component("page-third", PageThird);

router.isReady().then(function () {
  app.mount("#app");
});

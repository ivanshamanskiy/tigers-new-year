<template>
  <starting-page v-show="startVisible"></starting-page>
  <page-second v-show="secondVisible" @goToThird="goToThird"></page-second>
</template>

<script>
// import PageThird from './components/PageThird.vue';
import PageSecond from "./components/PageSecond.vue";
import StartingPage from "./components/StartingPage.vue";

export default {
  components: { StartingPage, PageSecond },
  data() {
    return {
      startVisible: true,
      secondVisible: false,
      // thirdVisible: false,
    };
  },
  methods: {
    // goToThird() {
    //         this.secondVisible = false;
    //         this.thirdVisible = true;
    // }
  },
  mounted() {
    setTimeout(() => {
      this.startVisible = false;
      this.secondVisible = true;
    }, 6000);
  },
};
</script>

<style>
@font-face {
  font-family: "Belarus";
  src: url("./assets/fonts/belarus/Belarus-Regular.ttf") format("truetype"),
    url("./assets/fonts/belarus/Belarus-Regular.otf") format("opentype");
}

@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 62.5%;
}

:root {
  --background-color: #141328;
  --base-red: #eb3b27;
  --base-yellow: #f29221;
  --secondary-yellow: #fa9c67;
  --base-rose: #fa67b6;
  --base-violet: #8d67fa;
}

body {
  background-color: var(--background-color);
}
</style>

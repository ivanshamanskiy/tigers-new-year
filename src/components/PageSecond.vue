<template>
  <div class="page-second complex-border">
    <div class="page-content">
      <p class="heading">Что ждет вас в 2023 году?</p>

      <div class="buttons-card-flex">
        <div class="btn--rose">
          <div class="wrapper-rose">
            <div class="button button-rose">
              <a href="#"><span class="text-color-rose">Узнать &rarr;</span></a>
              <div class="quarter-smaller" id="quarter--1-1"></div>
              <div class="quarter-bigger" id="quarter--1-2"></div>
              <div class="quarter-smaller" id="quarter--2-1"></div>
              <div class="quarter-bigger" id="quarter--2-2"></div>
              <div class="quarter-smaller" id="quarter--3-1"></div>
              <div class="quarter-bigger" id="quarter--3-2"></div>
              <div class="quarter-smaller" id="quarter--4-1"></div>
              <div class="quarter-bigger" id="quarter--4-2"></div>
            </div>
          </div>
        </div>

        <router-link :to="link">
          <div class="card">
            <div class="line line-outer-0">
              <div class="line line-outer-1">
                <div class="corner-circle-1">
                  <img
                    src="../images/icons/tiger-icon.svg"
                    class="tiger-icon"
                  />
                </div>
                <div class="corner-circle-2">
                  <img
                    src="../images/icons/tiger-icon.svg"
                    class="tiger-icon"
                  />
                </div>
                <div class="corner-circle-3">
                  <img
                    src="../images/icons/tiger-icon.svg"
                    class="tiger-icon"
                  />
                </div>
                <div class="corner-circle-4">
                  <img
                    src="../images/icons/tiger-icon.svg"
                    class="tiger-icon"
                  />
                </div>
                <div class="line line-outer-2">
                  <div class="line line-outer-3">
                    <div class="line line-outer-4">
                      <div class="small-circle-1">
                        <img
                          src="../images/icons/star-outline.svg"
                          class="polar-star-icon"
                          style="fill: var(--base-red)"
                        />
                      </div>
                      <div class="small-circle-2">
                        <img
                          src="../images/icons/star-outline.svg"
                          class="polar-star-icon"
                        />
                      </div>
                      <div class="line line-outer-5">
                        <div class="small-circle-3">
                          <img
                            src="../images/icons/star-outline.svg"
                            class="polar-star-icon"
                          />
                        </div>
                        <div class="small-circle-4">
                          <img
                            src="../images/icons/star-outline.svg"
                            class="polar-star-icon"
                          />
                        </div>
                        <div class="line line-outer-6">
                          <div class="line line-outer-7">
                            <div class="line line-outer-8">
                              <div class="line line-outer-9">
                                <div class="main-circle">
                                  <img
                                    src="../images/icons/tiger-icon.svg"
                                    class="tiger-icon tiger-icon-main"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </router-link>

        <div class="btn--violet">
          <div class="wrapper-violet">
            <div class="button button-violet button-violet-shadow">
              <a href="#"
                ><span class="text-color-violet">&larr; Узнать</span></a
              >
              <div
                class="quarter-smaller button-violet"
                id="quarter--1-1"
              ></div>
              <div class="quarter-bigger button-violet" id="quarter--1-2"></div>
              <div
                class="quarter-smaller button-violet"
                id="quarter--2-1"
              ></div>
              <div class="quarter-bigger button-violet" id="quarter--2-2"></div>
              <div
                class="quarter-smaller button-violet"
                id="quarter--3-1"
              ></div>
              <div class="quarter-bigger button-violet" id="quarter--3-2"></div>
              <div
                class="quarter-smaller button-violet"
                id="quarter--4-1"
              ></div>
              <div class="quarter-bigger button-violet" id="quarter--4-2"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="lower-text">кликните на карту — ответ там!</div>
    </div>

    <div class="circle" id="circle--1">
      <img src="../images/icons/moon_icon.svg" class="moon-icon" id="moon--1" />
    </div>
    <div class="circle" id="circle--2">
      <img src="../images/icons/moon_icon.svg" class="moon-icon" id="moon--2" />
    </div>
    <div class="circle" id="circle--3">
      <img src="../images/icons/moon_icon.svg" class="moon-icon" id="moon--3" />
    </div>
    <div class="circle" id="circle--4">
      <img src="../images/icons/moon_icon.svg" class="moon-icon" id="moon--4" />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { animate, timeline } from "motion";

onMounted(() => {
  animate(
    ".page-second",
    { opacity: ["0", "1"] },
    { duration: 0.8, delay: 6.8 }
  );

  const line0 = [
    ".line.line-outer-0",
    { borderColor: ["#EB3B27", "#FA67B6", "#EB3B27"] },
    { duration: 0.3 },
  ];

  const line1 = [
    ".line.line-outer-2",
    { borderColor: ["#EB3B27", "#FA67B6", "#EB3B27"] },
    { duration: 0.3 },
  ];

  const line2 = [
    ".line.line-outer-3",
    { borderColor: ["#EB3B27", "#FA67B6", "#EB3B27"] },
    { duration: 0.3 },
  ];

  const line3 = [
    ".line.line-outer-4",
    { borderColor: ["#EB3B27", "#FA67B6", "#EB3B27"] },
    { duration: 0.3 },
  ];

  const line4 = [
    ".line.line-outer-5",
    { borderColor: ["#EB3B27", "#FA67B6", "#EB3B27"] },
    { duration: 0.3 },
  ];

  const line5 = [
    ".line.line-outer-6",
    { borderColor: ["#EB3B27", "#FA67B6", "#EB3B27"] },
    { duration: 0.3 },
  ];

  const line6 = [
    ".line.line-outer-7",
    { borderColor: ["#EB3B27", "#FA67B6", "#EB3B27"] },
    { duration: 0.3 },
  ];

  const line7 = [
    ".line.line-outer-8",
    { borderColor: ["#EB3B27", "#FA67B6", "#EB3B27"] },
    { duration: 0.3 },
  ];

  const line8 = [
    ".line.line-outer-9",
    { borderColor: ["#EB3B27", "#FA67B6", "#EB3B27"] },
    { duration: 0.3, delay: 4 },
  ];

  timeline([line8, line7, line6, line5, line4, line3, line2, line1, line0], {
    repeat: Infinity,
  });
});
</script>

<script>
import paths from "../paths.json";

export default {
  computed: {
    link() {
      const pathNames = Object.getOwnPropertyNames(paths);
      const num = Math.floor(Math.random() * (19 - 0 + 1) + 0);
      return pathNames[num];
    },
  },
};
</script>

<style scoped>
.page-second {
  height: 110em;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
}

.page-content {
  /* position: absolute; */
  height: 90%;
  width: 80%;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.heading {
  font-family: "Belarus", sans-serif;
  color: var(--base-red);
  font-weight: 400;
  font-size: 6.4em;
  line-height: 1.15em;
  text-align: center;
  text-transform: uppercase;
  width: 100%;
}

.lower-text {
  color: var(--secondary-yellow);
  font-family: "Inter", sans-serif;
  font-size: 2.4em;
  line-height: normal;
  text-align: center;
  text-transform: uppercase;

  margin-top: 2.6em;
}

/* BUTTONS */

.wrapper-rose {
  position: relative;
  width: 30em;
  height: 10.4em;

  border: 0.2em solid var(--base-rose);
  border-radius: 20px;
  box-shadow: 0px 0px 10px var(--base-rose);

  margin-top: 3.2em;

  transition: box-shadow 0.6s;
}

.wrapper-violet {
  position: relative;
  width: 30em;
  height: 10.4em;

  border: 0.2em solid var(--base-violet);
  border-radius: 20px;
  box-shadow: 0px 0px 10px var(--base-violet);

  transition: box-shadow 0.6s;
}

.button {
  position: absolute;
  width: 28em;
  height: 8.2em;

  border: 0.2em solid var(--base-rose);
  border-radius: 10px;
  /* // box-shadow: 0px 0px 10px var(--base-rose); */

  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  overflow: hidden;
}

span {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  letter-spacing: -2px;

  font-family: "Belarus";
  font-size: 5em;
  font-style: normal;
  font-weight: 400;
  line-height: 1;
  text-align: center;
  text-transform: uppercase;
  white-space: nowrap;
}

.wrapper-rose:hover {
  box-shadow: 0px 0px 50px var(--base-rose);
  cursor: pointer;
}

.wrapper-violet:hover {
  box-shadow: 0px 0px 50px var(--base-violet);
  cursor: pointer;
}

/* // .button::after {
//     position: absolute;
//     outline: 0.2em solid $base-rose;
//     border-radius: 20px;
//     box-shadow: 0px 0px 10px $base-rose;
//     content: ' ';
//     top: -10px;
//     left: -10px;
//     right: -10px;
//     bottom: -10px;
//     // display: none;
// } */

.quarter-smaller {
  height: 3em;
  width: 3em;
  border: 0.2em solid var(--base-rose);
  border-radius: 105px;
}

#quarter--1-1 {
  position: absolute;
  left: -1.5em;
  top: -1.5em;
}

#quarter--2-1 {
  position: absolute;
  right: -1.5em;
  top: -1.5em;
}

#quarter--3-1 {
  position: absolute;
  right: -1.5em;
  bottom: -1.5em;
}

#quarter--4-1 {
  position: absolute;
  left: -1.5em;
  bottom: -1.5em;
}

.quarter-bigger {
  height: 4em;
  width: 4em;
  border: 0.2em solid var(--base-rose);
  border-radius: 105px;
}

#quarter--1-2 {
  position: absolute;
  left: -2em;
  top: -2em;
}

#quarter--2-2 {
  position: absolute;
  right: -2em;
  top: -2em;
}

#quarter--3-2 {
  position: absolute;
  right: -2em;
  bottom: -2em;
}

#quarter--4-2 {
  position: absolute;
  left: -2em;
  bottom: -2em;
}

.button-violet {
  border-color: var(--base-violet);
}

.text-color-rose {
  color: var(--base-rose);
}

.text-color-violet {
  color: var(--base-violet);
}

/* CARD */

.card {
  margin: 2em 0em;
}

.card:hover {
  cursor: pointer;
}

.line-outer-0 {
  position: relative;

  height: 44em;
  width: 30em;
  border: 0.2em solid var(--base-red);
  box-shadow: 0px 0px 20px var(--base-red);
  border-radius: 15px;

  transition: box-shadow 0.6s;
}

.line-outer-0:hover {
  box-shadow: 0px 0px 50px var(--base-red);
}

.line-outer-1 {
  position: absolute;
  height: 42em;
  width: 28em;
  border: 0.2em solid var(--base-red);
  /* box-shadow: 0px 0px 20px var(--base-red); */
  border-radius: 10px;
  z-index: -9;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.line-outer-2 {
  position: absolute;
  height: 42em;
  width: 28em;
  border: 0.2em solid var(--base-red);
  border-radius: 80px;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.line-outer-3 {
  position: absolute;
  height: 38em;
  width: 24em;
  border: 0.2em solid var(--base-red);
  border-radius: 70px;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.line-outer-4 {
  position: absolute;
  height: 34em;
  width: 20em;
  border: 0.2em solid var(--base-red);
  border-radius: 60px;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.line-outer-5 {
  position: absolute;
  height: 30em;
  width: 16em;
  border: 0.2em solid var(--base-red);
  border-radius: 50px;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.line-outer-6 {
  position: absolute;
  height: 26em;
  width: 12em;
  border: 0.2em solid var(--base-red);
  border-radius: 40px;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.line-outer-7 {
  position: absolute;
  height: 22em;
  width: 8em;
  border: 0.2em solid var(--base-red);
  border-radius: 30px;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.line-outer-8 {
  position: absolute;
  height: 18em;
  width: 4em;
  border: 0.2em solid var(--base-red);
  border-radius: 20px;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.line-outer-9 {
  position: absolute;
  height: 14em;
  width: 1em;
  border: 0.2em solid var(--base-red);
  border-radius: 10px;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.main-circle {
  position: absolute;
  height: 8em;
  width: 8em;
  border: 0.2em solid var(--base-red);
  background-color: var(--background-color);
  border-radius: 50%;
  z-index: 1;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.corner-circle-1 {
  position: absolute;
  width: 4.9em;
  height: 4.9em;
  border: 0.2em solid var(--base-red);
  margin: -0.2em;
  background-color: var(--background-color);
  border-radius: 50%;
  z-index: 1000;
  top: 0;
  left: 0;
}

.corner-circle-2 {
  position: absolute;
  position: absolute;
  width: 4.9em;
  height: 4.9em;
  border: 0.2em solid var(--base-red);
  margin: -0.2em;
  background-color: var(--background-color);
  border-radius: 50%;
  z-index: 1000;
  top: 0;
  right: 0;
}

.corner-circle-3 {
  position: absolute;
  position: absolute;
  width: 4.9em;
  height: 4.9em;
  border: 0.2em solid var(--base-red);
  margin: -0.2em;
  background-color: var(--background-color);
  border-radius: 50%;
  z-index: 1000;
  bottom: 0;
  right: 0;
}

.corner-circle-4 {
  position: absolute;
  position: absolute;
  width: 4.9em;
  height: 4.9em;
  border: 0.2em solid var(--base-red);
  margin: -0.2em;
  background-color: var(--background-color);
  border-radius: 50%;
  z-index: 1000;
  bottom: 0;
  left: 0;
}

.tiger-icon {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 2.8em;
}

.tiger-icon-main {
  width: 4.6em;
}

.small-circle-1 {
  position: absolute;
  width: 2.6em;
  height: 2.6em;
  border: 0.2em solid var(--base-red);
  margin: -0.2em;
  background-color: var(--background-color);
  border-radius: 50%;
  z-index: 1000;
  top: 8em;
  left: -1em;
}

.small-circle-2 {
  position: absolute;
  width: 2.6em;
  height: 2.6em;
  border: 0.2em solid var(--base-red);
  margin: -0.2em;
  background-color: var(--background-color);
  border-radius: 50%;
  z-index: 1000;
  bottom: -1em;
  left: 12em;
}

.small-circle-3 {
  position: absolute;
  width: 2.6em;
  height: 2.6em;
  border: 0.2em solid var(--base-red);
  margin: -0.2em;
  background-color: var(--background-color);
  border-radius: 50%;
  z-index: 1000;
  top: -1em;
  left: 4em;
}

.small-circle-4 {
  position: absolute;
  width: 2.6em;
  height: 2.6em;
  border: 0.2em solid var(--base-red);
  margin: -0.2em;
  background-color: var(--background-color);
  border-radius: 50%;
  z-index: 1000;
  bottom: 4em;
  right: -1em;
}

.polar-star-icon {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  filter: invert(46%) sepia(96%) saturate(4226%) hue-rotate(342deg)
    brightness(90%) contrast(105%);
  fill: var(--base-red);
  height: 1.4em;
}

.moon-icon {
  display: none;
}

@media (min-width: 1100px) {
  .page-second {
    height: auto;
    min-height: 100vh;
  }
  .buttons-card-flex {
    display: flex;
    align-items: center;
  }

  .btn--rose {
    margin-right: 4.8em;
  }

  .btn--violet {
    margin-left: 4.8em;
  }

  .heading {
    scale: 1.2;
    margin-bottom: 0.4em;
    margin-top: 0.4em;
  }

  .card {
    margin: 3.2em 0 1.2em 0;
  }

  .lower-text {
    margin-bottom: 3em;
  }
}

/* BORDER */

@media (min-width: 1100px) {
  .complex-border {
    border: 0.6em solid var(--base-red);
    position: relative;
  }

  .complex-border::before {
    border: 0.6em solid var(--base-red);
    position: absolute;
    content: " ";
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: -0.6em;
    border-radius: 105px;
  }

  .circle {
    width: 4em;
    height: 4em;
    border: 0.6em solid var(--base-red);
    border-radius: 50%;
    margin: -0.6em;

    position: relative;
  }

  #circle--1 {
    position: absolute;
    left: 0;
    top: 0;
  }

  #circle--2 {
    position: absolute;
    right: 0;
    top: 0;
  }

  #circle--3 {
    position: absolute;
    right: 0;
    bottom: 0;
  }

  #circle--4 {
    position: absolute;
    left: 0;
    bottom: 0;
  }

  .moon-icon {
    display: block;
    position: absolute;
    left: -5px;
    top: -6px;
    text-align: center;
    filter: invert(46%) sepia(96%) saturate(4226%) hue-rotate(342deg)
      brightness(90%) contrast(105%);
    height: 4em;
  }
}
</style>

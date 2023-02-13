<template>
  <div class="page-third complex-border">
    <div class="page-content">
      <p class="heading">в 2023 году вас ждет</p>
      <div class="card">
        <div class="line-outer-0">
          <div class="line-outer-1 image-container">
            <img
              :src="require(`../images/cards/${getUrl}.jpg`)"
              class="image"
            />
          </div>
        </div>
      </div>
      <p class="card-title">{{ getTitle }}</p>
      <!-- <p class="description">Вы проспите весь 2023 год так, что нечего будет рассказать внукам</p> -->
      <p class="midjourney-text">
        Это предсказание мы c нейросетью Midjourney подготовили специально для
        вас. QR-код из вашей открытки ведет на уникальный результат, о котором
        никто не сможет узнать...
      </p>
      <p class="text-share">
        ...ну разве что вы поделитесь им в социальных сетях 😉
      </p>
      <div
        class="share-btn share-icons"
        data-url="https://https://knife.media/victorian-entertainment/"
        data-title="Статья:"
        data-desc="Публичные казни, психиатрические клиники и музей восковых фигур мадам Тюссо: как развлекались в Лондоне XVIII–XIX веков"
      >
        <a class="btn-twitter share-icon" data-id="tw"
          ><img
            class="logo-icon"
            src="../images/soc-med-logos/logo-twitter.svg"
        /></a>
        <a class="btn-telegram share-icon" data-id="tg"
          ><img
            class="logo-icon"
            src="../images/soc-med-logos/logo-telegram.svg"
        /></a>
        <a class="btn-bk share-icon" data-id="vk"
          ><img class="logo-icon" src="../images/soc-med-logos/logo-vk.svg"
        /></a>
      </div>
      <p class="goodbye-text">
        До встречи в 2023 году!<br /><span class="gradient"
          >ваши «Золотые тигры»</span
        >
      </p>
      <img src="../images/icons/tigers-logo.png" class="ending-logo" />
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
import { animate } from "motion";

onMounted(() => {
  animate(".page-third", { opacity: ["0", "1"] }, { duration: 1.2 });
});
</script>

<script>
import paths from "../paths.json";
console.log(paths);

export default {
  computed: {
    getUrl() {
      const path = window.location.pathname;
      return paths[path]["image"];
    },
    getTitle() {
      const path = window.location.pathname;
      return paths[path]["title"];
    },
  },
};
</script>

<style scoped>
.image {
  position: absolute;
  width: 100%;
}

.page-third {
  height: 160em;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
}

.hidden {
  display: none;
}

.page-content {
  height: 93%;
  width: 85%;
  top: 4%;
  display: flex;
  flex-direction: column;
  justify-content: center;
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

  margin-bottom: 0.6em;
}

.line-outer-0 {
  position: relative;

  height: 44em;
  width: 30em;
  border: 0.2em solid var(--base-red);
  border-radius: 15px;

  transition: box-shadow 0.6s;
}

.line-outer-1 {
  position: absolute;
  height: 42em;
  width: 28em;
  /* border: 0.2em solid var(--base-red); */
  /* box-shadow: 0px 0px 20px var(--base-red); */
  border-radius: 10px;
  z-index: -9;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  overflow: hidden;
}

.card-title {
  font-family: "Belarus", sans-serif;
  color: var(--secondary-yellow);
  font-weight: 400;
  font-size: 5.2em;
  line-height: 1em;
  text-align: center;
  text-transform: uppercase;
  width: 100%;

  margin-top: 0.6em;
}

/* .image-container {
    // background-image: url('/src/images/cards/42.png');
  } */

.description {
  font-family: "Inter";
  color: var(--secondary-yellow);
  font-weight: 500;
  font-size: 1.8em;
  line-height: 1.3em;
  text-align: center;
  letter-spacing: 0.01em;
  text-transform: uppercase;

  width: 80%;
}

.midjourney-text {
  font-family: "Inter";
  color: var(--secondary-yellow);
  font-weight: 400;
  font-size: 1.6em;
  line-height: l;
  text-align: 2em;
  text-align: center;
  letter-spacing: 0.01em;
  margin: 1.6em 0 1.2em 0;

  width: 80%;
}

.text-share {
  font-family: "Inter";
  color: var(--base-red);
  font-weight: 500;
  font-size: 2.2em;
  line-height: 1.35em;
  text-align: center;
  letter-spacing: 0.01em;
  text-transform: uppercase;

  width: 80%;
}

.share-icons {
  display: flex;
  align-items: center;
}

.share-icon {
  height: 4em;
  width: 4em;
  border: 0.6em solid var(--base-red);
  border-radius: 50%;
  background-color: var(--base-red);
  margin: 1.8em 0.4em 3em 0.4em;
  position: relative;
}

.share-icon:hover {
  box-shadow: 0px 0px 50px var(--base-red);
}

.logo-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 2.2em;
}

.goodbye-text {
  font-family: "Belarus";
  font-size: 4.6em;
  color: var(--base-red);
  text-align: center;
  text-transform: uppercase;

  width: 70%;
}

.gradient {
  background: -webkit-linear-gradient(#eb3b27, #db9233);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.ending-logo {
  width: 8em;
  margin-top: 2.6em;
}

.moon-icon {
  display: none;
}

@media (min-width: 1100px) {
  .page-third {
    height: 140em;
  }

  .heading {
    scale: 1.2;
  }

  .card-title {
    scale: 1.3;
    margin-top: 1em;
  }

  .description {
    scale: 1.1;
    margin-top: 0.4em;
  }

  .midjourney-text {
    width: 35%;
    scale: 1.1;
    margin-top: 3.4em;
  }

  .text-share {
    width: 35%;
    scale: 1.1;
  }

  .share-icon {
    scale: 1.2;
    margin: 1.8em 0.8em 3em 0.8em;
  }

  .goodbye-text {
    scale: 1.05;
    margin-top: 1.2em;
  }

  .ending-logo {
    scale: 1.3;
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
    border-radius: 105px;
    margin: -0.6em;
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

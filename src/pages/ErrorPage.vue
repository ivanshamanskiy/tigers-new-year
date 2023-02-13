<template>
  <div class="error-container gradient">
    <img
      src="https://i.gifer.com/m7.gif"
      alt="this slowpoke moves"
      class="gif"
    />
    <p>
      Ой, кажется, такой ссылки не существует.<br />
      Пожалуйста, просканируйте QR-код на подарке.
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.error-container {
  height: 100vh;

  /* left: 50%; */
  /* transform: translate(-50%,-50%); */

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

p {
  font-family: "Belarus";
  font-size: 6em;
  margin: 0 2em;
  text-align: center;
}

.gradient {
  background: -webkit-linear-gradient(#eb3b27, #db9233);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.gif {
  border-radius: 10px;
  margin-bottom: 1.8em;
}

@media screen and (max-width: 600px) {
  p {
    font-size: 4em;
  }

  .gif {
    scale: 0.8;
  }
}
</style>

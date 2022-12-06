<template>

<div class="starting-page complex-border" id="page-initial">
        <div class="container">
            <img src="../images/icons/tigers-logo.svg" class="starting-page-logo">
            <Motion :initial="{ opacity: '0' }" :animate="{ opacity: ['1'] }" :transition="{ duration: '2', repeat: Infinity}" >
                <p class="starting-page-text">Что вас ждет в 2023?<br><span>у «Золотых тигров» есть ответ</span></p>
            </Motion>
            
        </div>
        <div class="circle" id="circle--1"><img src="../images/icons/moon_icon.svg" class="moon-icon" id="moon--1"></div>
        <div class="circle" id="circle--2"><img src="../images/icons/moon_icon.svg" class="moon-icon" id="moon--2"></div>
        <div class="circle" id="circle--3"><img src="../images/icons/moon_icon.svg" class="moon-icon" id="moon--3"></div>
        <div class="circle" id="circle--4"><img src="../images/icons/moon_icon.svg" class="moon-icon" id="moon--4"></div>
</div>

</template>

<script setup>  

import { onMounted } from 'vue'
import { animate } from "motion";

onMounted(() => {
    animate('.starting-page-text', { opacity: ['0', '1', '1', '0'] },
    {
        duration: 2.8,
        repeat: Infinity,
    })
})

</script>

<style scoped>

.starting-page {
    height: 100vh;
    position: relative;
}
.container {
    position: absolute;
    left:50%;
    top:55%;
    transform: translate(-50%,-50%);
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.starting-page-text {
    font-family: 'Belarus', sans-serif;
    color: var(--base-yellow);
    font-weight: 400;
    font-size: 4.4em;
    line-height: 1.15em;
    text-align: center;
    text-transform: uppercase;
}

span {
    color: var(--base-yellow);
}

.starting-page-logo {
    height: 11.2em;
    margin: 2em;        
}

/* BORDER */
.complex-border {
    border: 0.6em solid var(--base-red);;
    position: relative;
}

.complex-border::before {
    border: 0.6em solid var(--base-red);;
    position: absolute;
    content: ' ';
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
    position: absolute;
    left: -5px;
    top: -6px;
    text-align: center;
    filter: invert(46%) sepia(96%) saturate(4226%) hue-rotate(342deg) brightness(90%) contrast(105%);
    height: 4em;
}

@media (min-width: 800px) {

    .starting-page-text {
        scale: 1.4;
        margin-top: 0.6em;
    }
}

@media (min-width: 1200px) {
    .starting-page-text {
        scale: 1.6;
        margin-top: 1.4em
    }
    .starting-page-logo {
        scale: 1.4;
    }
}

</style>
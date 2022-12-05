<template>

    <div class="error-container">
        <p>Ой, кажется, такой ссылки не существует.<br> Пожалуйста, просканируйте QR-код на подарке. </p>
    </div>
    
    </template>
    
    <script>  
    
    export default {}
    
    </script>
    
    <style scoped>
    
    .error-container {
        position: relative;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
    
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    p {
        font-family: 'Belarus';
        font-size: 6em;
    }
    
    </style>
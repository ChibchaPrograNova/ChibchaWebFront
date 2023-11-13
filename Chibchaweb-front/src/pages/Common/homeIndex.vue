<template>
    <div>
        <h1>ChibchaWeb</h1>
        <h3>Soluciones de hosting fiables y veloces para tu sitio web o aplicación.
            Potencia tu presencia en línea con nuestro servicio de primera calidad.</h3>
        <RouterLink to="login">Iniciar sesion</RouterLink>
    </div>
</template>

<script setup>
</script>

<style scoped>
div {
    display: flex;
    flex-direction: column;
    align-items: center;
}

h1 {
    font-family: 'Poppins', sans-serif;
    font-style: bold;
    font-weight: 600;
    text-align: center;
    font-size: 90px;
}

h3 {
    font-family: 'Poppins', sans-serif;
    font-style: regular;
    font-weight: 100;
    text-align: center;
    font-size: 20px;
}
</style>
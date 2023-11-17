<template>
    <div class="parent">
        <div class="div1">
            <BaseCard class="panel">
                <h1>Id</h1>
                <h3>25</h3>
                <h1>Fecha</h1>
                <h3>02/23/2023</h3>
                <h1>Asunto</h1>
                <h3>La pagina No Carga</h3>
                <h1>Nivel</h1>
                <h3>Medio</h3>
                <h1>Descripcion</h1>
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum</h3>
            </BaseCard>
        </div>
        <div class="div2">
            <BaseCard class="panel">
                <img src="\src\assets\LogoApp.svg" class="logo">
                <div class="info">
                    <h1>Nombre</h1>
                    Pepe Sánchez
                    <h1>Cargo</h1>
                    Soporte Conectividad

                </div>

            </BaseCard>

        </div>
        <div class="div3">
            <BaseCard class="responseRow">
                <h1>Respuesta</h1>
                <div class="inpu">
                    <textarea name="solution" id="aaa" cols="90" rows="10"></textarea>
                    <button>Enviar Respuesta</button>
                </div>

            </BaseCard>
        </div>
    </div>
</template>

<script setup>
import BaseCard from '../../components/UI/BaseCard.vue';

let idClient = defineProps(['id']);
</script>

<style scoped>
body {
    margin: 0;
}

.parent {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
}

.div1 {
    grid-area: 1 / 1 / 2 / 3;
}

.panel {
    min-width: 90%;

}

.div2 {
    grid-area: 1 / 3 / 2 / 4;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.div3 {
    grid-area: 2 / 1 / 3 / 4;
}

button {
    width: 300px;
    height: 100px;
    font-size: 20px;
}

h1 {
    font-family: 'Poppins', sans-serif;
    font-style: bold;
    font-weight: 600;
    text-align: left;
    font-size: 30px;
}

h3 {
    font-family: 'Poppins', sans-serif;
    font-style: regular;
    font-weight: 100;
    text-align: left;
    font-size: 20px;
}

.logo {
    width: 10em;
    height: 10em;
    padding: 5px;
    background-color: #7c8a6e;
    border-radius: 50%;
}

.info {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

}

.responseRow {
    min-width: 100%;
}

.inpu {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}
</style>
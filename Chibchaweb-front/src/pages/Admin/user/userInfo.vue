<template>
    <div class="parent">
        <div class="div1">
            <BaseCard>
                <h1>Info Usuario:</h1>
                <h3>Nombre</h3> Juan Vargas
                <h3>Cédula</h3> 100000293928
                <h3>Dirección</h3> Cr 25 #12-54
                <h3>Correo Electrónico</h3> vargasj@hotmail.com
                <h3>Tarjetas</h3> *****2353
                <h3> País</h3> Colombia
                <h3>Fecha de corte</h3>12/12/2023
            </BaseCard>

        </div>
        <div class="div2">
            <button>Desactivar Cuenta</button>
            <button>Editar Datos Personales</button>
        </div>
    </div>
</template>

<script setup>
import BaseCard from '../../../components/UI/BaseCard.vue';

let idClient = defineProps(['id']);
</script>

<style scoped>
body {
    margin: 0;
}

.parent {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
}

.div1 {
    grid-area: 1 / 1 / 2 / 2;
}

.div2 {
    grid-area: 1 / 2 / 2 / 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
</style>
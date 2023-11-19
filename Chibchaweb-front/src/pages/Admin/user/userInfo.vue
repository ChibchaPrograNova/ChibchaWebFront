<template>
    <div class="parent">
        <div class="div1">
            <BaseCard>
                <h1>Info Usuario:</h1>
                <h3>Nombre</h3> {{ data.name }}
                <h3>Cedula</h3> {{ data.identification }}
                <h3>Dirección</h3> {{ data.address }}
                <h3>Correo</h3> {{ data.mail }}
                <h3>Edad</h3> {{ data.age }}
                <h3>Pais: </h3> {{ data.country }}
                <h3>planes: </h3> {{ data.plans }}
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
import { ref, onMounted } from 'vue';
let idClient = defineProps(['id']);
const data = ref([])

onMounted(async () => {
    try {
        const response = await fetch(`https://chibchawebback-production-e6e7.up.railway.app/Clients/Manage/?id=${idClient.id}`);
        const result = await response.json();
        data.value = result;
    } catch (error) {
        console.error('Error al cargar los datos:', error);
    }
});
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
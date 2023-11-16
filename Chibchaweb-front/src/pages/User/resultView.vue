<template>
    <div class="container">
        <h2>Detalle de la Compra</h2>
        <BaseCard class="panel">
            <div>
                <h3>Detalles de cliente</h3>
                <p>Nombre del Cliente</p>
                <p>Correo electrónico</p>
            </div>
            <div>
                <h3>Detalles de Producto</h3>
                <p>Nombre del Dominio</p>
                <p>Distribuidor</p>
                <p>Paquete</p>
            </div>
            <div>
                <h3>Detalles de Compra</h3>
                <p>Referencia de la compra</p>
                <p>Método de Pago</p>
                <p>Valor de la compra</p>
            </div>
            <div class="buttonContainer">
                <button @click="redirectToDashboard">Regresar al Dashboard Principal</button>
            </div>
        </BaseCard>
    </div>
</template>

<script setup>
import BaseCard from '../../components/UI/BaseCard.vue';
import { useRouter } from 'vue-router';

const router = useRouter()
function redirectToDashboard(){
    router.replace({ name: 'userDashboard'})
}

</script>

<style scoped>
body {
    margin: 0;
}

h2 {
    font-family: 'Poppins', sans-serif;
    font-style: bold;
    font-weight: 600;
    text-align: left;
    font-size: 50px;
}

.panel {
    min-width: 90vw;
    min-height: 60vh;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
}

.buttonContainer {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
}

button {
    width: 200px;
    height: 100px;
}

h3 {
    font-family: 'Poppins', sans-serif;
    font-style: regular;
    font-weight: bold;
    text-align: left;
    font-size: 30px;
}
</style>
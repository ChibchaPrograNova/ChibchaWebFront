<template>
    <div class="container">
        <h2>Detalle de la Compra</h2>
        <BaseCard class="panel">
            <div>
                <h3>Detalles de cliente</h3>
                <p>Nombre del Cliente</p>
                {{ clientStore.name }}
                <p>Correo electrónico</p>
                {{ clientStore.mail }}
            </div>
            <div>
                <h3>Detalles de Producto</h3>
                <p>Nombre del Dominio</p>
                {{ buyStore.domainName }}
                <p>Distribuidor</p>
                {{ buyStore.distribuidorName }}
                <p>Paquete</p>
                {{ buyStore.paquete }}
            </div>
            <div>
                <h3>Detalles de Compra</h3>
                <p>Referencia de la compra</p>
                {{ clientStore.name }}
                <p>Método de Pago</p>
                Tarjeta
                <p>Valor de la compra</p>
                {{ buyStore.precioDiscount }}
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
import { useClientStore } from '../../stores/client';
import { useBuyStore } from '../../stores/buy';

const router = useRouter()
const clientStore = useClientStore()
const buyStore = useBuyStore()
function redirectToDashboard() {
    router.replace({ name: 'userDashboard' })
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

p {
    font-weight: bold;
    font-size: 20px;
}
</style>
<template>
    <div>
        <h3>Detalles de Facturación</h3>
        <div class="formContainer">
            <div class="div1">
                <h2>Datos del cliente</h2>
                <BaseCard>
                    <ClientCard />
                </BaseCard>
            </div>
            <div class="div2">
                <h2>Información Método de Pago</h2>
                <CardValidator @card-valid="activateButton" />
            </div>
            <div class="div3">
                <h2>Resumen de compra</h2>
                <BaseCard class="cards">
                    <p>Nombre del Dominio: </p>
                    <p>Paquete: </p>
                    <p>Plan de pago: </p>
                    <p>Precio: </p>
                    <p>Descuento: </p>
                    <p>Total a pagar: </p>
                    <Button :disabled="isDisabled" @click="redirectToResult" :class="{ 'disabled': isDisabled }">Comprar
                    </Button>
                </BaseCard>
            </div>
        </div>
    </div>
</template>

<script setup>

import BaseCard from '../../components/UI/BaseCard.vue';
import CardValidator from '../../components/client/cardValidator.vue';
import ClientCard from '../../components/client/clientCard.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';


let isDisabled = ref(true)

function activateButton() {
    isDisabled.value = !isDisabled.value
}

const router = useRouter()
function redirectToResult() {
    router.replace({ name: 'resultView' })
}
</script>

<style scoped>
body {
    margin: 0;
}

.formContainer {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, auto);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
}

.cards {
    min-height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}

.div1 {
    grid-area: 1 / 1 / 2 / 2;
}

.disabled {
    background-color: #e3e3d1;
    color: gray;
    cursor: not-allowed;
}

.div2 {
    grid-area: 2 / 1 / 3 / 2;
}

.div3 {
    margin-top: 100px;
    grid-area: 1 / 2 / 3 / 3;
}

h3 {
    font-family: 'Poppins', sans-serif;
    font-style: regular;
    font-weight: 600;
    text-align: center;
    font-size: 50px;
}
</style>
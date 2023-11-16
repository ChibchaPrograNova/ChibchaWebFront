<template>
    <div>
        <h1>Paquetes</h1>
        <h3>Selecciona el plan para tu dominio</h3>
        <div class="cardContainer">

            <BaseCard class="baseCard notFeatured">
                <h2 class="tarjeta-titulo">Plan Oro</h2>
                <img src="\src\assets\iconPlans.svg" class="gold">
                <p class="tarjeta-contenido">10 Páginas web disponibles</p>
                <p class="tarjeta-contenido">Antivirus</p>
                <p class="tarjeta-contenido">Descuentos: </p>
                <p class="tarjeta-contenido">$30000 COP/mes</p>
                <label for="precio">Selecciona el Plan de Pago </label>
                <select id="Precio" name="precio " v-model="tipoPagoOro">
                    <option value="0">Mensual</option>
                    <option value="1">Trimestral</option>
                    <option value="2">Semestral</option>
                    <option value="3">Anual</option>
                </select>
                <p>{{ calcularTotal(30000,tipoPagoOro) }}</p>
                <Button @click="redirectToPayment">Comprar</Button>
            </BaseCard>
            <BaseCard class="baseCard">
                <h2 class="tarjeta-titulo">Plan Platino</h2>
                <img src="\src\assets\iconPlans.svg" class="platinum">
                <p class="tarjeta-contenido">Todas las páginas web que necesites </p>
                <p class="tarjeta-contenido">Antivirus</p>
                <p class="tarjeta-contenido">Descuentos: </p>
                <p class="tarjeta-contenido">$40.000 COP/mes</p>
                <label for="precio">Selecciona el Plan de Pago </label>
                <select id="Precio" name="precio " v-model="tipoPagoPlatino">
                    <option value="0">Mensual</option>
                    <option value="1">Trimestral</option>
                    <option value="2">Semestral</option>
                    <option value="3">Anual</option>
                </select>
                <p>{{ calcularTotal(40000,tipoPagoPlatino) }}</p>
                <Button @click="redirectToPayment">Comprar</Button>
            </BaseCard>
            <BaseCard class="baseCard notFeatured">
                <h2 class="tarjeta-titulo">Plan Plata</h2>
                <img src="\src\assets\iconPlans.svg" class="silver">
                <p class="tarjeta-contenido">1 Página web </p>
                <p class="tarjeta-contenido">Antivirus</p>
                <p class="tarjeta-contenido">Descuentos: </p>
                <p class="tarjeta-contenido">$20.000 COP/mes</p>
                <label for="precio">Selecciona el Plan de Pago </label>
                <select id="Precio" name="precio "  v-model="tipoPagoSilver">
                    <option value='0'>Mensual</option>
                    <option value='1'>Trimestral</option>
                    <option value='2'>Semestral</option>
                    <option value='3'>Anual</option>
                </select>
                <p>{{ calcularTotal(20000,tipoPagoSilver) }}</p>
                <Button @click="redirectToPayment">Comprar</Button>
            </BaseCard>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import BaseCard from '../../components/UI/BaseCard.vue';

//import { onUpdated } from 'vue'

const router = useRouter()
function redirectToPayment() {
    router.replace({ name: 'paymentView' })
}

const tipoPagoOro = ref(0)
const tipoPagoPlatino = ref(0)
const tipoPagoSilver = ref(0)

function calcularTotal(precio, tipoPago) {
    const opcion = parseInt(tipoPago);
    const descuentos = [0,0.05,0.1,0.15]
    const meses = [1,3,6,12]
;

    const descuento = 1 - descuentos[opcion];
    const total = precio * meses[opcion] * descuento;
    return total;
}
</script>

<style scoped>
body {
    margin: 0;
}

.baseCard {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}

.notFeatured {
    margin-top: 200px;
}

.platinum {
    filter: invert(48%) sepia(68%) saturate(235%) hue-rotate(128deg) brightness(87%) contrast(90%);
}

.gold {
    filter: invert(83%) sepia(44%) saturate(3593%) hue-rotate(358deg) brightness(112%) contrast(106%);
}

.silver {
    filter: invert(93%) sepia(6%) saturate(10%) hue-rotate(332deg) brightness(87%) contrast(80%);
}

.cardContainer {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 10px;
    grid-row-gap: 0px;
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

.tarjeta-titulo {
    font-size: 1.5em;
    margin-bottom: 10px;
    color: #333;
}

.tarjeta-contenido {
    color: #666;
    font-size: 1em;
    margin-bottom: 20px;
}

button {
    background-color: #7c8a6e;
    border-radius: 8px;
    border-style: none;
    box-sizing: border-box;
    color: #FFFFFF;
    cursor: pointer;
    display: inline-block;
    font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 14px;
    font-weight: 500;
    height: 40px;
    line-height: 20px;
    list-style: none;
    margin: 0;
    outline: none;
    padding: 10px 16px;
    position: relative;
    text-align: center;
    text-decoration: none;
    transition: color 100ms;
    vertical-align: baseline;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;

}

button:hover,
button:focus {
    background-color: #b0b087;
}
</style>
<template>
    <div>
        <h1>Paquetes</h1>
        <h3>Selecciona el plan para tu dominio</h3>
        <div class="cardContainer">

            <BaseCard class="baseCard notFeatured">
                <h2 class="tarjeta-titulo">Plan Oro</h2>
                <img src="\src\assets\iconPlans.svg" class="gold">
                <p>10 Páginas web disponibles</p>
                <ul>
                    <li>75 GB de almacenamiento</li>
                    <li>Antivirus</li>
                    <li>Cuentas de correo electrónico</li>
                </ul>
                <p>$30000 COP/mes</p>
                <p>Ahorra más con un Plan de Pago </p>
                <label for="precio">Selecciona el Plan de Pago </label>
                <select id="Precio" name="precio " v-model="tipoPagoOro">
                    <option value="0">Mensual</option>
                    <option value="1">Trimestral</option>
                    <option value="2">Semestral</option>
                    <option value="3">Anual</option>
                </select>
                <p class="strike">Precio Normal = ${{ calcularTotalSinDescuento(30000, tipoPagoOro) }}</p>
                <p>Precio con Descuento = ${{ calcularTotal(30000, tipoPagoOro) }}</p>
                <Button
                    @click="redirectToPayment('Oro', calcularTotalSinDescuento(30000, tipoPagoOro), calcularTotal(30000, tipoPagoOro))">Comprar</Button>
            </BaseCard>
            <BaseCard class="baseCard">
                <h2 class="tarjeta-titulo">Plan Platino</h2>
                <img src="\src\assets\iconPlans.svg" class="platinum">
                <p>Maximo 100 paginas web disponibles</p>
                <ul>
                    <li>100GB de almacenamiento</li>
                    <li>Antivirus</li>
                    <li>Cuentas de correo electrónico</li>
                    <li>Soporte Técnico Proritario</li>
                </ul>
                <p>$40.000 COP/mes</p>
                <p>Ahorra más con un Plan de Pago </p>
                <select id="Precio" name="precio " v-model="tipoPagoPlatino">
                    <option value="0">Mensual</option>
                    <option value="1">Trimestral</option>
                    <option value="2">Semestral</option>
                    <option value="3">Anual</option>
                </select>
                <p class="strike">Precio Normal = ${{ calcularTotalSinDescuento(40000, tipoPagoPlatino) }}</p>
                <p>Precio con Descuento = ${{ calcularTotal(40000, tipoPagoPlatino) }}</p>
                <Button
                    @click="redirectToPayment('Platino', calcularTotalSinDescuento(40000, tipoPagoPlatino), calcularTotal(40000, tipoPagoPlatino))">Comprar</Button>
            </BaseCard>
            <BaseCard class="baseCard notFeatured">
                <h2 class="tarjeta-titulo">Plan Plata</h2>
                <img src="\src\assets\iconPlans.svg" class="silver">
                <p>1 Página web </p>
                <ul>
                    <li>50 GB de almacenamiento</li>
                    <li>Antivirus</li>
                </ul>
                <p>$20.000 COP/mes</p>
                <p>Ahorra más con un Plan de Pago </p>
                <p>Selecciona el Plan de Pago </p>
                <select id="Precio" name="precio " v-model="tipoPagoSilver">
                    <option value='0'>Mensual</option>
                    <option value='1'>Trimestral</option>
                    <option value='2'>Semestral</option>
                    <option value='3'>Anual</option>
                </select>
                <p class="strike">Precio Normal = ${{ calcularTotalSinDescuento(20000, tipoPagoSilver) }}</p>
                <p>Precio con Descuento = ${{ calcularTotal(20000, tipoPagoSilver) }}</p>
                <Button
                    @click="redirectToPayment('Plata', calcularTotalSinDescuento(20000, tipoPagoSilver), calcularTotal(20000, tipoPagoSilver))">Comprar</Button>
            </BaseCard>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import BaseCard from '../../components/UI/BaseCard.vue';
import { useBuyStore } from '../../stores/buy';

const router = useRouter()
const buyStore = useBuyStore()

function redirectToPayment(paquete, precio, precioDescuento) {
    buyStore.precio = precio
    buyStore.precioDiscount = precioDescuento
    buyStore.paquete = paquete
    const currentDate = new Date();
    const futureDate = ref('')
    buyStore.date_start = currentDate
    if (paquete === 'Plata') {
        switch (tipoPagoSilver.value) {
            case '0':
                futureDate.value = addMonths(currentDate, 1);
                buyStore.plan = 'Mensual'
                buyStore.date_end = futureDate
                break;
            case '1':
                buyStore.plan = 'Trimestral'
                futureDate.value = addMonths(currentDate, 3);
                buyStore.date_end = futureDate
                break;
            case '2':
                buyStore.plan = 'Semestral'
                futureDate.value = addMonths(currentDate, 6);
                buyStore.date_end = futureDate
                break;
            case '3':
                buyStore.plan = 'Anual'
                futureDate.value = addMonths(currentDate, 12);
                buyStore.date_end = futureDate
                break;
        }
    } else if (paquete === 'Oro') {
        switch (tipoPagoOro.value) {
            case '0':
                buyStore.plan = 'Mensual'
                futureDate.value = addMonths(currentDate, 1);
                buyStore.date_end = futureDate
                break;
            case '1':
                buyStore.plan = 'Trimestral'
                futureDate.value = addMonths(currentDate, 3);
                buyStore.date_end = futureDate
                break;
            case '2':
                buyStore.plan = 'Semestral'
                futureDate.value = addMonths(currentDate, 6);
                buyStore.date_end = futureDate
                break;
            case '3':
                buyStore.plan = 'Anual'
                futureDate.value = addMonths(currentDate, 12);
                buyStore.date_end = futureDate
                break;
        }
    } else {
        switch (tipoPagoPlatino.value) {
            case '0':
                buyStore.plan = 'Mensual'
                futureDate.value = addMonths(currentDate, 1);
                buyStore.date_end = futureDate
                break;
            case '1':
                buyStore.plan = 'Trimestral'
                futureDate.value = addMonths(currentDate, 3);
                buyStore.date_end = futureDate
                break;
            case '2':
                buyStore.plan = 'Semestral'
                futureDate.value = addMonths(currentDate, 6);
                buyStore.date_end = futureDate
                break;
            case '3':
                buyStore.plan = 'Anual'
                futureDate.value = addMonths(currentDate, 12);
                buyStore.date_end = futureDate
                break;
        }
    }
    router.replace({ name: 'paymentView' })
}

const tipoPagoOro = ref(0)
const tipoPagoPlatino = ref(0)
const tipoPagoSilver = ref(0)

function calcularTotal(precio, tipoPago) {
    const opcion = parseInt(tipoPago);
    const descuentos = [0, 0.05, 0.1, 0.15]
    const meses = [1, 3, 6, 12]
        ;

    const descuento = 1 - descuentos[opcion];
    const total = precio * meses[opcion] * descuento;
    return total;
}

function calcularTotalSinDescuento(precio, tipoPago) {
    const opcion = parseInt(tipoPago);
    const meses = [1, 3, 6, 12]

    const total = precio * meses[opcion];
    return total;
}

function addMonths(date, months) {
    const result = new Date(date);

    // Increment the month
    result.setMonth(result.getMonth() + months);

    return result;
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

.strike {
    text-decoration: line-through;
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
    font-family: 'Poppins', sans-serif;
    font-size: 2em;
    margin-bottom: 10px;
}

p {
    color: #666;
    font-size: 1.3em;
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
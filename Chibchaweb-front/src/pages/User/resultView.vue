<template>
    <div class="container">
        <h2>Detalle de la Compra</h2>
        <BaseCard class="panel">
            <div>
                <h3>Detalles de cliente</h3>
                <p>Nombre del Cliente</p>
                {{ clientStore.client.name }}
                <p>Correo electrónico</p>
                {{ clientStore.client.mail }}
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
                {{ clientStore.client.name }}
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
import { useDomainStore } from '../../stores/domain';
import { useCardStore } from '../../stores/card';
import { onMounted } from 'vue';

const router = useRouter()
const clientStore = useClientStore()
const buyStore = useBuyStore()
const domainStore = useDomainStore()
const cardStore = useCardStore()

async function redirectToDashboard() {
    const requestCard = {
        id_Client: clientStore.client.id,
        number: cardStore.number,
        ccv: cardStore.ccv
    }
    const respCard = await fetch(`https://chibchawebback-production-e6e7.up.railway.app/Pays/Card/`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(requestCard),
    })
    const responseCard = await respCard.json()
    const requestPay = {
        id_Client: clientStore.client.id,
        id_Card: responseCard.id,
        id_Distributor: buyStore.distribuidorName,
        amount: buyStore.precioDiscount,
        type: buyStore.plan
    }

    const respPay = await fetch(`https://chibchawebback-production-e6e7.up.railway.app/Pays/Pay/`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(requestPay),
    })

    router.replace({ name: 'userDashboard' })
}

onMounted(async () => {
    const planRequest = {
        date_start: buyStore.date_start,
        date_end: buyStore.date_end,
        category: buyStore.paquete,
        price: buyStore.precioDiscount
    }

    const plan = await fetch("https://chibchawebback-production-e6e7.up.railway.app/Clients/Plan/", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(planRequest),
    })
    const planResponse = await plan.json()

    const response = {
        available: false,
        id_Client: clientStore.client.id,
        id_Distributor: buyStore.distribuidorName,
        id_Plan: planResponse.id
    }
    await fetch(`https://chibchawebback-production-e6e7.up.railway.app/Admins/Domain/?id=${domainStore.domain.id}`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(response),
    })
});
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
<template>
    <div class="parent">

        <div class="div1">
            <h1>Resolución de ticket</h1>
            <BaseCard class="panel">
                <h1>Fecha</h1>
                <h3>{{ ticketStore.ticket.h_entry }}</h3>
                <h1>Asunto</h1>
                <h3>{{ ticketStore.ticket.affair }}</h3>
                <h1>Nivel</h1>
                <h3>{{ ticketStore.ticket.level }}</h3>
                <h1>Descripcion</h1>
                <h3>{{ ticketStore.ticket.description }}</h3>
                <h1>ID de la persona</h1>
                <h3>{{ ticketStore.ticket.client }}</h3>
            </BaseCard>
        </div>
        <div class="div2">
            <BaseCard class="panel">
                <img src="\src\assets\LogoApp.svg" class="logo">
                <div class="info">
                    <h1>Nombre</h1>
                    {{ employeeStore.employee.name }}
                    <h1>Cargo</h1>
                    {{ 'Soporte ' + employeeStore.employee.occupation }}

                </div>

            </BaseCard>

        </div>
        <div class="div3">
            <BaseCard class="responseRow">
                <h1>Respuesta</h1>
                <div class="inpu">
                    <textarea name="solution" id="aaa" cols="90" rows="10" v-model="respuesta"></textarea>
                    <button @click="enviar">Enviar Respuesta</button>
                </div>

            </BaseCard>
        </div>
    </div>
</template>

<script setup>
import BaseCard from '../../components/UI/BaseCard.vue';
import { useTicketStore } from '../../stores/ticket';
import { useEmployeeStore } from '../../stores/employee';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const ticketStore = useTicketStore()
const employeeStore = useEmployeeStore()
const respuesta = ref('')
const router = useRouter

async function enviar() {
    const request = {
        solucion: respuesta.value
    }
    const response = await fetch(`https://chibchawebback-production-e6e7.up.railway.app/Employees/Ticket/?id=${ticketStore.ticket.client}`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(request),
    })
    if (response.ok) {
        alert('respuesta enviada con exito')
        router.replace({ name: 'home' })
    }

}

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
    width: 100%;
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
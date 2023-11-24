<template>
    <div class="parent">
        <div class="div1">
            <h1>Tickets</h1>
            <div class="panel">
                <table>
                    <thead>
                        <tr>
                            <th>Fecha</th>
                            <th>Asunto</th>
                            <th>Nivel</th>
                            <th>Ver Más</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in data" :key="item.id">
                            <td>{{ item.h_entry }}</td>
                            <td>{{ item.affair }}</td>
                            <td>{{ item.level }}</td>
                            <td>
                                <button @click="redirectToCase(item)">Ver más</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="div2">
            <Basecard>
                <img src="\src\assets\LogoApp.svg" class="logo">
                <div class="info">
                    <h1>Nombre</h1>
                    {{ employeeStore.employee.name }}
                    <h1>Cargo</h1>
                    {{ 'Soporte ' + employeeStore.employee.occupation }}
                </div>
            </Basecard>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { onMounted, ref } from 'vue'
import { useEmployeeStore } from '../../stores/employee';
import { useTicketStore } from '../../stores/ticket'
import Basecard from '/../../components/UI/BaseCard.vue';


const router = useRouter()
const employeeStore = useEmployeeStore()
const ticketStore = useTicketStore()

function redirectToCase(item) {
    ticketStore.ticket = item
    router.replace({ name: 'caseInfo' })
}

const data = ref({})
onMounted(async () => {
    try {
        const response = await fetch('https://chibchawebback-production-e6e7.up.railway.app/Employees/Ticket/');
        const result = await response.json();
        data.value = result.filter(item => item.category === employeeStore.employee.occupation);
        // Crear un objeto Date a partir de la cadena ISO 8601
        for (let i in data.value) {
            const fecha = new Date(data.value[i].h_entry);

            // Formatear la fecha en un formato más legible
            const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', timeZoneName: 'short' };
            const fechaFormateada = fecha.toLocaleDateString('es-ES', options);
            data.value[i].h_entry = fechaFormateada
        }

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
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
}

.div1 {
    grid-area: 1 / 1 / 2 / 3;
}

.div2 {
    grid-area: 1 / 3 / 2 / 4;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.panel {
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 2px 8px #4b5757;
    padding: 1rem;
}

table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
}

th,
td {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
}

th {
    background-color: #7c8a6e;
    color: white;
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
</style>
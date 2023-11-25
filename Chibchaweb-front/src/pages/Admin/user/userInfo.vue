<template>
    <div>
        <div v-if="isLoading" class="spiner">
            <BaseSpinner />
        </div>
        <div class="parent" v-else>
            <div class="div1">
                <BaseCard>
                    <h1>Info Usuario:</h1>
                    <h3>Nombre</h3> {{ data.name }}
                    <h3>Cedula</h3> {{ data.identification }}
                    <h3>Dirección</h3> {{ data.address }}
                    <h3>Correo</h3> {{ data.mail }}
                    <h3>Edad</h3> {{ data.age }}
                    <h3>Pais: </h3> {{ data.country }}
                    <div>
                        <h3>planes: </h3>
                        <table v-if="areData">
                            <thead>
                                <tr>
                                    <th>Dominio Registrado</th>
                                    <th>Precio</th>
                                    <th>Plan</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, index) in dataD" :key="item.id">
                                    <td>{{ item.name }}</td>
                                    <td>{{ "$" + dataPlans[index][0].price }}</td>
                                    <td>{{ "Chibcha " + dataPlans[index][0].category }}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div v-else class="emptyDiv">
                            <img src="/src/assets/empty.svg" alt="empty" class="empty">
                            <h3>El usuario no cuenta con dominios registrados a su nombre</h3>
                        </div>
                    </div>
                    <h3>Estado: </h3> {{ data.activate ? 'Activo' : 'Desactivado' }}
                </BaseCard>

            </div>
            <div class="div2">
                <button @click="desactivateAccount">Desactivar Cuenta</button>
                <button @click="reditectToForm">Editar Datos Personales</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import BaseCard from '../../../components/UI/BaseCard.vue';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useClientStore } from '../../../stores/client';
import BaseSpinner from '../../../components/UI/BaseSpinner.vue';
let idClient = defineProps(['id']);
const data = ref([])

const dataD = ref([])
const dataPlans = ref([])
const areData = ref(false)
const isLoading = ref(true)

onMounted(async () => {
    const clientStore = useClientStore()
    try {
        const response = await fetch(`https://chibchawebback-production-e6e7.up.railway.app/Clients/Manage/?id=${idClient.id}`);
        const result = await response.json();
        data.value = result;
        clientStore.client = result
    } catch (error) {
        console.error('Error al cargar los datos:', error);
    }
    try {
        const response = await fetch(`https://chibchawebback-production-e6e7.up.railway.app/Admins/Search/?idClient=${idClient.id}`);
        const result = await response.json();
        dataD.value = result;
        if (response.ok) {
            areData.value = true
        }
    } catch (error) {
        areData.value = false
    }
    if (areData.value == true) {
        for (let element in dataD.value) {
            const responseDomain = await fetch(`https://chibchawebback-production-e6e7.up.railway.app/Admins/SearchP/?idPlan=${dataD.value[element].id_Plan}`);
            const resultDomain = await responseDomain.json();
            dataPlans.value.splice(element, 0, resultDomain)
        }
    }
    isLoading.value = false
});

async function desactivateAccount() {
    const response = {
        activate: false
    }
    await fetch(`https://chibchawebback-production-e6e7.up.railway.app/Clients/Manage/?id=${data.value.id}`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(response),
    })
    redirectToUserInfo()
}

const router = useRouter()
function redirectToUserInfo() {
    router.replace({ name: 'userView' })
}

function reditectToForm() {
    router.replace({ name: 'registerView' })
}
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
    font-weight: bold;
    text-align: left;
    font-size: 20px;
}

.emptyDiv {
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    color: #7c8a6e;
}

table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
}

.empty {
    height: 15vw;
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
</style>
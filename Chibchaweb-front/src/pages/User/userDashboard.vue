<template>
    <div>
        <div v-if="isLoading" class="spiner">
            <BaseSpinner />
        </div>
        <div v-else>
            <h1>Nombre de tu futura pagina</h1>
            <div class="searchRow">
                <input type="text" class="srcInput" v-model="pagina">
                <button @click="redirectToSearch">Buscar</button>
            </div>
            <h1>Mis dominios Registrados</h1>
            <table v-if="areData">
                <thead>
                    <tr>
                        <th>Dominio Registrado</th>
                        <th>Precio</th>
                        <th>Plan</th>
                        <th>Semaforo</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in data" :key="item.id">
                        <td>{{ item.name }}</td>
                        <td>{{ "$" + dataPlans[index][0].price }}</td>
                        <td>{{ "Chibcha " + dataPlans[index][0].category }}</td>
                        <td>
                            <img v-if="semaforoColors[index] == 'Rojo'" src="/src/assets/Rojo.svg" alt="semaforo"
                                class="semaforo">
                            <img v-else-if="semaforoColors[index] == 'Verde'" src="/src/assets/Verde.svg" alt="semaforo"
                                class="semaforo">
                            <img v-else-if="semaforoColors[index] == 'Amarillo'" src="/src/assets/Amarillo.svg"
                                alt="semaforo" class="semaforo">
                        </td>
                    </tr>
                </tbody>
            </table>
            <div v-else class="emptyDiv">
                <img src="/src/assets/empty.svg" alt="empty" class="empty">
                <h3>No tienes dominios registrados aun</h3>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';
import { useClientStore } from '../../stores/client';
import BaseSpinner from '../../components/UI/BaseSpinner.vue'

let pagina = ''
const router = useRouter()
function redirectToSearch() {
    router.replace({ name: 'searchDomain', params: { nombreDominio: pagina } })
}
const data = ref([])
const dataPlans = ref([])
const isLoading = ref(true)
const areData = ref(false)
const semaforoColors = ref([])

onMounted(async () => {
    const clientStore = useClientStore()
    try {
        const response = await fetch(`https://chibchawebback-production-e6e7.up.railway.app/Admins/Search/?idClient=${clientStore.client.id}`);
        const result = await response.json();
        data.value = result;
        if (response.ok) {
            areData.value = true
        }
    } catch (error) {
        areData.value = false
    }
    if (areData.value == true) {
        for (let element in data.value) {
            const responseDomain = await fetch(`https://chibchawebback-production-e6e7.up.railway.app/Admins/SearchP/?idPlan=${data.value[element].id_Plan}`);
            const resultDomain = await responseDomain.json();
            dataPlans.value.splice(element, 0, resultDomain)
        }
        for (let i in dataPlans.value) {
            semaforoColors.value.splice(i, 0, calcularSemaforo(dataPlans.value[i][0].date_end))
        }
    }
    isLoading.value = false
});

function calcularSemaforo(dateR) {

    let date = new Date(dateR)
    let fechaActual = new Date();
    let diferenciaEnMilisegundos = date - fechaActual;
    let diferenciaEnDias = diferenciaEnMilisegundos / (1000 * 60 * 60 * 24);

    let diasRojo = 5;
    let diasAmarillo = 15;
    if (diferenciaEnDias < diasRojo) {
        return 'Rojo'
    } else if (diferenciaEnDias < diasAmarillo && diferenciaEnDias > diasRojo) {
        return "Amarillo";
    } else {
        return "Verde"
    }
}

</script>

<style scoped>
body {
    margin: 0;
}

h1 {
    font-family: 'Poppins', sans-serif;
    font-style: bold;
    font-weight: 600;
    font-size: 40px;
}

h3 {
    font-family: 'Poppins', sans-serif;
    font-style: bold;
    font-weight: 600;
    font-size: 20px;
}

.spinner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    justify-items: center;
    width: 100%;
    height: 100%;

}

.semaforo {
    height: 50px;
}

.emptyDiv {
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    color: #7c8a6e;
}


.srcInput {
    min-width: 80%;
    font-size: 90px;
    text-align: center;
    margin: 30px;
    font-family: 'Poppins', sans-serif;
    font-style: italic;
    border: 1px solid #ccc;
    border-radius: 10px;
}

.srcInput:focus {
    background-color: #e3e3d1;
    outline: none;
    border-color: #4b5757;
}

button {
    width: 200px;
    height: 100px;
    margin-top: 0;
    font-size: 30px;
}

.searchRow {
    display: flex;
    align-items: center;
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
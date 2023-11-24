<template>
    <div>
        <h1>Nombre de tu futura pagina</h1>
        <div class="searchRow">
            <input type="text" class="srcInput" v-model="pagina">
            <button @click="redirectToSearch">Buscar</button>
        </div>
        <h1>Mis dominios Registrados</h1>
        <table>
            <thead>
                <tr>
                    <th>Dominio Registrado</th>
                    <th>Plan</th>
                    <th>Precio</th>
                    <th>Estado</th>
                </tr>
            </thead>
            <!-- <tbody>
                <tr v-for="item in data" :key="item.id">
                    <td>{{ item.name }}</td>
                    <td>{{ item.identification }}</td>
                    <td>{{ item.mail }}</td>
                    <td>{{ item.activate ? 'Activo' : 'Desactivado' }}</td>
                    <td>
                        <button @click="redirectToSearch(item.id)">Ver Mas</button>
                    </td>
                </tr>
            </tbody> -->
        </table>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
// import { ref, onMounted } from 'vue';
// import { useClientStore } from '../../stores/client';
let pagina = ''
const router = useRouter()
function redirectToSearch() {
    router.replace({ name: 'searchDomain', params: { nombreDominio: pagina } })
}
// const data = ref([])
// onMounted(async () => {
//     const clientStore = useClientStore()
//     try {
//         const response = await fetch(`https://chibchawebback-production-e6e7.up.railway.app/Admins/Domain/?idClient=${clientStore.client.id}`);
//         const result = await response.json();
//         data.value = result;
//     } catch (error) {
//         console.error('Error al cargar los datos:', error);
//     }
// });

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
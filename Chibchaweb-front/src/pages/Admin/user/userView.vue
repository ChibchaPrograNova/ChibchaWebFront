<template>
    <div>
        <h1>Gestion de usuarios</h1>
        <h3>Selecciona los Clientes que deseas Gestionar</h3>
        <div class="panel">
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Identificacion</th>
                        <th>Correo Electronico</th>
                        <th>Estado</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in data" :key="item.id">
                        <td>{{ item.name }}</td>
                        <td>{{ item.identification }}</td>
                        <td>{{ item.mail }}</td>
                        <td>{{ item.activate ? 'Activo' : 'Desactivado' }}</td>
                        <td>
                            <button @click="redirectToSearch(item.id)">Ver Mas</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';

const router = useRouter()
function redirectToSearch(id) {
    router.replace({ name: 'userInfo', params: { id: id } })
}

const data = ref([])

onMounted(async () => {
    try {
        const response = await fetch('https://chibchawebback-production-e6e7.up.railway.app/Clients/Manage/');
        const result = await response.json();
        data.value = result;
    } catch (error) {
        console.error('Error al cargar los datos:', error);
    }
});

</script>


<style scoped>
body {
    margin: 0;
}

.panel {
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 2px 8px #4b5757;
    padding: 1rem;

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
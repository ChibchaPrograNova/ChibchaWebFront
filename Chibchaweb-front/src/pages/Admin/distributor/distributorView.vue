<template>
    <div>
        <h1>Gestion de distribuidores</h1>
        <h3>Selecciona el distribuidor que deseas Gestionar</h3>
        <div class="panel">
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>NIT</th>
                        <th>Correo Electronico</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in data" :key="item.id">
                        <td>{{ item.name }}</td>
                        <td>{{ item.nit }}</td>
                        <td>{{ item.mail }}</td>
                        <td>
                            <button @click="redirectToSearch(item.id)">Ver Mas</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="actionButton">
                <button @click="redirectToNew">Añadir nuevo distribuidor</button>
                <button @click="sendReport">Enviar reporte mensual</button>
                <button @click="generateComission">Generar calculo comisiones</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';

const data = ref([])

onMounted(async () => {
    try {
        const response = await fetch('https://chibchawebback-production-e6e7.up.railway.app/Admins/Distributors/');
        const result = await response.json();
        data.value = result;
    } catch (error) {
        console.error('Error al cargar los datos:', error);
    }
});

const router = useRouter()
function redirectToSearch(id) {
    router.replace({ name: 'distributorInfo', params: { id: id } })
}
function redirectToNew() {
    router.replace({ name: 'distributorForm' })
}

async function sendReport() {
    const response = await fetch('https://chibchawebback-production-e6e7.up.railway.app/Admins/XML/');
    if (response.ok) {
        alert("Reportes enviados correctamente a los distribuidores")
    }
}
async function generateComission() {
    window.open('https://chibchawebback-production-e6e7.up.railway.app/Pays/Calculate-commissions/', '_blank');
    alert("Se ha generado el archivo para las transferencias bancarias")
}
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

.actionButton {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 20px;
    gap: 30px;
}
</style>
<template>
    <div>
        <h3>Resultados para la página</h3>
        <h1>{{ paginaNombre.nombreDominio }}</h1>
        <div class="panel">
            <table>
                <thead>
                    <tr>
                        <th>Dominio Disponible</th>
                        <th>Distribuidor</th>
                        <th>Plataforma</th>
                        <th>Disponible</th>
                        <th>Comprar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in domains" :key="item.id">
                        <td>{{ item.name }}</td>
                        <td>{{ buscarNombreDIstribuidor(item.id_Distributor) }}</td>
                        <td>{{ item.plataform }}</td>
                        <td>{{ item.available ? "✅" : "❌" }}</td>
                        <td>
                            <button v-if="item.available" @click="redirectToSearch(item)">Ver más</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useClientStore } from '../../stores/client'
import { useBuyStore } from '../../stores/buy'
import { useDomainStore } from '../../stores/domain'
import { onMounted, ref } from 'vue';

let paginaNombre = defineProps(['nombreDominio']);

const router = useRouter()
const clientStore = useClientStore()
const buyStore = useBuyStore()
const domainStore = useDomainStore()
const domains = ref([])
const distributors = ref([])

function redirectToSearch(domain) {
    buyStore.domainName = paginaNombre.nombreDominio
    buyStore.distribuidorName = domain.id_Distributor
    domainStore.domain = domain
    if (clientStore.client.name != '') {
        router.replace({ name: 'planView' })

    } else {
        router.replace({ name: 'registerView' })
    }
}
onMounted(async () => {
    let nombre = paginaNombre.nombreDominio
    const response = await fetch(`https://chibchawebback-production-e6e7.up.railway.app/Admins/Domain/?name=${nombre}`);
    domains.value = await response.json()
    if (domains.value.length == 0) {
        const request = {
            domain_name: paginaNombre.nombreDominio
        }
        const response = await fetch("https://chibchawebback-production-e6e7.up.railway.app/Admins/Process/", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(request),
        })
        const result = await response.json();
        domains.value = result
    }
    const responseDI = await fetch("https://chibchawebback-production-e6e7.up.railway.app/Admins/Distributors/")
    distributors.value = await responseDI.json();
})

function buscarNombreDIstribuidor(id) {
    const objetoEncontrado = distributors.value.find(objeto => objeto.id === id);
    if (objetoEncontrado) {
        return objetoEncontrado.name;
    } else {
        return 'Objeto no encontrado';
    }
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
</style>
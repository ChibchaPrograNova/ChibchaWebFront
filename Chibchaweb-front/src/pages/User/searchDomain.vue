<template>
    <div>
        <h3>resultados para la pagina</h3>
        <h1>{{ paginaNombre.nombreDominio }}</h1>
        <div class="panel">
            <table>
                <thead>
                    <tr>
                        <th>Dominio Disponible</th>
                        <th>Distribuidor</th>
                        <th>Comprar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{{ paginaNombre.nombreDominio }}.nz</td>
                        <td>Alibaba</td>
                        <td>
                            <button @click="redirectToSearch">Comprar!</button>
                        </td>
                    </tr>
                    <tr>
                        <td>{{ paginaNombre.nombreDominio }}.com</td>
                        <td>Amazon</td>
                        <td><button @click="redirectToSearch">Comprar!</button></td>
                    </tr>
                    <tr>
                        <td>{{ paginaNombre.nombreDominio }}.gg</td>
                        <td>Azure</td>
                        <td><button @click="redirectToSearch">Comprar</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

let paginaNombre = defineProps(['nombreDominio']);

const router = useRouter()
function redirectToSearch() {
    router.replace({ name: 'registerView' })
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
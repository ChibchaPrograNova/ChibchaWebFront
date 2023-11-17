<template>
    <div class="parent">
        <div class="div1">
            <div class="panel">
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Fecha</th>
                            <th>Asunto</th>
                            <th>Nivel</th>
                            <th>Ver Más</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>25</td>
                            <td>25/03/2023</td>
                            <td>Problema con la conexión de la página</td>
                            <td>Crítico</td>
                            <td>
                                <button @click="redirectToCase">Ver más</button>
                            </td>
                        </tr>
                        <tr>
                            <td>25</td>
                            <td>25/03/2023</td>
                            <td>Problema con la conexión de la página</td>
                            <td>Crítico</td>
                            <td>
                                <button @click="redirectToCase">Ver más</button>
                            </td>
                        </tr>
                        <tr>
                            <td>25</td>
                            <td>25/03/2023</td>
                            <td>Problema con la conexión de la página</td>
                            <td>Crítico</td>
                            <td>
                                <button @click="redirectToCase">Ver más</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="div2">
            <img src="\src\assets\LogoApp.svg" class="logo">
            <div class="info">
                <h1>Nombre</h1>
                Pepe Sánchez
                <h1>Cargo</h1>
                Soporte Conectividad
            </div>

        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

let id = 5
const router = useRouter()
function redirectToCase() {
    router.replace({ name: 'caseInfo', params: { id: id } })
}

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
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

}
</style>
<template>
    <div>
        <h1>ChibchaWeb</h1>
        <h3>Soluciones de hosting fiables y veloces para tu sitio web o aplicación.
            Potencia tu presencia en línea con nuestro servicio de primera calidad.</h3>

        <h1>Nombre de tu futura página</h1>
        <input type="text" class="srcInput" v-model="pagina">
        <button @click="redirectToSearch">Empecemos!</button>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

let pagina = ''
const router = useRouter()
function redirectToSearch() {
    router.replace({ name: 'searchDomain', params: { nombreDominio: pagina } })
}
</script>

<style scoped>
.srcInput {
    min-width: 90%;
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

div {
    display: flex;
    flex-direction: column;
    align-items: center;
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
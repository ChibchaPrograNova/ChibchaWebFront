<template>
  <div>
    <h1>Bienvenido Admin</h1>
    <h3>Selecciona el tipo de usuario que deseas gestionar.</h3>
    <div class="actionRow">
      <button @click="redirectToUsers">Usuarios</button>
      <button @click="redirectToEmployees">Empleados</button>
      <button @click="redirectToDis">Distribuidores</button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()

function redirectToEmployees() {
  router.replace({ name: 'employeeView' })
}

function redirectToUsers() {
  router.replace({ name: 'userView' })
}

function redirectToDis() {
  router.replace({ name: 'distributorView' })
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

.actionRow {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 100px;
}

button {
  width: 300px;
  height: 100px;
  font-size: 30px;
}
</style>
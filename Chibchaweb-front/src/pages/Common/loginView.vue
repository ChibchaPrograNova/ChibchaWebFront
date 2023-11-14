<template>
    <div>
        <h3>Inicia sesion</h3>
        <div class="form-container">
            <TheForm :form-config="formConfig1" :button-text="'Iniciar Sesion'" @submit="login" />
        </div>
    </div>
</template>
  
<script setup>
import TheForm from '../../components/UI/TheForm.vue';

let formConfig1 = [
    {
        type: 'text',
        name: 'Username',
        label: 'Nombre de Usuario',
        placeholder: 'Ingresa tu nombre de usuario',
    },
    {
        type: 'password',
        name: 'password',
        label: 'Contraseña',
        placeholder: 'Ingresa tu contraseña',
    },
]

function login() {
    alert("ayaya")
    this.$router.replace("/infoEmployee");
}

</script>

<style scoped>
h3 {
    font-family: 'Poppins', sans-serif;
    font-style: regular;
    font-weight: 600;
    text-align: center;
    font-size: 50px;
}
</style>
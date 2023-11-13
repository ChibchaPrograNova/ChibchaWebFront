<template>
    <h3>Inicia sesion</h3>
    <div class="form-container">
        <TheForm :form-config="formConfig1" />
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
</script>
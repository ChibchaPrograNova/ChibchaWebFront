<template>
    <div>
        <h3>Inicia sesion</h3>
        <div class="form-container">
            <BaseCard>
                <TheForm :form-config="formConfig1" :button-text="'Iniciar Sesion'" @submit-event="login" />
            </BaseCard>
        </div>
    </div>
</template>
  
<script setup>
import BaseCard from '../../components/UI/BaseCard.vue';
import TheForm from '../../components/UI/TheForm.vue';
import { useRouter } from 'vue-router';

const router = useRouter()

let formConfig1 = [
    {
        type: 'select',
        name: 'type',
        label: 'Tipo de Usuario',
        options: [
            { value: 'CL', label: 'Cliente' },
            { value: 'EM', label: 'Empleado' },
            { value: 'ADM', label: 'Administrador' }],
    },
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

function login(user) {
    if (user.type == 'CL') {
        router.replace({ name: 'userDashboard' })
    } else if (user.type == 'EM') {
        router.replace({ name: 'mainDashboard' })
    } else {
        router.replace({ name: 'adminDashboard' })
    }
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
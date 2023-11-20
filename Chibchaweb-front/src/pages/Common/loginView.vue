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
import { useLoginStore } from '../../stores/login'
import { useClientStore } from '../../stores/client'
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter()
const loginStore = useLoginStore()
const clientStore = useClientStore()

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
        name: 'email',
        label: 'Correo Electronico',
        placeholder: 'Ingresa tu Correo',
    },
    {
        type: 'password',
        name: 'password',
        label: 'Contraseña',
        placeholder: 'Ingresa tu contraseña',
    },
]

async function login(user) {
    loginStore.isLoggedIn = true
    if (user.type == 'CL') {
        let response = await verifyUser(user.email, user.password)
        if (response) {
            clientStore.client = usuario.value
            router.replace({ name: 'userDashboard' })
        } else {
            alert('Error al iniciar sesion, Verifique sus datos')
        }
    } else if (user.type == 'EM') {
        let response = await verifyEmployee(user.email, user.password)
        if (response) {
            router.replace({ name: 'mainDashboard' })
        } else {
            alert('Error al iniciar sesion, Verifique sus datos')
        }
    } else {
        let response = await verifyAdmin(user.email, user.password)
        if (response) {
            router.replace({ name: 'adminDashboard' })
        } else {
            alert('Error al iniciar sesion, Verifique sus datos')
        }
    }
}

const usuario = ref({})
async function verifyUser(email, pass) {
    const response = await fetch(`https://chibchawebback-production-e6e7.up.railway.app/Clients/Manage/?mail=${email}`);
    usuario.value = await response.json()
    if (usuario.value.password === pass && usuario.value.activate) {
        loginStore.type = 'user'
        return true;
    }
    return false;
}

async function verifyEmployee(email, pass) {
    const response = await fetch(`https://chibchawebback-production-e6e7.up.railway.app/Employees/Employees/?mail=${email}`);
    usuario.value = await response.json()
    if (usuario.value.password === pass && usuario.value.activate) {
        loginStore.type = 'emp'
        return true;
    }
    return false;
}

async function verifyAdmin(email, pass) {
    const response = await fetch(`https://chibchawebback-production-e6e7.up.railway.app/Admins/Executive/?mail=${email}`);
    usuario.value = await response.json()
    if (usuario.value.password === pass) {
        loginStore.type = 'adm'
        return true;
    }
    return false;
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
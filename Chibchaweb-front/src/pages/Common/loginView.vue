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
        await verifyUser(user.email)
        console.log(usuario.value)
        if (dataUser.value !== 404) {
            clientStore.name = usuario.value.name
            clientStore.identification = usuario.value.identification
            clientStore.address = usuario.value.address
            clientStore.mail = usuario.value.mail
            clientStore.age = usuario.value.age
            clientStore.country = usuario.value.country
            router.replace({ name: 'userDashboard' })
        } else {
            alert('Error al iniciar sesion, Verifique sus datos')
        }
    } else if (user.type == 'EM') {
        await verifyEmployee(user.email)
        if (dataUser.value !== 404) {
            router.replace({ name: 'mainDashboard' })
        } else {
            alert('Error al iniciar sesion, Verifique sus datos')
        }
    } else {
        await verifyAdmin(user.email)
        if (dataUser.value !== 404) {
            router.replace({ name: 'adminDashboard' })
        } else {
            alert('Error al iniciar sesion, Verifique sus datos')
        }
    }
}

const dataUser = ref('')
const usuario = ref({})
async function verifyUser(email) {
    const response = await fetch(`https://chibchawebback-production-e6e7.up.railway.app/Clients/Manage/?mail=${email}`);
    const result = response.status;
    usuario.value = await response.json()
    dataUser.value = result;
}

async function verifyEmployee(email) {
    const response = await fetch(`https://chibchawebback-production-e6e7.up.railway.app/Employees/Employees/?mail=${email}`);
    const result = response.status;
    dataUser.value = result;
}

async function verifyAdmin(email) {
    let sudo = 'admin@ChibchaWeb.com'
    if (email != sudo) {
        dataUser.value = 404
    } else {
        dataUser.value = 200
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
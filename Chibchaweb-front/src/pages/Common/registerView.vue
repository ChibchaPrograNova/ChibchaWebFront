<template>
    <div>
        <h3>{{ titulo }}</h3>
        <div class="form-container">
            <BaseCard>
                <TheForm :form-config="formConfig1" :button-text="textoBoton" @submit-event="validate" />
            </BaseCard>
        </div>
    </div>
</template>
  
<script setup>
import BaseCard from '../../components/UI/BaseCard.vue';
import TheForm from '../../components/UI/TheForm.vue';
import { useRouter } from 'vue-router';
import { useClientStore } from '../../stores/client';
import { useLoginStore } from '../../stores/login';
import { ref, onBeforeMount } from 'vue';
let formConfig1 = [
    {
        type: 'text',
        name: 'name',
        label: 'Nombre Completo',
        placeholder: 'Ingresa tu nombre completo',
    },
    {
        type: 'text',
        name: 'identification',
        label: 'Número de Documento',
        placeholder: 'Ingresa tu número de documento',
    },
    {
        type: 'text',
        name: 'address',
        label: 'Dirección',
        placeholder: 'Ingresa tu Dirección',
    },
    {
        type: 'text',
        name: 'mail',
        label: 'Correo',
        placeholder: 'Ingresa tu Correo Electrónico',
    },
    {
        type: 'password',
        name: 'password',
        label: 'Contraseña',
        placeholder: 'Ingresa tu Contraseña',
    },
    {
        type: 'number',
        name: 'age',
        label: 'Edad',
        placeholder: 'Ingresa tu Edad',
    },
    {
        type: 'select',
        name: 'country',
        label: 'País',
        options: [{ value: 'colombia', label: 'Colombia' }, { value: 'Other', label: 'Otros Paises' }],
    },
]
const router = useRouter()
function redirectToPlan() {
    router.replace({ name: 'userDashboard' })
}
function redirectToUserInfo() {
    router.replace({ name: 'userView' })
}

const clientStore = useClientStore()
const loginStore = useLoginStore()

function validate(data) {
    if (!data.age || !data.identification || !data.country || !data.password || !data.mail || !data.address || !data.name) {
        alert("Por favor ingrese todos los datos solicitados")
    }
    else if (data.identification.length > 12) {
        alert("Ingrese un numero de identificación valido (maximo 12 caracteres)")
    } else if (data.age > 100 || data.age < 13) {
        alert("Ingrese un edad valida")
    } else {
        register(data)
    }
}
async function register(newUser) {
    if (isEdit.value == false) {
        const register = await fetch("https://chibchawebback-production-e6e7.up.railway.app/Clients/Manage/", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser),
        })
        const RegisterResponse = await register.json()
        clientStore.client = newUser
        clientStore.client.id = RegisterResponse.id
        loginStore.isLoggedIn = true
        loginStore.type = 'user'
        redirectToPlan()
    } else {
        await fetch(`https://chibchawebback-production-e6e7.up.railway.app/Clients/Manage/?id=${id.value}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser),
        })
        clientStore.client = {}
        redirectToUserInfo()
    }

}
const textoBoton = ref('Registrar')
const titulo = ref('Registrarse')
const id = ref('')
const isEdit = ref(false)

onBeforeMount(async () => {
    const clientStore = useClientStore()
    if (clientStore.client.name !== '') {
        titulo.value = 'Editar Usuario'
        textoBoton.value = 'Editar'
        id.value = clientStore.client.id
        isEdit.value = true
    }
});
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
<template>
    <div>
        <h3>Registrate</h3>
        <div class="form-container">
            <BaseCard>
                <TheForm :form-config="formConfig1" :button-text="'Registrar'" @submit-event="register" />
            </BaseCard>
        </div>
    </div>
</template>
  
<script setup>
import BaseCard from '../../components/UI/BaseCard.vue';
import TheForm from '../../components/UI/TheForm.vue';
import { useRouter } from 'vue-router';
import { useClientStore } from '../../stores/client'
let formConfig1 = [
    {
        type: 'text',
        name: 'name',
        label: 'Nombre Completo',
        placeholder: 'Ingresa tu nombre completo',
    },
    {
        type: 'number',
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
    // {
    //     type: 'password',
    //     name: 'password',
    //     label: 'Contraseña',
    //     placeholder: 'Ingresa tu contraseña',
    // },
]
const router = useRouter()
function redirectToSearch() {
    router.replace({ name: 'planView' })
}

const clientStore = useClientStore()
function register(newUser) {
    fetch("https://chibchawebback-production-e6e7.up.railway.app/Clients/Manage/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
    })
    clientStore.name = newUser.name
    clientStore.identification = newUser.identification
    clientStore.address = newUser.address
    clientStore.mail = newUser.mail
    clientStore.age = newUser.age
    clientStore.country = newUser.country
    redirectToSearch()
    //this.$router.replace("/infoEmployee");
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
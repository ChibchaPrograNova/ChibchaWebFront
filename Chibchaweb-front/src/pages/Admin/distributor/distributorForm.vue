<template>
    <div>
        <h3>Registar nuevo distribuidor</h3>
        <div class="form-container">
            <BaseCard>
                <TheForm :form-config="formConfig1" :button-text="'Guardar'" @submit-event="login" />
            </BaseCard>
        </div>
    </div>
</template>
  
<script setup>
import BaseCard from '../../../components/UI/BaseCard.vue';
import TheForm from '../../../components/UI/TheForm.vue';
import { useRouter } from 'vue-router';
let formConfig1 = [
    {
        type: 'text',
        name: 'Username',
        label: 'Nombre Completo',
        placeholder: 'Ingresa tu nombre completo',
    },
    {
        type: 'number',
        name: 'numeroDocumento',
        label: 'Número de Documento NIT',
        placeholder: 'Ingresa tu número de NIT',
    },
    {
        type: 'text',
        name: 'address',
        label: 'Dirección',
        placeholder: 'Ingresa tu Dirección',
    },
    {
        type: 'text',
        name: 'email',
        label: 'Correo',
        placeholder: 'Ingresa tu Correo Electrónico',
    },
    {
        type: 'password',
        name: 'password',
        label: 'Contraseña',
        placeholder: 'Ingresa tu contraseña',
    },
]
const router = useRouter()
function redirectToSearch() {
    router.replace({ name: 'distributorView' })
}
function login(newUser) {
    console.log(newUser)
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
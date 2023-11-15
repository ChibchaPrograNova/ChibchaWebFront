<template>
    <div>
        <h3>Registrate</h3>
        <div class="form-container">
            <BaseCard>
                <TheForm :form-config="formConfig1" :button-text="'Registrar'" @submit-event="login" />
            </BaseCard>
        </div>
    </div>
</template>
  
<script setup>
import BaseCard from '../../components/UI/BaseCard.vue';
import TheForm from '../../components/UI/TheForm.vue';
import { useRouter } from 'vue-router';
let formConfig1 = [
    {
        type: 'text',
        name: 'Username',
        label: 'Nombre Completo',
        placeholder: 'Ingresa tu nombre completo',
    },
    {
        type: 'select',
        name: 'tipoDoc',
        label: 'Tipo Documento',
        options: [
            { value: 'CC', label: 'Cédula de Ciudadanía' },
            { value: 'CE', label: 'Cédula Extranjería' },
            { value: 'NIT', label: 'Número de Identificación Tributaria' }],
    },
    {
        type: 'number',
        name: 'numeroDocumento',
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
        name: 'email',
        label: 'Correo',
        placeholder: 'Ingresa tu Correo Electrónico',
    },
    {
        type: 'select',
        name: 'country',
        label: 'País',
        options: [{ value: 'colombia', label: 'Colombia' }, { value: 'Other', label: 'Otros Paises' }],
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
    router.replace({ name: 'planView' })
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
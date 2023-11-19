<template>
    <div>
        <h3>Registar nuevo distribuidor</h3>
        <div class="form-container">
            <BaseCard>
                <TheForm :form-config="formConfig1" :button-text="'Guardar'" @submit-event="register" />
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
        name: 'name',
        label: 'Nombre Completo',
        placeholder: 'Ingrese el nombre completo',
    },
    {
        type: 'number',
        name: 'nit',
        label: 'Número de Documento NIT',
        placeholder: 'Ingresa el número de NIT',
    },
    {
        type: 'text',
        name: 'address',
        label: 'Dirección',
        placeholder: 'Ingresa la Dirección',
    },
    {
        type: 'text',
        name: 'mail',
        label: 'Correo',
        placeholder: 'Ingresa el Correo Electrónico',
    },
    {
        type: 'number',
        name: 'bank_account',
        label: 'Cuenta Bancaria',
        placeholder: 'Ingrese su Cuenta Bancaria',
    },
]
const router = useRouter()
function redirectToSearch() {
    router.replace({ name: 'distributorView' })
}
function register(newUser) {
    fetch("https://chibchawebback-production-e6e7.up.railway.app/Admins/Distributors/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
    })
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
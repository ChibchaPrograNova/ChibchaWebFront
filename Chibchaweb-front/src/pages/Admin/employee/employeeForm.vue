<template>
    <div>
        <h3>Registrar nuevo empleado</h3>
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
        placeholder: 'Ingresa el nombre completo',
    },
    {
        type: 'number',
        name: 'identification',
        label: 'Número de Documento',
        placeholder: 'Ingresa el número de documento',
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
        name: 'age',
        label: 'Edad',
        placeholder: 'Ingresa la edad',
    },
    {
        type: 'select',
        name: 'country',
        label: 'País',
        options: [{ value: 'colombia', label: 'Colombia' }, { value: 'Other', label: 'Otros Paises' }],
    },
    {
        type: 'select',
        name: 'ocuppation',
        label: 'Cargo',
        options: [{ value: 'SC', label: 'Soporte Conectividad' },
        { value: 'SP', label: 'Soporte Pagos' },
        { value: 'SE', label: 'Soporte ENV' },
        { value: 'SPR', label: 'Soporte Privacidad' },
        ],
    },
    {
        type: 'number',
        name: 'salary',
        label: 'Salario',
        placeholder: 'Ingresa el salario del empleado',
    },
]
const router = useRouter()
function redirectToSearch() {
    router.replace({ name: 'employeeView' })
}

function register(newUser) {
    fetch("https://chibchawebback-production-e6e7.up.railway.app/Employees/Employees/", {
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
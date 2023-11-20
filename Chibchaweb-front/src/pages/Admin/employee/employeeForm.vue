<template>
    <div>
        <h3>{{ titulo }}</h3>
        <div class="form-container">
            <BaseCard>
                <TheForm :form-config="formConfig1" :button-text="textoBoton" @submit-event="register" />
            </BaseCard>
        </div>
    </div>
</template>
  
<script setup>
import BaseCard from '../../../components/UI/BaseCard.vue';
import TheForm from '../../../components/UI/TheForm.vue';
import { useRouter } from 'vue-router';
import { useEmployeeStore } from '../../../stores/employee';
import { ref, onBeforeMount } from 'vue';

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
        name: 'occupation',
        label: 'Cargo',
        options: [{ value: 'Conectividad', label: 'Soporte Conectividad' },
        { value: 'Pagos', label: 'Soporte Pagos' },
        { value: 'Env', label: 'Soporte ENV' },
        { value: 'Privacidad', label: 'Soporte Privacidad' },
        ],
    },
    {
        type: 'number',
        name: 'salary',
        label: 'Salario',
        placeholder: 'Ingresa el salario del empleado',
    },
    {
        type: 'password',
        name: 'password',
        label: 'Contraseña',
        placeholder: 'Ingresa la contraseña',
    },
]
const router = useRouter()
function redirectToSearch() {
    router.replace({ name: 'employeeView' })
}
const employeeStore = useEmployeeStore()
async function register(newUser) {
    if (isEdit.value == false) {
        await fetch("https://chibchawebback-production-e6e7.up.railway.app/Employees/Employees/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser),
        })
        redirectToSearch()
    } else {
        await fetch(`https://chibchawebback-production-e6e7.up.railway.app/Employees/Employees/?id=${id.value}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser),
        })
        employeeStore.employee = {}
        redirectToSearch()
    }
}

const textoBoton = ref('Registrar')
const titulo = ref('Registrar un empleado')
const id = ref('')
const isEdit = ref(false)

onBeforeMount(async () => {
    const employeeStore = useEmployeeStore()
    if (employeeStore.employee.name !== '') {
        titulo.value = 'Editar Empleado'
        textoBoton.value = 'Editar'
        id.value = employeeStore.employee.id
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
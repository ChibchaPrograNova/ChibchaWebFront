<template>
    <div class="parent">
        <div class="div1">
            <BaseCard>
                <h1>Info Empleado</h1>
                <h3>Nombre</h3> {{ data.name }}
                <h3>Cédula</h3> {{ data.identification }}
                <h3>Dirección</h3> {{ data.address }}
                <h3>Edad</h3> {{ data.age }}
                <h3>País</h3> {{ data.country }}
                <h3>Correo Electrónico</h3> {{ data.mail }}
                <h3>Cargo</h3> {{ data.occupation }}
                <h3>Sueldo</h3>{{ data.salary }}
                <h3>Estado</h3>{{ data.activate ? 'Activo' : 'Desactivado'}}
            </BaseCard>

        </div>
        <div class="div2">
            <button @click="desactivateAccount" >Desactivar Cuenta</button>
            <button @click="reditectToForm">Editar Datos Personales</button>
        </div>
    </div>
</template>

<script setup>
import BaseCard from '../../../components/UI/BaseCard.vue';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useEmployeeStore } from '../../../stores/employee';

let idEmployee = defineProps(['id']);


const data = ref([])

onMounted(async () => {
    const employeeStore = useEmployeeStore()
    try {
        const response = await fetch(`https://chibchawebback-production-e6e7.up.railway.app/Employees/Employees/?id=${idEmployee.id}`);
        const result = await response.json();
        data.value = result;
        employeeStore.employee = result

    } catch (error) {
        console.error('Error al cargar los datos:', error);
    }
});

async function desactivateAccount() {
    const response = {
        activate: false
    }
    await fetch(`https://chibchawebback-production-e6e7.up.railway.app/Employees/Employees/?id=${data.value.id}`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(response),
    })
    redirectToUserInfo()
}

const router = useRouter()
function redirectToUserInfo() {
    router.replace({ name: 'employeeView' })
}
function reditectToForm() {
    router.replace({ name: 'employeeForm' })
}
</script>


<style scoped>
body {
    margin: 0;
}

.parent {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
}

.div1 {
    grid-area: 1 / 1 / 2 / 2;
}

.div2 {
    grid-area: 1 / 2 / 2 / 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

button {
    width: 300px;
    height: 100px;
    font-size: 20px;
}

h1 {
    font-family: 'Poppins', sans-serif;
    font-style: bold;
    font-weight: 600;
    text-align: left;
    font-size: 30px;
}

h3 {
    font-family: 'Poppins', sans-serif;
    font-style: regular;
    font-weight: 100;
    text-align: left;
    font-size: 20px;
}
</style>
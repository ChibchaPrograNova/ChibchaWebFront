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
import { useDistributorStore } from '../../../stores/distributor';
import { ref, onBeforeMount } from 'vue';

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
    {
        type: 'select',
        name: 'category',
        label: 'Categoria',
        options: [{ value: 'Básico', label: 'Básico' },
        { value: 'Premium', label: 'Premium' },
        ],
    },
]
const router = useRouter()
function redirectToSearch() {
    router.replace({ name: 'distributorView' })
}

const distributorStore = useDistributorStore()

async function register(newUser) {
    if (isEdit.value == false) {
        await fetch("https://chibchawebback-production-e6e7.up.railway.app/Admins/Distributors/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser),
        })
        redirectToSearch()
    } else {
        await fetch(`https://chibchawebback-production-e6e7.up.railway.app/Admins/Distributors/?id=${id.value}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser),
        })
        redirectToSearch()
        distributorStore.distributor = {}
    }
}

const textoBoton = ref('Registrar')
const titulo = ref('Registrar un distribuidor')
const id = ref('')
const isEdit = ref(false)

onBeforeMount(async () => {
    const distribuidorStore = useDistributorStore()
    if (distribuidorStore.distributor.name !== '') {
        titulo.value = 'Editar Distribuidor'
        textoBoton.value = 'Editar'
        id.value = distributorStore.distributor.id
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
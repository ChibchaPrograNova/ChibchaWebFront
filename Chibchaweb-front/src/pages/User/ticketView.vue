<template>
    <div>

        <h1>Ayuda y soporte</h1>
        <BaseCard>
            <h3>Describe la problematica que tuviste</h3>

            <TheForm :form-config="formConfig1" :button-text="'Registrar'" @submit-event="send" />
        </BaseCard>
    </div>
</template>

<script setup>
import TheForm from '../../components/UI/TheForm.vue';
import BaseCard from '../../components/UI/BaseCard.vue';
import { useClientStore } from '../../stores/client'
import { useRouter } from 'vue-router';

const router = useRouter()
const clientStore = useClientStore()
let formConfig1 = [
    {
        type: 'select',
        name: 'level',
        label: 'Prioridad',
        options: [{ value: 'Basico', label: 'Basico' }, { value: 'Intermedio', label: 'Intermedio' }, { value: 'Critico', label: 'Critico' }, { value: 'Prioritario', label: 'Priotario' }],
    },
    {
        type: 'select',
        name: 'category',
        label: 'Categoria',
        options: [{ value: 'Conectividad', label: 'Conectividad' }, { value: 'Pagos', label: 'Pagos' }, { value: 'Env', label: 'Env' }, { value: 'Privacidad', label: 'Privacidad' }],
    },
    {
        type: 'text',
        name: 'affair',
        label: 'Asunto',
        placeholder: 'Describe tu problema en pocas palabras',
    },
    {
        type: 'textarea',
        name: 'description',
        label: 'Descripción completa',
        placeholder: 'En que podemos ayudarte',
    }

]

async function send(data) {
    const request = {
        client: clientStore.client.id,
        affair: data.affair,
        level: data.level,
        category: data.category,
        description: data.description
    }
    await fetch("https://chibchawebback-production-e6e7.up.railway.app/Employees/Ticket/", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(request),
    })
    router.replace({ name: 'home' })

}
</script>


<style scoped>
body {
    margin: 0;
}

h1 {
    font-family: 'Poppins', sans-serif;
    font-style: bold;
    font-weight: 600;
    text-align: left;
    font-size: 90px;
}

h3 {
    font-family: 'Poppins', sans-serif;
    font-style: regular;
    font-weight: 200;
    text-align: left;
    font-size: 20px;
}
</style>
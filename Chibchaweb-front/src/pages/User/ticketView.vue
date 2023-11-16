<template>
    <div>
        <h1>Ayuda y soporte</h1>
        <h3>Describe la problematica que tuviste</h3>
        <TheForm :form-config="formConfig1" :button-text="'Registrar'" @submit-event="login" />
        <FileUploader />
    </div>
</template>

<script setup>
import FileUploader from '../../components/UI/FileUploader.vue';
import TheForm from '../../components/UI/TheForm.vue';

let formConfig1 = [
    {
        type: 'textarea',
        name: 'Username',
        label: '',
        placeholder: 'En que podemos ayudarte',
    }
]
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
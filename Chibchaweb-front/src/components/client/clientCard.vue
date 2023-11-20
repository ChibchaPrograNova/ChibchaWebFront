<template>
    <h4>Nombre:</h4>
    {{ clientStore.client.name }}
    <h4>Documento:</h4>
    {{ clientStore.client.identification }}
    <h4>Correo:</h4>
    {{ clientStore.client.mail }}
    <h4>Dirección:</h4>
    {{ clientStore.client.address }}
    <h4>País:</h4>
    {{ clientStore.client.country }}
</template>

<script setup>
import { useClientStore } from '../../stores/client'
const clientStore = useClientStore()

</script>

<style scoped>
h4 {
    font-weight: bold;
}
</style>
<!-- FileUploader.vue -->
<template>
    <div>
        <input type="file" @change="handleFileUpload" />
        <button @click="uploadFile">Subir Archivo</button>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            selectedFile: null,
        };
    },
    methods: {
        handleFileUpload(event) {
            // Captura el archivo seleccionado por el usuario
            this.selectedFile = event.target.files[0];
        },
        uploadFile() {
            // Aquí puedes realizar la lógica para subir el archivo
            if (this.selectedFile) {
                console.log("Subiendo archivo:", this.selectedFile);
                // Aquí puedes realizar la lógica para subir el archivo, como enviarlo a un servidor
            } else {
                console.log("No se ha seleccionado ningún archivo");
            }
        },
    },
};
</script>
  
<style scoped></style>
  
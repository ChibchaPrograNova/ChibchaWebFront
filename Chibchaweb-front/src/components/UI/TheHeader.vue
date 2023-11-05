<template>
    <div class="headerWrapper">
        <img src="src\assets\LogoApp.svg">
        <div class="actionRow">
            <RouterLink to="login">Iniciar sesion</RouterLink>
            <RouterLink to="register">Registrar</RouterLink>
        </div>
    </div>
</template>

<style scoped>
img {
    height: 4em;
    width: 4em;
}

img path {
    fill: white;
}

.headerWrapper {
    height: 5rem;
    width: 100vw;
    background-color: #4a7e01;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.actionRow {
    align-self: flex-end;
    gap: 20px;
}
</style>
<template>
    <div class="headerWrapper">
        <RouterLink to="/" class="logo">
            <img src="\src\assets\LogoApp.svg">
            <h1>ChibchaWeb</h1>
        </RouterLink>

        <div class="actionRow">
            <RouterLink to="login">Iniciar sesion</RouterLink>
            <RouterLink to="register">Registrar</RouterLink>
        </div>
    </div>
</template>

<style scoped>
.headerWrapper {
    height: 5rem;
    width: 100vw;
    background-color: #58706d;
    display: flex;
    overflow: hidden;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
}

.actionRow {
    display: flex;
    align-self: center;
    padding: 20px;
    gap: 20px;
}

.logo {
    background-color: #58706d;
    display: flex;
    align-items: center;
    padding: 20px;
    width: auto;
}


h1 {
    font-family: 'Poppins', sans-serif;
    color: white;
    font-style: italic;
    font-weight: 400;
}

img {
    height: 4em;
    width: 4em;
    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg) brightness(102%) contrast(102%);
    ;

}

.actionRow a {
    background-color: #7c8a6e;
    border-radius: 8px;
    border-style: none;
    box-sizing: border-box;
    color: #FFFFFF;
    cursor: pointer;
    display: inline-block;
    font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 14px;
    font-weight: 500;
    height: 40px;
    line-height: 20px;
    list-style: none;
    margin: 0;
    outline: none;
    padding: 10px 16px;
    position: relative;
    text-align: center;
    text-decoration: none;
    transition: color 100ms;
    vertical-align: baseline;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;

}

.actionRow a:hover,
.actionRow a:focus {
    background-color: #b0b087;
}
</style>


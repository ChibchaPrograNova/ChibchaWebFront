<template>
    <div>
        <h3>Detalles de Facturación</h3>
        <div class="formContainer">
            <div class="div1">
                <h2>Datos del cliente</h2>
                <BaseCard class="cards">
                    <ClientCard />
                </BaseCard>
            </div>
            <div class="div2">
                <h2>Información Método de Pago</h2>
                <BaseCard>
                    <TheForm :form-config="formConfig1" :button-text="'Validar Información'"
                        @submit-event="validateCreditCard" />
                    <div class='verificationContainer' v-if="isValid == true">
                        <p>Has Ingresado una tarjeta Valida</p>
                        <img src="https://media.discordapp.net/attachments/710832608371671052/1174132784831397898/MasterCard_Logo.svg.png?ex=65667b5e&is=6554065e&hm=dfa6c0d685a92c10b95409dac44d8e86f3f1ae7960487b438a3e9e16f76dd1d4&=&width=832&height=499"
                            alt="W3Schools.com" style="width:60px;height:30px;" v-if="cardType === 'MASTERCARD'">
                        <img src="https://media.discordapp.net/attachments/710832608371671052/1174135195931246612/Diners_Club-logo-9EA513928F-seeklogo.com.png?ex=65667d9d&is=6554089d&hm=755cd0bf8b8c3bfa46a356c25a885276c36a76ac6fc61691067158c6f6615e5f&="
                            alt="W3Schools.com" style="width:60px;height:30px;" v-else-if="cardType === 'DINERS'">
                        <img src="https://media.discordapp.net/attachments/710832608371671052/1174132785259221042/Visa_Inc._logo.svg.png?ex=65667b5e&is=6554065e&hm=33e2914db7b0f4f285e2353c4629334e65208ab4f50eaef732ed5be4f977ee14&=&width=1020&height=330"
                            alt="W3Schools.com" style="width:60px;height:30px;" v-else-if="cardType === 'VISA'">
                    </div>
                </BaseCard>
            </div>
            <div class="div3">
                <h2>Resumen de compra</h2>
                <BaseCard class="cards">

                </BaseCard>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import BaseCard from '../../components/UI/BaseCard.vue';
import TheForm from '../../components/UI/TheForm.vue';
import ClientCard from '../../components/client/clientCard.vue';
//import { useRouter } from 'vue-router';
let formConfig1 = [
    {
        type: 'text',
        name: 'Username',
        label: 'Nombre del Titular',
        placeholder: 'Nombre Titular',
    },
    {
        type: 'number',
        name: 'numeroCreditCard',
        label: 'Ingresa el número de la tarjeta de crédito',
        placeholder: 'Número de tarjeta',
    },

    {
        type: 'password',
        name: 'credit-card',
        label: 'CCV',
        placeholder: 'CCV',
    },
    {
        type: 'password',
        name: 'password',
        label: 'Contraseña',
        placeholder: 'Ingresa tu contraseña',
    }
]

const isValid = ref('')
const cardType = ref('')

function validateCreditCard(datos) {
    let numeroTarjeta = String(datos.numeroCreditCard)
    console.log(numeroTarjeta)
    // Expresión regular para validar tarjeta de crédito
    const creditCardRegex = /^(?!0000)(?!6666)(?!5555)(?!4444)(?!3333)(?!2222)(?!1111)(?!9999)(?!1234)(?!5678)(?!9876)(?!0101)(?!4321)([0-9]{4}-){3}[0-9]{4}|[0-9]{16}$/;

    // Realiza la validación
    isValid.value = creditCardRegex.test(numeroTarjeta.replace(/-/g, ''));
    console.log(isValid)
    // Determina el tipo de tarjeta
    cardType.value = detectCardType(numeroTarjeta);
}
function detectCardType(cardNumber) {
    // Patrones para determinar el tipo de tarjeta
    const cardPatterns = {
        visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
        mastercard: /^5[1-5][0-9]{14}$/,
        diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/
        // Agrega más patrones según sea necesario
    };

    // Busca el tipo de tarjeta
    for (const [type, pattern] of Object.entries(cardPatterns)) {
        if (pattern.test(cardNumber)) {
            console.log(type.toUpperCase())
            return type.toUpperCase();
        }
    }
    // Si no coincide con ningún patrón conocido
    return 'Desconocido';
}
</script>

<style scoped>
body {
    margin: 0;
}

.formContainer {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, auto);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
}

.div1 {
    grid-area: 1 / 1 / 2 / 2;
}

/* .cards {
    min-height: 100%;
    min-width: 80%;
} */

.div2 {
    grid-area: 2 / 1 / 3 / 2;
}

.div3 {
    grid-area: 1 / 2 / 3 / 3;
}

h3 {
    font-family: 'Poppins', sans-serif;
    font-style: regular;
    font-weight: 600;
    text-align: center;
    font-size: 50px;
}

.verificationContainer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

.verificationContainer p {
    font-weight: bold;
    margin-right: 10px;
}
</style>
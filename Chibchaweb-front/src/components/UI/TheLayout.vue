<template>
    <div class="content">
        <TheHeader />
        <main>
            <slot></slot>
        </main>
        <Button class="ayuda" @click="redirectToHelp">?</Button>
        <TheFooter />
    </div>
</template>

<script setup>
import TheHeader from '../../components/UI/TheHeader.vue';
import TheFooter from '../../components/UI/TheFooter.vue';
import { useRouter } from 'vue-router';

const router = useRouter()

function redirectToHelp() {
    router.replace({ name: 'ayuda' })
}

</script>

<style scoped>
.content {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

main {
    flex: 1;
    padding: 1rem;
}

.ayuda {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-left: auto;
    margin-right: 10px;
    margin-bottom: 10px;
    font-size: 25px;
}
</style>
<template>
    <div class="content">
        <TheHeader />
        <main>
            <slot></slot>
        </main>
        <TheFooter />
    </div>
</template>

<script setup>
import TheHeader from '../../components/UI/TheHeader.vue';
import TheFooter from '../../components/UI/TheFooter.vue';
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
</style>
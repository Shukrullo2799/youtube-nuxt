<template>
  <div class="mt-7 max-w-sm mx-auto text-center card">
    <p class="mt-7 text-7xl font-bold">{{ error.statusCode }}</p>
    <p class="mt-7 text-6xl">Oooops.</p>
    <p class="mt-7">{{ error.message }}</p>
    <button class="mt-7 btn" @click="errorHandler">Go back</button>
  </div>
</template>

<script setup>
defineProps(["error"]);

const errorHandler = () => clearError({ redirect: "/" });
</script>

<style scoped></style>

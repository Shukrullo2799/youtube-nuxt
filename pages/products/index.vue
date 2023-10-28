<template>
  <div class="grid grid-cols-4 gap-5">
    <div v-for="(product, i) in products" :key="i">
      <product-card :product="product" />
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "products",
});

useHead({
  title: "Nuxty | Products",
  meta: [{ name: "description", content: "Nuxty | Products" }],
});

const { data: products } = await useFetch("https://fakestoreapi.com/products");
</script>

<style lang="scss" scoped></style>

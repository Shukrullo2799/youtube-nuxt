<template>
  <div>
    <Head>
      <Title>Nuxty | {{ product.title }}</Title>
      <Meta name="description" :content="product.description" />
    </Head>
    <product-show :product="product" />
  </div>
</template>

<script setup>
const { id } = useRoute().params;
const url = `https://fakestoreapi.com/products/${id}`;
definePageMeta({
  layout: "products",
});

const { data: product } = await useFetch(url, { key: id });

if (!product.value) {
  throw createError({
    statusCode: 404,
    message: "Product not found",
    fatal: true, // buni default pagega yangi link qpwib xatoni korsatgandan keyin yoziladi
  });
}
</script>

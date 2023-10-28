<template>
  <div>
    <h1>About Us</h1>
    <p>We are a company that specializes in creating high-quality products.</p>

    <p>1 USD = {{ data.UZS?.value.toFixed(2) }} {{ data.UZS?.code }}</p>
  </div>
</template>

<script setup>
// const { data } = await useFetch("/api/webPoint?name=About", {
//   method: "post",
//   body: { age: 25 },
// });

// const { data } = await useFetch("/api/webPoint");
const { data } = await useFetch("/api/currency/UZS");
</script>

<style>
h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

p {
  font-size: 1.2rem;
  line-height: 1.5;
}
</style>

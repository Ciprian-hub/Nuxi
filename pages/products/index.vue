<template>
  <div>
    <h1>Products</h1>
    <div class="grid grid-cols-4 gap-5 p-4">
      <div v-for="product in products">
        <ProductCard :product="product"/>
      </div>
    </div>

  </div>
</template>

<script setup>
import ProductCard from "../../components/ProductCard";

const { data: products } = await useFetch('https://fakestoreapi.com/products')

useHead({
  title: "WebFlow | Merch",
  meta: [
    {
      name: 'description',
      content: "Rewrite meta tags form .config"
    }
  ]
})
</script>

<style scss>

</style>
<template>
  <div class="card text-center">
    <img :src="product.image" alt="" class="thumb">
    <div class="truncate font-bold text-gray-500 mt-2">{{product.title}}</div>
    <div class="truncate m-3">{{product.description}}</div>
    <div class="font-bold">{{product.price}} USD</div>

    <nuxt-link :to="`/products/${product.id}`">
      <button class="mt-3">
        View Details
      </button>
    </nuxt-link>
  </div>
</template>

<script setup>
const { product } = defineProps(['product'])
</script>

<style scoped>
.thumb {
  max-height: 120px;
  max-width: 70%;
  margin: 0 auto;
}
</style>
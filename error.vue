<template>
  <div class="mt-7 max-w-sm mx-auto test-center card">
    <div class="mt-7 text-7xl font-bold">
      {{error.statusCode}}
    </div>
    <div class="mt-7 text-6xl">
      Ooooops...
    </div>
    <div class="mt-7">
      {{error.message}}
    </div>
  </div>
</template>

<script setup>
  defineProps(['error'])
</script>

<style>

</style>
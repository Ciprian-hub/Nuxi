<template>
  <div>
      <h1 class="mt-3">About</h1>
    <div>
      {{data}}
    </div>
  </div>
</template>

<script setup>
import {useFetch} from "nuxt/app";

const { data } = await useFetch('/api/ninja', {
  method: 'post',
  body : {age: 20}
})

</script>

<style scss>

</style>
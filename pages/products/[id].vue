<template>
  <div>
    <Head>
      <Title>
          WebFlow | {{product.title}}
      </Title>
      <Meta name="description" :content="product.description"/>
    </Head>
    <ProductDetails :product= "product"/>
  </div>
</template>

<script setup>
import {useRoute} from "nuxt/app";

import ProductDetails from "../../components/ProductDetails";

const { id } = useRoute().params
const uri = 'https://fakestoreapi.com/products/' + id

const {data: product} = await useFetch(uri, {key: id})

if(!product.value) {
  throw createError({statusCode: 404, statusMessage: "Page not found"})
}
</script>

<style scss>

</style>
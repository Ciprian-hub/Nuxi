<template>
  <Nav/>
  <div class="max-w-screen-xl mx-auto">
    <slot/>
  </div>

  <Footer/>

</template>

<script>
import Footer from "../components/Footer";
export default {
  components: {Footer}
}
</script>

<style scss>

</style>
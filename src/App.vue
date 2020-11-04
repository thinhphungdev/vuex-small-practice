<template>
  <div id="app">
      <product-list-one></product-list-one>
      <product-list-two></product-list-two>
  </div>
</template>

<script>
import ProductListOne from './components/ProductListOne'
import ProductListTwo from './components/ProductListTwo'
export default {
    name: 'app',
    components: {
        'product-list-one': ProductListOne,
        'product-list-two': ProductListTwo
    }
}
</script>

<style>
body{
    font-family: Ubuntu;
    color: #555;
}
</style>
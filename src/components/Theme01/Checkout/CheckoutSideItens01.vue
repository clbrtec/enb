<template>
  <div class='CheckoutSideItens'>
    <checkout-sideItem01/>
  </div>
</template>

<script>
import CheckoutSideItem01 from './CheckoutSideItem01'
export default {
  name: 'CheckoutSideItens',
  components: { CheckoutSideItem01 }
}
</script>

<style scoped>
.CheckoutSideItens {
  height: 70%;
  overflow: auto;
}
</style>

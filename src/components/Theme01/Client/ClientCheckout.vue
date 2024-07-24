<template>
  <div class='ClientCheckout'>
    <checkout-item/>
  </div>
</template>

<script>
import CheckoutItem from './CheckoutItem'
export default {
  name: 'ClientCheckout',
  components: { CheckoutItem }
}
</script>

<style scoped>
.ClientCheckout {
  width: 96%;
  height: 92%;
  padding: 2%;
  padding-top: 4%;
}
</style>

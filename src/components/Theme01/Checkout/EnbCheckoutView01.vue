<template>
  <div class='EnbCheckoutView01'>
    <enb-checkoutItens01>
      <enb-checkoutItem01/>
      <enb-checkoutItem01/>
      <enb-checkoutItem01/>
      <enb-checkoutItem01/>
      <enb-checkoutItem01/>
    </enb-checkoutItens01>
    <enb-checkoutTotal01/>
  </div>
</template>

<script>
import EnbCheckoutItens01 from './EnbCheckoutItens01'
import EnbCheckoutItem01 from './EnbCheckoutItem01'
import EnbCheckoutTotal01 from './EnbCheckoutTotal01'
export default {
  name: 'EnbCheckoutView01',
  components: { EnbCheckoutItens01, EnbCheckoutItem01, EnbCheckoutTotal01 }
}
</script>

<style scoped>
.EnbCheckoutView01 {
  display: flex;
  justify-content: center;
  padding-top: 3%;
}
</style>

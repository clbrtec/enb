<template>
  <div class='EnbCheckout02'>
    <enb-checkoutItens02>
      <enb-checkoutItem02
      v-for="(data, key) in CheckoutItens01"
      :key="key"
      :data="data"
      />
    </enb-checkoutItens02>
    <enb-checkoutTotal02/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import EnbCheckoutItens02 from './EnbCheckoutItens02'
import EnbCheckoutItem02 from './EnbCheckoutItem02'
import EnbCheckoutTotal02 from './EnbCheckoutTotal02'
export default {
  name: 'EnbCheckout02',
  components: { EnbCheckoutItens02, EnbCheckoutItem02, EnbCheckoutTotal02 },
  computed: {
    ...mapGetters(['CheckoutItens01'])
  }
}
</script>

<style scoped>
.EnbCheckout02 {
  width: 80%;
  display: flex;
  justify-content: center;
  padding-top: 8%;
  min-height: 500px;
  margin: auto;
}
</style>

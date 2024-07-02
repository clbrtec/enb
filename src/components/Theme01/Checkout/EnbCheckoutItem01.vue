<template>
  <div class='EnbCheckoutItem01'>
    <div class="cont p">
      <enb-checkoutProd01 :data="data"/>
    </div>
    <div class="cont value">R$ {{ preco }}</div>
    <div class="cont value">
      <checkout-sideQtda01 :data="data"/>
    </div>
    <div class="cont value">R$ {{ subtotal }}</div>
  </div>
</template>

<script>
import EnbCheckoutProd01 from './EnbCheckoutProd01'
import CheckoutSideQtda01 from './CheckoutSideQtda01'
export default {
  name: 'EnbCheckoutItem01',
  components: { EnbCheckoutProd01, CheckoutSideQtda01 },
  props: ['data'],
  computed: {
    preco () {
      return this.data.preco.toFixed(2).replace('.', ',')
    },
    subtotal () {
      return (this.data.preco * this.data.qtda).toFixed(2).replace('.', ',')
    }
  }
}
</script>

<style scoped>
.EnbCheckoutItem01 {
  display: flex;
  border-top: thin solid #CCCCCC;
}

.cont {
  width: 20%;
  padding-top: 2%;
  padding-bottom: 2%;
}

.p {
  width: 40%;
}

.value {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

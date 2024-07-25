<template>
  <div class='ClientCheckout'>
    <checkout-item
    v-for="(i, key) in CheckoutItens01"
    :key="key"
    :data="i"
    />
    <div class="value">
      <div style="text-align: left">SubTotal</div>
      <div style="text-align: right">R$ 2.99</div>
    </div>
    <div class="value total">
      <div style="text-align: left">Total</div>
      <div style="text-align: right">R$ 2.99</div>
    </div>
    <button>FINALIZAR PEDIDO</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CheckoutItem from './CheckoutItem'
export default {
  name: 'ClientCheckout',
  components: { CheckoutItem },
  computed: {
    ...mapGetters(['CheckoutItens01'])
  }
}
</script>

<style scoped>
.ClientCheckout {
  width: 96%;
  height: 92%;
  padding: 2%;
  padding-top: 4%;
}

.value {
  display: flex;
  padding: 4%;
  border-top: thin solid #CCCCCC;
  font-size: 18px;
}

.value div {
  width: 50%;
}

.total {
  font-size: 22px;
}

button {
  border: 0;
  width: 100%;
  height: 12%;
  font-size: 16px;
  border-radius: 8px;
  background-color: #fe5020;
  color: #FFFFFF;
  cursor: pointer;
}
</style>

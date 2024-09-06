<template>
  <div class='EnbCheckoutView01'>
    <enb-checkoutItens01 v-if="CheckoutItens01.length > 0">
      <enb-checkoutItem01
      v-for="(data, key) in CheckoutItens01"
      :key="key"
      :data="data"
      />
    </enb-checkoutItens01>
    <enb-checkoutTotal01 v-if="CheckoutItens01.length > 0"/>
    <enb-empty label="Você ainda não adicionou nenhum produto ao carrinho!" v-if="CheckoutItens01.length <= 0"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import EnbCheckoutItens01 from './EnbCheckoutItens01'
import EnbCheckoutItem01 from './EnbCheckoutItem01'
import EnbCheckoutTotal01 from './EnbCheckoutTotal01'
import EnbEmpty from '../EnbEmpty'
export default {
  name: 'EnbCheckoutView01',
  components: { EnbCheckoutItens01, EnbCheckoutItem01, EnbCheckoutTotal01, EnbEmpty },
  computed: {
    ...mapGetters(['CheckoutItens01'])
  }
}
</script>

<style scoped>
.EnbCheckoutView01 {
  display: flex;
  justify-content: center;
  padding-top: 3%;
  min-height: 420px;
}
</style>

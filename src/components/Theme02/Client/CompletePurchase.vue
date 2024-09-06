<template>
  <div class='CompletePurchase'>
    <div class="block" v-if="CheckoutItens01.length > 0">
      <client-reg/>
    </div>
    <div class="block" v-if="CheckoutItens01.length > 0">
      <client-checkout/>
    </div>
    <enb-empty label="Você não adicionou nenhum produto ao carrinho!" v-if="CheckoutItens01.length <= 0"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ClientReg from './ClientReg'
import ClientCheckout from './ClientCheckout'
import EnbEmpty from '../EnbEmpty'
export default {
  name: 'CompletePurchase',
  components: { ClientReg, ClientCheckout, EnbEmpty },
  computed: {
    ...mapGetters(['CheckoutItens01'])
  }
}
</script>

<style scoped>
.CompletePurchase {
  width: 100%;
  min-height: 500px;
  display: flex;
  justify-content: center;
  padding-top: 6%;
}

.block {
  width: 37%;
  height: 100%;
}
</style>

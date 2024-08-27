<template>
  <div class='EnbCheckoutItem02'>
    <div class="cont p">
      <enb-checkoutProd02 :data="data"/>
    </div>
    <div class="cont value">R$ {{ preco }}</div>
    <div class="cont value">
      <bag-Qtde02 :data="data"/>
    </div>
    <div class="cont value">R$ {{ subtotal }}</div>
  </div>
</template>

<script>
import EnbCheckoutProd02 from './EnbCheckoutProd02'
import BagQtde02 from '../Bag/BagQtde02'
export default {
  name: 'EnbCheckoutItem02',
  components: { EnbCheckoutProd02, BagQtde02 },
  props: ['data'],
  computed: {
    preco () {
      return this.data.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
    },
    subtotal () {
      return (this.data.preco * this.data.qtda).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
    }
  }
}
</script>

<style scoped>
.EnbCheckoutItem02 {
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

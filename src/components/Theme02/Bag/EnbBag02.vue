<template>
  <div class='EnbBag02'>
    <div class="cont-itens">
      <bag-item02
      v-for="(prod, key) in CheckoutItens01"
      :key="key"
      :data="prod"
      />
    </div>
    <div class="cont-btn">
      <button>ver carrinho</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import BagItem02 from './BagItem02'
export default {
  name: 'EnbBag02',
  components: { BagItem02 },
  computed: {
    ...mapGetters(['CheckoutItens01'])
  }
}
</script>

<style scoped>
.EnbBag02 {
  width: 400px;
  height: 300px;
  position: absolute;
  margin-left: -250px;
  margin-top: 350px;
  background-color: #FFFFFF;
  box-shadow: 1px 1px 10px 1px #EEEEEE;
  padding: 1%;
  z-index: 99;
}

.cont-itens {
  height: 87%;
}

button {
  border: 0;
  background-color: #666666;
  font-size: 18px;
  width: 100%;
  padding-top: 2%;
  padding-bottom: 2%;
  cursor: pointer;
  color: #FFFFFF;
}
</style>

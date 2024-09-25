<template>
  <div class='EnbProdutos'>
    <div class="cont-itens">
      <enb-produto
      v-for="(prod, key) in ProdutosTotal01"
      :key="key"
      :data="prod"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import EnbProduto from './Produto/EnbProduto'
export default {
  name: 'EnbProdutos',
  components: { EnbProduto },
  computed: {
    ...mapGetters(['ProdutosTotal01'])
  }
}
</script>

<style scoped>
.EnbProdutos {
  width: 100%;
}

.cont-itens {
  width: 78%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
  padding: 1%;
}
</style>

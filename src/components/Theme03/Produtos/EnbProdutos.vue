<template>
  <div class='EnbProdutos'>
    <div class="cont-itens">
      <enb-produto
      v-for="(prod, key) in Produtos"
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
    ...mapGetters(['ProdutosTotal01', 'ResultFilterCateg']),
    Produtos () {
      return this.$route.path === '/categorias' ? this.ResultFilterCateg : this.ProdutosTotal01
    }
  }
}
</script>

<style scoped>
.EnbProdutos {
  width: 100%;
  padding-bottom: 100px;
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

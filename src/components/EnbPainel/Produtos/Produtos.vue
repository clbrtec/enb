<template>
  <div class='EnbProdutos'>
    <prod-action/>
    <prods-header/>
    <div class="cont-prod">
      <list-item
      v-for="(data, key) in Produtos"
      :key="key"
      :data="data"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ProdsHeader from './Header/ProdsHeader'
import ListItem from './Itens/ListItem'
import ProdAction from './Header/ProdAction'
export default {
  name: 'EnbProdutos',
  components: { ProdsHeader, ListItem, ProdAction },
  computed: {
    ...mapGetters(['ProdutosTotal01', 'StatusProd']),
    Produtos () {
      return this.ProdutosTotal01.filter(p => p.status === this.StatusProd)
    }
  }
}
</script>

<style scoped>
.EnbProdutos {
  width: 100%;
  height: 100%;
}

.cont-prod {
  width: 100%;
  height: 82%;
  padding-bottom: 5%;
  overflow: auto;
}
</style>

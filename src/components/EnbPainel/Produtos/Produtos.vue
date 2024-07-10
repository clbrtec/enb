<template>
  <div class='EnbProdutos'>
    <prods-header/>
    <list-item/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ProdsHeader from './Header/ProdsHeader'
import ListItem from './Itens/ListItem'
export default {
  name: 'EnbProdutos',
  components: { ProdsHeader, ListItem },
  computed: {
    ...mapGetters(['ProdutosTotal01'])
  }
}
</script>

<style scoped>
.EnbProdutos {
  width: 100%;
  height: 100%;
}
</style>

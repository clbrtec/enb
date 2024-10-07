<template>
  <div class='SearchResult'>
    <div class="cont-load" v-if="SearchLoad">
      <enb-sync-loader color="#666666" size="10px"/>
    </div>
    <div class="cont-itens" v-if="!SearchLoad">
      <enb-produto
      v-for="(i, key) in ResultSearch01"
      :key="key"
      :data="i"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import EnbSyncLoader from '../../Spinner/EnbSyncLoader'
import EnbProduto from '../Produtos/Produto/EnbProduto'
export default {
  name: 'SearchResult',
  components: { EnbSyncLoader, EnbProduto },
  computed: {
    ...mapGetters(['ResultSearch01', 'SearchLoad'])
  }
}
</script>

<style scoped>
.SearchResult {
  width: 100%;
  min-height: 510px;
  padding-top: 5%;
}

.cont-itens {
  width: 78%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
  padding: 1%;
}

.cont-load {
  min-height: 510px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

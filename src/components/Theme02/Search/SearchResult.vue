<template>
  <div class='SearchResult'>
    <div class="cont-load" v-if="SearchLoad">
      <enb-sync-loader color="#666666" size="10px"/>
    </div>
    <div class="cont-itens" v-if="!SearchLoad">
      <enb-produto02
      v-for="(i, key) in ResultSearch01"
      :key="key"
      :data="i"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import EnbProduto02 from '../Produtos/EnbProduto02'
import EnbSyncLoader from '../../Spinner/EnbSyncLoader'
export default {
  name: 'SearchResult',
  components: { EnbProduto02, EnbSyncLoader },
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

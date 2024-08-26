<template>
  <div class='EnbProdutos02'>
    <div class="cont-itens">
      <enb-produto02
      v-for="(i, key) in prods"
      :key="key"
      :data="ProdutosTotal01[1]"
      />
    </div>
    <div class="cont-loader">
      <enb-sync-loader color="#666666" size="10px" :loading="load"/>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import EnbProduto02 from './EnbProduto02'
import EnbSyncLoader from '../../Spinner/EnbSyncLoader'
export default {
  name: 'EnbProdutos02',
  components: { EnbProduto02, EnbSyncLoader },
  computed: {
    ...mapGetters(['ProdutosTotal01'])
  },
  props: ['data'],
  data () {
    return {
      prods: 12,
      load: false
    }
  },
  watch: {
    data (n) {
      if (n.scroll.position >= n.scroll.height) {
        this.push()
      }
    }
  },
  methods: {
    push () {
      this.load = true
      setTimeout(() => {
        this.prods = this.prods + 8
        this.load = false
      }, 2000)
    }
  }
}
</script>

<style scoped>
.EnbProdutos02 {
  width: 100%;
  padding-top: 4%;
}

.cont-itens {
  width: 78%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
  padding: 1%;
}

.cont-loader {
  height: 30px;
}
</style>

<template>
  <div class='EnbProduto02'>
    <prod-img02
    :data="data"
    />
    <prod-name02
    :data="data.name"
    />
    <div class="valor-btn">
      <prod-valor02 :data="data"/>
      <prod-btn02 @click="set"/>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import ProdImg02 from './Produto/ProdImg02'
import ProdName02 from './Produto/ProdName02'
import ProdValor02 from './Produto/ProdValor02'
import ProdBtn02 from './Produto/ProdBtn02'
export default {
  name: 'EnbProduto02',
  components: { ProdImg02, ProdName02, ProdValor02, ProdBtn02 },
  props: ['data'],
  methods: {
    ...mapActions(['SetModal01', 'SetItem01']),
    set () {
      this.SetItem01(this.data)
        .then(() => this.SetModal01({ component: 'SelectProduto02', active: true, barText: 'Seleção do produto' }))
    }
  }
}
</script>

<style scoped>
.EnbProduto02 {
  width: 230px;
  height: 300px;
  margin: 1%;
}

.valor-btn {
  width: 95%;
  height: 35px;
  display: flex;
  align-items: center;
  margin: auto;
}

.EnbProduto02:hover {
  box-shadow: 1px 1px 8px 1px #CCCCCC;
}
</style>

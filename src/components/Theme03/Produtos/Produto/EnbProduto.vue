<template>
  <div class='EnbProduto'>
    <enb-prod-img :data="data"/>
    <div class="name">
      {{ data.name }}
    </div>
    <prod-price :data="data"/>
    <btn-imgs/>
    <btn-whats/>
  </div>
</template>

<script>
import EnbProdImg from './EnbProdImg'
import BtnImgs from './BtnImgs'
import ProdPrice from './ProdPrice'
import BtnWhats from './BtnWhats'
export default {
  name: 'EnbProduto',
  components: { EnbProdImg, BtnImgs, ProdPrice, BtnWhats },
  props: ['data']
}
</script>

<style scoped>
.EnbProduto {
  width: 260px;
  height: 410px;
  margin: 1%;
  border: thin solid #CCCCCC;
}

.name {
  height: 40px;
  padding: 2%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

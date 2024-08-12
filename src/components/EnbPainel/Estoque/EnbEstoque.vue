<template>
  <div class='EnbEstoque'>
    <estoque-header/>
    <estoque-variavel
    :data="SelectedProdEdit"
    />
    <input-estoque
    :prod="SelectedProdEdit"
    />
    <var-header v-if="SelectedProdEdit.estoqueVariavel.length"/>
    <var-list
    v-for="(data, key) in SelectedProdEdit.estoqueVariavel"
    :key="key"
    :data="data"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import EstoqueVariavel from './EstoqueVariavel'
import EstoqueHeader from './EstoqueHeader'
import InputEstoque from './InputEstoque'
import VarHeader from './VarHeader'
import VarList from './VarList'
export default {
  name: 'EnbEstoque',
  components: { EstoqueVariavel, EstoqueHeader, InputEstoque, VarHeader, VarList },
  computed: {
    ...mapGetters(['SelectedProdEdit'])
  }
}
</script>

<style scoped>
.EnbEstoque {
  width: 98%;
  height: 98%;
  padding: 1%;
}
</style>

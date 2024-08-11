<template>
  <div class='EnbEstoque'>
    <estoque-header/>
    <estoque-variavel
    :data="SelectedProdEdit"
    />
    <input-estoque
    :prod="SelectedProdEdit"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import EstoqueVariavel from './EstoqueVariavel'
import EstoqueHeader from './EstoqueHeader'
import InputEstoque from './InputEstoque'
export default {
  name: 'EnbEstoque',
  components: { EstoqueVariavel, EstoqueHeader, InputEstoque },
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

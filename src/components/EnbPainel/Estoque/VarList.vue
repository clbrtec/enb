<template>
  <div class='VarList'>
    <div class="cont-var" style="width: 60%; text-align: left">
      <var-value
      v-for="(v, k) in data.src.values"
      :key="k"
      :value="v"
      :ch="k"
      />
    </div>
    <div style="width: 10%">
      {{ data.src.quantidade }}
    </div>
    <div style="width: 20%">
      <update-qtde :data="data"/>
    </div>
    <div style="width: 10%">
      <delete-icon @click="DeleteEstoqueVariavel(data)"/>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import VarValue from './VarValue'
import UpdateQtde from './UpdateQtde'
import DeleteIcon from '../Icons/DeleteIcon'
export default {
  name: 'VarList',
  props: ['data'],
  components: { VarValue, UpdateQtde, DeleteIcon },
  methods: {
    ...mapActions(['DeleteEstoqueVariavel'])
  }
}
</script>

<style scoped>
.VarList {
  display: flex;
  align-items: center;
  padding: 1%;
  border-bottom: thin solid #CCCCCC;
}

.cont-var {
  display: flex;
}
</style>

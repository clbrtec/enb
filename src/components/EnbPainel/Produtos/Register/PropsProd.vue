<template>
  <div class='PropsProd'>
    <div class="header">
      <div class="header-left">Atributos:</div>
    </div>
    <prop-prod
    v-for="(prop, k) in SelectedProdEdit.atributos"
    :key="k"
    :data="prop"
    />
    <prop-prod-reg/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PropProdReg from './PropProdReg'
import PropProd from './PropProd'
export default {
  name: 'PropsProd',
  components: { PropProdReg, PropProd },
  computed: {
    ...mapGetters(['SelectedProdEdit'])
  }
}
</script>

<style scoped>
.PropsProd {
  width: 100%;
  margin-top: 2%;
}

.header {
  display: flex;
  align-items: center;
}

.header-left {
  width: 50%;
  text-align: left;
  padding-left: 5px;
}

.header-right {
  width: 50%;
  text-align: right;
}
</style>

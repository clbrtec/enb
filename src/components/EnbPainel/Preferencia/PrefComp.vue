<template>
  <div class='PrefComp'>
    <div class="label">{{ label }}:</div>
    <div class="cont-select">
      <select-cor label="Cor de fundo" v-model:hexCor="Prefes[comp].corBackground" @update:modelValue="newValue => $emit('update:corBackground', newValue)"/>
      <select-cor label="Cor da fonte" v-model:hexCor="Prefes[comp].corFont" @update:modelValue="newValue => $emit('update:corFont', newValue)"/>
      <select-font-comp :value="Prefes[comp].font" @update:modelValue="newValue => $emit('update:font', newValue)"/>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SelectCor from './SelectCor'
import SelectFontComp from './SelectFontComp'
export default {
  name: 'PrefComp',
  components: { SelectCor, SelectFontComp },
  emits: ['update:corBackground', 'update:corFont', 'update:font'],
  props: {
    label: {
      type: String,
      default: 'Label'
    },
    //com de componente
    comp: {
      type: String,
      default: ''
    }
  },
  computed: {
    ...mapGetters(['Prefes'])
  }
}
</script>

<style scoped>
.PrefComp {
  margin-top: 1.5%;
}

.label {
  text-align: left;
  font-size: 12px;
  margin-left: 5px;
}

.cont-select {
  border: thin solid #CCCCCC;
  border-radius: 5px;
  padding: 1.5%;
  margin-top: 1%;
}
</style>

<template>
  <div class='SelectProp' v-if="data.active">
    <div class="name-prop">
      {{ data.name }}:
    </div>
    <div class="values">
      <prop-value
      v-for="(v, k) in data.values"
      :key="k"
      :chave="k"
      :data="v"
      @update:value="newValue => SelectPropProd({ prop: data, value: newValue })"
      />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import PropValue from './PropValue'
export default {
  name: 'SelectProp',
  components: { PropValue },
  props: ['data'],
  methods: {
    ...mapActions(['SelectPropProd'])
  }
}
</script>

<style scoped>
.name-prop {
  padding-top: 2%;
  text-align: left;
  font-weight: bold;
}

.values {
  display: flex;
  padding-top: 1%;
}
</style>

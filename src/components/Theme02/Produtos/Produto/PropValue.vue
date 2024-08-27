<template>
  <div class='PropValue'
  v-if="data.active"
  :class="{ marginValue: chave > 0, selected: data.selected }"
  @click="$emit('update:value', data)"
  >
    {{ data.name }}
  </div>
</template>

<script>
export default {
  name: 'PropValue',
  props: ['data', 'chave']
}
</script>

<style scoped>
.PropValue {
  padding: 2%;
  background-color: #CCCCCC;
  border-radius: 5px;
  cursor: pointer;
}

.marginValue {
  margin-left: 2%;
}

.selected {
  background-color: #333333;
  color: #FFFFFF
}
</style>

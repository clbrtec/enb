<template>
  <div :class="{ marginLeft: chave > 0 }" class='MultiSelectItem'>
    item
  </div>
</template>

<script>
export default {
  name: 'MultiSelectItem',
  props: ['data', 'chave']
}
</script>

<style scoped>
.MultiSelectItem {
  background-color: #EEEEEE;
  padding: 0.6%;
  border-radius: 5px;
  border: thin solid #CCCCCC;
}

.marginLeft {
  margin-left: 1%;
}
</style>

<template>
  <div :class="{ marginLeft: ch > 0 }" class='VarValue'>
    {{ value.name }}: {{ value.value }}
  </div>
</template>

<script>
export default {
  name: 'VarValue',
  props: ['value', 'ch']
}
</script>

<style scoped>
.VarValue {
  min-width: 10%;
  border: thin solid #CCCCCC;
  background-color: #EEEEEE;
  border-radius: 3px;
  padding: 1%;
}

.marginLeft {
  margin-left: 1%;
}
</style>

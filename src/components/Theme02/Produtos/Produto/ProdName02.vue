<template>
  <div class='ProdName02'>
    {{ data }}
  </div>
</template>

<script>
export default {
  name: 'ProdName02',
  props: ['data']
}
</script>

<style scoped>
.ProdName02 {
  width: 90%;
  height: 35px;
  margin: auto;
  font-size: 14px;
  text-align: left;
}
</style>

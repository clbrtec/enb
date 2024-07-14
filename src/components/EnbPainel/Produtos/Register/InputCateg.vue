<template>
  <div class='InputCateg'>
    <input type="checkbox">
    <label>{{ data }}</label>
  </div>
</template>

<script>
export default {
  name: 'InputCateg',
  props: ['data']
}
</script>

<style scoped>
.InputCateg {
  display: flex;
  padding: 2%;
}

label {
  padding-left: 2%;
}
</style>

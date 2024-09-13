<template>
  <div class='EnbButton'>
    <button>{{ label }}</button>
  </div>
</template>

<script>
export default {
  name: 'EnbButton',
  props: {
    label: {
      type: String,
      default: 'Button'
    }
  }
}
</script>

<style scoped>
button {
  border: 0;
  background-color: #333333;
  padding: 7%;
  cursor: pointer;
  color: #FFFFFF;
}
</style>

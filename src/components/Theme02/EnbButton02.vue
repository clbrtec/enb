<template>
  <div class='EnbButton02'>
    <button>{{ label }}</button>
  </div>
</template>

<script>
export default {
  name: 'EnbButton02',
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
  padding: 4%;
  cursor: pointer;
  color: #FFFFFF;
}
</style>

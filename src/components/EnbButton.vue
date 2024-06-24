<template>
  <div class='EnbButton'>
    <button>{{ text }}</button>
  </div>
</template>

<script>
export default {
  name: 'EnbButton',
  props: {
    text: {
      type: String,
      default: 'Button'
    },
    options: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style scoped>
.EnbButton {
  padding-top: 2%
}

button {
  border: 0;
  padding: 3%;
  width: 100px;
  border-radius: 2px;
  background-color: #648EEA;
  color: #FFFFFF;
  font-size: 16px;
}
</style>

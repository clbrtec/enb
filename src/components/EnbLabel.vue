<template>
  <div class='EnbLabel' :style="config">
    {{ text }}
  </div>
</template>

<script>
export default {
  name: 'EnbLabel',
  props: {
    text: {
      type: String,
      default: 'Label'
    },
    config: {
      type: String,
      default: ''
    } 
  }
}
</script>

<style scoped>
.EnbLabel {
  padding: 1%;
}
</style>

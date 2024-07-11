<template>
  <div class='InputReg' :style="cont">
    <div class="label" :style="label">
      {{ text }}
    </div>
    <input type="text" :style="input">
  </div>
</template>

<script>
export default {
  name: 'InputReg',
  props: {
    cont: {
      type: Object,
      default: () => ({})
    },
    label: {
      type: Object,
      default: () => ({})
    },
    input: {
      type: Object,
      default: () => ({})
    },
    text: {
      type: String,
      default: 'Label'
    }
  }
}
</script>

<style scoped>
.label {
  font-size: 12px;
  margin-bottom: 5px;
}

input:focus {
  outline: none;
}
</style>

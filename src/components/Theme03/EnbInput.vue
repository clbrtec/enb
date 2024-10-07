<template>
  <div class='EnbInput' :style="cont">
    <input :value="value" @input="e => $emit('update:modelValue', e.target.value)" :type="type" :placeholder="label" :style="input">
  </div>
</template>

<script>
export default {
  name: 'EnbInput',
  emits: ['update:modelValue'],
  props: {
    label: {
      type: String,
      default: 'Label'
    },
    cont: {
      type: Object,
      default: () => ({})
    },
    input: {
      type: Object,
      default: () => ({})
    },
    type: {
      type: String,
      default: 'text'
    },
    value: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.EnbInput {
  width: 100%;
}

input {
  border: 0;
  background-color: transparent;
  border-bottom: thin solid #CCCCCC;
  padding: 2%;
  font-size: 14px;
}

input:focus {
  outline: none;
  background-color: transparent;
}
</style>

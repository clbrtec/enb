<template>
  <div class='InputReg' :style="cont">
    <div class="label" :style="label">
      {{ text }}:
    </div>
    <input
    :type="type"
    :style="input"
    :value="value"
    @input="$emit('update:modelValue', $event.target.value)"
    >
  </div>
</template>

<script>
export default {
  name: 'InputReg',
  emits: ['update:modelValue'],
  props: {
    value: {
      type: String,
      default: ''
    },
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
    },
    type: {
      type: String,
      default: 'text'
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

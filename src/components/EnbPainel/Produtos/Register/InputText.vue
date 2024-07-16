<template>
  <div class='InputText' :style="cont">
    <div :style="label" class="label">{{ text }}:</div>
    <textarea
    @input="$emit('update:modelValue', $event.target.value)"
    :style="input"
    cols="30" rows="10">
    </textarea>
  </div>
</template>

<script>
export default {
  name: 'InputText',
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
    }
  }
}
</script>

<style scoped>
.label {
  font-size: 12px;
  margin-bottom: 5px;
}

textarea:focus {
  outline: none;
}
</style>

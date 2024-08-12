<template>
  <div class='InputSelect' :style="cont">
    <div class="label" :style="label">
      {{ text }}:
    </div>
    <select @change="e => $emit('update:modelValue', e.target.value)" :style="input">
      <option>
      </option>
      <option
      v-for="(d, key) in data"
      :key="key"
      :value="d.name"
      :selected="value === d.name"
      >
        {{ d.name }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'InputSelect',
  emits: ['update:modelValue'],
  props: {
    data: {
      type: Array,
      default: () => ([])
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
    value: {
      type: String,
      default: ''
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

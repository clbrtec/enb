<template>
  <div class='InputSelect' :style="cont">
    <div class="label" :style="label">
      {{ text }}
    </div>
    <select :style="input">
      <option
      v-for="(d, key) in data"
      :key="key"
      value=""
      >
        {{ d }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'InputSelect',
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

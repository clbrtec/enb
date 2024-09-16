<template>
  <div class='EnbInput' :style="cont">
    <input :type="type" :placeholder="label" :style="input">
  </div>
</template>

<script>
export default {
  name: 'EnbInput',
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

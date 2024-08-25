<template>
  <div class='EnbInput02' :style="cont">
    <input @input="e => $emit('update:modelValue', e.target.value)" :placeholder="label" :type="type" :style="input">
  </div>
</template>

<script>
export default {
  name: 'EnbInput02',
  props: {
    cont: {
      type: Object,
      default: () => ({})
    },
    input: {
      type: Object,
      default: () => ({})
    },
    label: {
      type: String,
      default: 'Label'
    },
    type: {
      type: String,
      default: 'text'
    }
  },
  emits: ['update:modelValue']
}
</script>

<style scoped>
.EnbInput02 {
  width: 80%;
  margin: auto;
}

input {
  border: 0;
  font-size: 16px;
  padding: 2%;
  width: 96%;
  background-color: #EEEEEE;
}

input:focus {
  outline: none;
}

::-webkit-input-placeholder { /* Chrome/Opera/Safari */
  font-size: 14px;
}
::-moz-placeholder { /* Firefox 19+ */
  font-size: 14px;
}
:-ms-input-placeholder { /* IE 10+ */
  font-size: 14px;
}
</style>

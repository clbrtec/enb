<template>
  <div class="EnbInput" :style="options.contStyle">
    <label v-if="options.label" :style="options.styleLabel">
      {{ options.label }}:
    </label>
    <form autocomplete="off">
      <input :disabled="disabled" :type="options.type" v-model="value" :style="options.style" :placeholder="options.placeholder">
    </form>
  </div>
</template>

<script>
export default {
  name: 'EnbInput',
  props: {
    options: {
      type: Object,
      default: () => ({
        key: '*',
        label: 'label',
        type: 'text',
        style: {},
        contStyle: {},
        styleLabel: {},
        placeholder: ''
      })
    },
    clear: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    focus: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      value: ''
    }
  },
  watch: {
    value (nv) {
      this.$emit('returnValue', { key: this.options.key, value: nv })
    },
    clear () {
      this.value = ''
    }
  }
}
</script>

<style scoped>
.EnbInput {
  width: 100%;
  margin: auto;
  margin-bottom: 2%;
}
label {
  display: block;
  padding: 2%;
  text-align: left;
}
input {
  width: 91%;
  font-size: 20px;
  padding: 3%;
  border: thin solid #CCC;
  border-radius: 5px;
}
input:focus {
  outline: none;
}
@media (max-width: 700px) {
}
</style>
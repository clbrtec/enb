<template>
  <div class='SelectCor'>
    <div class="label-color">
      {{ label }}
    </div>
    <div class="btn">
      <color-picker
      format="hex"
      :pure-color="hexCor"
      @pure-color-change="(c) => $emit('update:modelValue', c)"
      pickerType="chrome"
      />
    </div>
  </div>
</template>

<script>
import { ColorPicker } from "vue3-colorpicker"
import "vue3-colorpicker/style.css"
export default {
  name: 'SelectCor',
  components: { ColorPicker },
  props: ['label', 'hexCor'],
  emits: ['update:modelValue'],
  data () {
    return {
      pureColor: '#000000'
    }
  }
}
</script>

<style scoped>
.SelectCor {
  display: flex;
  justify-content: end;
  align-items: center;
  border-bottom: thin solid #CCCCCC;
  padding-top: 1%;
  padding-bottom: 1%;
}

.label-color {
  width: 100%;
  text-align: left;
}

.btn {
  width: 30px;
  overflow: hidden;
}
</style>

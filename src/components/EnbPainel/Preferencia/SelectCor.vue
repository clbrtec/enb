<template>
  <div class='SelectCor'>
    <div class="label-color">
      label color
    </div>
    <div class="btn">
      <color-picker
      format="hex"
      v-model:pureColor="pureColor"
      @pure-color-change="(c) => console.log(c)"
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
  data () {
    return {
      pureColor: '#CCCCCC'
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

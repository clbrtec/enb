<template>
  <div class='PrefComp'>
    <div class="label">{{ label }}:</div>
    <div class="cont-select">
      <select-cor/>
    </div>
  </div>
</template>

<script>
import SelectCor from './SelectCor'
export default {
  name: 'PrefComp',
  components: { SelectCor },
  props: {
    label: {
      type: String,
      default: 'Label'
    }
  }
}
</script>

<style scoped>
.PrefComp {
  margin-top: 1.5%;
}

.label {
  text-align: left;
  font-size: 12px;
  margin-left: 5px;
}

.cont-select {
  border: thin solid #CCCCCC;
  border-radius: 5px;
  padding: 1.5%;
  margin-top: 1%;
}
</style>

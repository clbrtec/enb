<template>
  <div class='InputCrono'>
    <label>De</label>
    <VueDatePicker :model-value="date1" @update:internal-model-value="handleDate"></VueDatePicker>
    <label>Até</label>
    <VueDatePicker v-model="date2"></VueDatePicker>
  </div>
</template>

<script>
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
export default {
  name: 'InputCrono',
  components: { VueDatePicker },
  data () {
    return {
      date1: null,
      date2: null
    }
  },
  methods: {
    handleDate (modelValue) {
      alert(modelValue)
    }
  }
}
</script>

<style scoped>
.InputCrono {
  display: flex;
  align-items: center;
}

label {
  font-size: 12px;
  padding: 2%;
}
</style>

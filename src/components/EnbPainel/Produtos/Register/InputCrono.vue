<template>
  <div class='InputCrono'>
    <VueDatePicker v-model="date1"></VueDatePicker>
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
  }
}
</script>

<style scoped>
.InputCrono {
  display: flex;
}
</style>

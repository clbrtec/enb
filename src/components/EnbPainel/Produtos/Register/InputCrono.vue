<template>
  <div class='InputCrono'>
    <div class="datepicker date1">
      <div class="label">A partir de</div>
      <VueDatePicker
      teleport-center
      locale="pt-br"
      select-text="Selecionar"
      cancel-text="Cancelar"
      :model-value="SelectedProdEdit.dateOfertaStart"
      @update:model-value="newValue => ChangeProdEdit({ dateOfertaStart: newValue })">
      </VueDatePicker>
    </div>
    <div class="datepicker date2">
      <div class="label">Até</div>
      <VueDatePicker
      teleport-center
      locale="pt-br"
      select-text="Selecionar"
      cancel-text="Cancelar"
      :model-value="SelectedProdEdit.dateOfertaEnd"
      @update:model-value="newValue => ChangeProdEdit({ dateOfertaEnd: newValue })">
      </VueDatePicker>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
export default {
  name: 'InputCrono',
  components: { VueDatePicker },
  computed: {
    ...mapGetters(['SelectedProdEdit'])
  },
  data () {
    return {
      date1: null,
      date2: null
    }
  },
  methods: {
    ...mapActions(['ChangeProdEdit']),
    handleDate1 (modelValue) {
      this.date1 = modelValue
    },
    handleDate2 (modelValue) {
      this.date2 = modelValue
    }
  }
}
</script>

<style scoped>
.InputCrono {
  width: 100%;
  display: flex;
  align-items: center;
}

.datepicker {
  width: 50%;
  padding: 1%;
}

.date1 {
  padding-left: 0;
}

.label {
  width: 50%;
  text-align: left;
  font-size: 12px;
  padding-left: 3px;
  margin-bottom: 5px;
}
</style>

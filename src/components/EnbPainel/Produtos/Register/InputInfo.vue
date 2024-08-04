<template>
  <div class='InputInfo'>
    <input-reg
    :value="SelectedProdEdit.name"
    @update:model-value="newValue => ChangeProdEdit({ name: newValue })"
    text="Nome do produto"
    :cont="{ textAlign: 'left' }"
    :label="{ marginLeft: '3px' }"
    :input="{ fontSize: '26px', padding: '1.5%', width: '96%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
    />
    <div style="display: flex">
      <input-reg
      :value="SelectedProdEdit.preco"
      @update:model-value="newValue => ChangeProdEdit({ preco: parseFloat(newValue.replace(',', '.')) })"
      text="Preço (R$)"
      :cont="{ textAlign: 'left' }"
      :label="{ marginLeft: '3px', marginTop: '8px' }"
      :input="{ textAlign: 'right', fontSize: '26px', padding: '1.5%', width: '90%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
      />
      <input-reg
      :value="SelectedProdEdit.oferta"
      @update:model-value="newValue => ChangeProdEdit({ oferta: parseFloat(newValue.replace(',', '.')) })"
      text="Preço de oferta (R$)"
      :cont="{ textAlign: 'left' }"
      :label="{ marginLeft: '3px', marginTop: '8px' }"
      :input="{ textAlign: 'right', fontSize: '26px', padding: '1.5%', width: '93%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
      />
      <div class="crono">
        <crono-icon @click="showCrono=!showCrono"/>
      </div>
    </div>
    <input-crono v-if="showCrono"/>
    <input-text
    :value="SelectedProdEdit.descricao"
    @update:model-value="newValue => ChangeProdEdit({ descricao: newValue })"
    text="Descrição do produto"
    :label="{ textAlign: 'left', marginLeft: '3px', marginTop: '5px' }"
    :input="{ padding: '2%', fontSize: '18px', width: '95%', border: 'thin solid #CCC', borderRadius: '5px' }"
    />
    <div>
      <visib-prod/>
      <estoque-prod/>
      <props-prod v-if="SelectedProdEdit.tipo === 'Variável'"/>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import InputReg from './InputReg'
import CronoIcon from '../../Icons/CronoIcon'
import InputCrono from './InputCrono'
import InputText from './InputText'
import VisibProd from './VisibProd'
import EstoqueProd from './EstoqueProd'
import PropsProd from './PropsProd'
export default {
  name: 'InputInfo',
  components: { InputReg, CronoIcon, InputCrono, InputText, VisibProd, EstoqueProd, PropsProd },
  methods: {
    ...mapActions(['ChangeProdEdit'])
  },
  data () {
    return {
      showCrono: false,
      form: {
        name: ''
      }
    }
  },
  computed: {
    ...mapGetters(['SelectedProdEdit'])
  }
}
</script>

<style scoped>
.InputInfo {
  width: 75%;
}

.crono {
  display: flex;
  justify-content: end;
  align-items: end;
}
</style>

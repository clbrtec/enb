<template>
  <div class='InputInfo'>
    <input-reg
    text="Nome do produto"
    :cont="{ textAlign: 'left' }"
    :label="{ marginLeft: '3px' }"
    :input="{ fontSize: '26px', padding: '1.5%', width: '96%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
    />
    <div style="display: flex">
      <input-reg
      text="Preço (R$)"
      :cont="{ textAlign: 'left' }"
      :label="{ marginLeft: '3px', marginTop: '8px' }"
      :input="{ fontSize: '26px', padding: '1.5%', width: '90%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
      />
      <input-reg
      text="Preço de oferta (R$)"
      :cont="{ textAlign: 'left' }"
      :label="{ marginLeft: '3px', marginTop: '8px' }"
      :input="{ fontSize: '26px', padding: '1.5%', width: '93%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
      />
      <div class="crono">
        <crono-icon @click="showCrono=!showCrono"/>
      </div>
    </div>
    <input-crono v-if="showCrono"/>
    <input-text
    text="Descrição do produto"
    :label="{ textAlign: 'left', marginLeft: '3px' }"
    :input="{ padding: '2%', fontSize: '18px', width: '95%', border: 'thin solid #CCC', borderRadius: '5px' }"
    />
  </div>
</template>

<script>
import InputReg from './InputReg'
import CronoIcon from '../../Icons/CronoIcon'
import InputCrono from './InputCrono'
import InputText from './InputText'
export default {
  name: 'InputInfo',
  components: { InputReg, CronoIcon, InputCrono, InputText },
  data () {
    return {
      showCrono: false
    }
  }
}
</script>

<style scoped>
.InputInfo {
  width: 50%;
}

.crono {
  display: flex;
  justify-content: end;
  align-items: end;
}
</style>

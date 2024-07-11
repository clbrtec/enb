<template>
  <div class='InputCrono'>
    <input-reg
    text="Apartir de"
    :cont="{ textAlign: 'left' }"
    :label="{ marginLeft: '3px', marginTop: '2px' }"
    :input="{ fontSize: '26px', padding: '1.5%', width: '90%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
    />
    <input-reg
    text="Até"
    :cont="{ textAlign: 'left' }"
    :label="{ marginLeft: '3px', marginTop: '2px' }"
    :input="{ fontSize: '26px', padding: '1.5%', width: '95%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
    />
  </div>
</template>

<script>
import InputReg from './InputReg'
export default {
  name: 'InputCrono',
  components: { InputReg }
}
</script>

<style scoped>
.InputCrono {
  display: flex;
}
</style>

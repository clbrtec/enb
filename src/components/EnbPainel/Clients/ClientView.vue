<template>
  <div class='ClientView'>
    <div class="title">
      {{ ClientView.nome }} {{ ClientView.sobrenome }} ({{ ClientView.email }})
    </div>
    <div class="block">
      <input-reg
      disabled
      :value="ClientView.usuario"
      text="Usuário"
      :cont="{ width: '50%' }"
      :label="{ textAlign: 'left', marginLeft: '2%' }"
      :input="{ fontSize: '20px', padding: '1.5%', width: '94%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
      />
      <input-reg
      disabled
      :value="ClientView.email"
      text="Email"
      :cont="{ width: '50%' }"
      :label="{ textAlign: 'left', marginLeft: '2%' }"
      :input="{ fontSize: '20px', padding: '1.5%', width: '94%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
      />
    </div>
    <div class="block">
      <input-reg
      disabled
      :value="ClientView.nome"
      text="Primeiro nome"
      :cont="{ width: '50%' }"
      :label="{ textAlign: 'left', marginLeft: '2%' }"
      :input="{ fontSize: '20px', padding: '1.5%', width: '94%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
      />
      <input-reg
      disabled
      :value="ClientView.sobrenome"
      text="Sobrenome"
      :cont="{ width: '50%' }"
      :label="{ textAlign: 'left', marginLeft: '2%' }"
      :input="{ fontSize: '20px', padding: '1.5%', width: '94%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
      />
    </div>
    <div class="block">
      <input-reg
      disabled
      :value="ClientView.cep"
      text="CEP"
      :cont="{ width: '30%', paddingLeft: '0.6%' }"
      :label="{ textAlign: 'left', marginLeft: '1%' }"
      :input="{ fontSize: '20px', padding: '2.4%', width: '94%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
      />
      <input-reg
      disabled
      :value="ClientView.endereco"
      text="Endereço"
      :cont="{ width: '50%' }"
      :label="{ textAlign: 'left', marginLeft: '3%' }"
      :input="{ fontSize: '20px', padding: '1.5%', width: '92%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
      />
      <input-reg
      disabled
      :value="ClientView.numero"
      text="Número"
      :cont="{ width: '18.5%' }"
      :label="{ textAlign: 'left', marginLeft: '2%' }"
      :input="{ fontSize: '20px', padding: '4%', width: '92%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
      />
    </div>
    <div class="block">
      <input-reg
      disabled
      :value="ClientView.cidade"
      text="Cidade"
      :cont="{ width: '50%' }"
      :label="{ textAlign: 'left', marginLeft: '2%' }"
      :input="{ fontSize: '20px', padding: '1.5%', width: '94%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
      />
      <input-reg
      disabled
      :value="ClientView.uf"
      text="Estado(UF)"
      :cont="{ width: '50%' }"
      :label="{ textAlign: 'left', marginLeft: '2%' }"
      :input="{ fontSize: '20px', padding: '1.5%', width: '94%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import InputReg from '../Produtos/Register/InputReg'
export default {
  name: 'ClientView',
  components: { InputReg },
  computed: {
    ...mapGetters(['ClientView'])
  }
}
</script>

<style scoped>
.title {
  display: flex;
  padding: 1.5%;
  font-size: 22px;
}

.block {
  display: flex;
  padding: 0.5%;
}
</style>

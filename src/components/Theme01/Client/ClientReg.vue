<template>
  <div class='ClientReg'>
    <div class="title">
      Informações
    </div>
    <div class="login">
      Já é cliente? 
      <span
      @click="SetModal01({ component: 'EnbLogin01', active: true })"
      class="link-login">
        Clique aqui para entrar
      </span>
    </div>
    <div>
      <input-reg
      text="Usuários"
      :cont="{ width: '100%' }"
      :label="{ textAlign: 'left', marginLeft: '2%', marginTop: '5px' }"
      :input="{ fontSize: '20px', padding: '1.5%', width: '94%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
      />
    </div>
    <div>
      <input-reg
      text="Primeiro nome"
      :cont="{ width: '100%' }"
      :label="{ textAlign: 'left', marginLeft: '2%', marginTop: '5px' }"
      :input="{ fontSize: '20px', padding: '1.5%', width: '94%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
      />
    </div>
    <div>
      <input-reg
      text="Sobrenome"
      :cont="{ width: '100%' }"
      :label="{ textAlign: 'left', marginLeft: '2%', marginTop: '5px' }"
      :input="{ fontSize: '20px', padding: '1.5%', width: '94%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
      />
    </div>
    <div style="display: flex; justify-content: center">
      <input-reg
      text="CPF"
      :cont="{ width: '48.5%' }"
      :label="{ textAlign: 'left', marginLeft: '2%', marginTop: '5px' }"
      :input="{ fontSize: '20px', padding: '2.5%', width: '95%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
      />
      <input-reg
      text="CEP"
      :cont="{ width: '47%', paddingLeft: '2%' }"
      :label="{ textAlign: 'left', marginLeft: '2%', marginTop: '5px' }"
      :input="{ fontSize: '20px', padding: '2.5%', width: '95%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
      />
    </div>
    <div>
      <input-reg
      text="Endereço"
      :cont="{ width: '100%' }"
      :label="{ textAlign: 'left', marginLeft: '2%', marginTop: '5px' }"
      :input="{ fontSize: '20px', padding: '1.5%', width: '94%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
      />
    </div>
    <div style="display: flex; justify-content: center">
      <input-reg
      text="Bairro"
      :cont="{ width: '48.5%' }"
      :label="{ textAlign: 'left', marginLeft: '2%', marginTop: '5px' }"
      :input="{ fontSize: '20px', padding: '2.5%', width: '95%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
      />
      <input-reg
      text="Número"
      :cont="{ width: '47%', paddingLeft: '2%' }"
      :label="{ textAlign: 'left', marginLeft: '2%', marginTop: '5px' }"
      :input="{ fontSize: '20px', padding: '2.5%', width: '95%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
      />
    </div>
    <div>
      <input-reg
      text="Cidade"
      :cont="{ width: '100%' }"
      :label="{ textAlign: 'left', marginLeft: '2%', marginTop: '5px' }"
      :input="{ fontSize: '20px', padding: '1.5%', width: '94%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
      />
    </div>
    <div style="display: flex; justify-content: center">
      <input-reg
      text="Estado(UF)"
      :cont="{ width: '48.5%' }"
      :label="{ textAlign: 'left', marginLeft: '2%', marginTop: '5px' }"
      :input="{ fontSize: '20px', padding: '2.5%', width: '95%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
      />
      <input-reg
      text="Celular"
      :cont="{ width: '47%', paddingLeft: '2%' }"
      :label="{ textAlign: 'left', marginLeft: '2%', marginTop: '5px' }"
      :input="{ fontSize: '20px', padding: '2.5%', width: '95%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
      />
    </div>
    <div>
      <input-reg
      text="Endereço de email"
      :cont="{ width: '100%' }"
      :label="{ textAlign: 'left', marginLeft: '2%', marginTop: '5px' }"
      :input="{ fontSize: '20px', padding: '1.5%', width: '94%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
      />
    </div>
    <div style="display: flex; justify-content: center">
      <input-reg
      text="Senha"
      type="password"
      :cont="{ width: '48.5%' }"
      :label="{ textAlign: 'left', marginLeft: '2%', marginTop: '5px' }"
      :input="{ fontSize: '20px', padding: '2.5%', width: '95%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
      />
      <input-reg
      text="Confirmar senha"
      type="password"
      :cont="{ width: '47%', paddingLeft: '2%' }"
      :label="{ textAlign: 'left', marginLeft: '2%', marginTop: '5px' }"
      :input="{ fontSize: '20px', padding: '2.5%', width: '95%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
      />
    </div>
    <div>
      <input-text
      text="Informações adicionais"
      :label="{ textAlign: 'left', marginLeft: '10px', marginTop: '5px' }"
      :input="{ padding: '2%', fontSize: '16px', width: '93%', border: 'thin solid #CCC', borderRadius: '5px' }"
      />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import InputReg from '@/components/EnbPainel/Produtos/Register/InputReg'
import InputText from '@/components/EnbPainel/Produtos/Register/InputText'
export default {
  name: 'ClientReg',
  components: { InputReg, InputText },
  methods: {
    ...mapActions(['SetModal01'])
  }
}
</script>

<style scoped>
.ClientReg {
  padding: 3%;
}

.title {
  font-size: 22px;
}

.login {
  width: 93%;
  border: thin solid #007cba;
  border-radius: 5px;
  padding: 2%;
  margin: auto;
  margin-top: 2%;
}

.link-login {
  cursor: pointer;
  color: #007cba;
}
</style>

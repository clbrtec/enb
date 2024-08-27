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
      :value="SelectedClientEdit.usuario"
      @update:model-value="newValue => ChangeClientEdit({ usuario: newValue })"
      text="Usuários"
      :cont="{ width: '100%' }"
      :label="{ textAlign: 'left', marginLeft: '2%', marginTop: '5px' }"
      :input="{ fontSize: '20px', padding: '1.5%', width: '94%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
      />
    </div>
    <div>
      <input-reg
      :value="SelectedClientEdit.nome"
      @update:model-value="newValue => ChangeClientEdit({ nome: newValue })"
      text="Primeiro nome"
      :cont="{ width: '100%' }"
      :label="{ textAlign: 'left', marginLeft: '2%', marginTop: '5px' }"
      :input="{ fontSize: '20px', padding: '1.5%', width: '94%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
      />
    </div>
    <div>
      <input-reg
      :value="SelectedClientEdit.sobrenome"
      @update:model-value="newValue => ChangeClientEdit({ sobrenome: newValue })"
      text="Sobrenome"
      :cont="{ width: '100%' }"
      :label="{ textAlign: 'left', marginLeft: '2%', marginTop: '5px' }"
      :input="{ fontSize: '20px', padding: '1.5%', width: '94%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
      />
    </div>
    <div style="display: flex; justify-content: center">
      <input-reg
      :value="SelectedClientEdit.cpf"
      @update:model-value="newValue => ChangeClientEdit({ cpf: newValue })"
      text="CPF"
      :cont="{ width: '48.5%' }"
      :label="{ textAlign: 'left', marginLeft: '2%', marginTop: '5px' }"
      :input="{ fontSize: '20px', padding: '2.5%', width: '95%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
      />
      <input-reg
      :value="SelectedClientEdit.cep"
      @update:model-value="newValue => ChangeClientEdit({ cep: newValue })"
      text="CEP"
      :cont="{ width: '47%', paddingLeft: '2%' }"
      :label="{ textAlign: 'left', marginLeft: '2%', marginTop: '5px' }"
      :input="{ fontSize: '20px', padding: '2.5%', width: '95%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
      />
    </div>
    <div>
      <input-reg
      :value="SelectedClientEdit.endereco"
      @update:model-value="newValue => ChangeClientEdit({ endereco: newValue })"
      text="Endereço"
      :cont="{ width: '100%' }"
      :label="{ textAlign: 'left', marginLeft: '2%', marginTop: '5px' }"
      :input="{ fontSize: '20px', padding: '1.5%', width: '94%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
      />
    </div>
    <div style="display: flex; justify-content: center">
      <input-reg
      :value="SelectedClientEdit.bairro"
      @update:model-value="newValue => ChangeClientEdit({ bairro: newValue })"
      text="Bairro"
      :cont="{ width: '48.5%' }"
      :label="{ textAlign: 'left', marginLeft: '2%', marginTop: '5px' }"
      :input="{ fontSize: '20px', padding: '2.5%', width: '95%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
      />
      <input-reg
      :value="SelectedClientEdit.numero"
      @update:model-value="newValue => ChangeClientEdit({ numero: newValue })"
      text="Número"
      :cont="{ width: '47%', paddingLeft: '2%' }"
      :label="{ textAlign: 'left', marginLeft: '2%', marginTop: '5px' }"
      :input="{ fontSize: '20px', padding: '2.5%', width: '95%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
      />
    </div>
    <div>
      <input-reg
      :value="SelectedClientEdit.cidade"
      @update:model-value="newValue => ChangeClientEdit({ cidade: newValue })"
      text="Cidade"
      :cont="{ width: '100%' }"
      :label="{ textAlign: 'left', marginLeft: '2%', marginTop: '5px' }"
      :input="{ fontSize: '20px', padding: '1.5%', width: '94%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
      />
    </div>
    <div style="display: flex; justify-content: center">
      <input-reg
      :value="SelectedClientEdit.uf"
      @update:model-value="newValue => ChangeClientEdit({ uf: newValue })"
      text="Estado(UF)"
      :cont="{ width: '48.5%' }"
      :label="{ textAlign: 'left', marginLeft: '2%', marginTop: '5px' }"
      :input="{ fontSize: '20px', padding: '2.5%', width: '95%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
      />
      <input-reg
      :value="SelectedClientEdit.celular"
      @update:model-value="newValue => ChangeClientEdit({ celular: newValue })"
      text="Celular"
      :cont="{ width: '47%', paddingLeft: '2%' }"
      :label="{ textAlign: 'left', marginLeft: '2%', marginTop: '5px' }"
      :input="{ fontSize: '20px', padding: '2.5%', width: '95%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
      />
    </div>
    <div>
      <input-reg
      :value="SelectedClientEdit.email"
      @update:model-value="newValue => ChangeClientEdit({ email: newValue })"
      text="Endereço de email"
      :cont="{ width: '100%' }"
      :label="{ textAlign: 'left', marginLeft: '2%', marginTop: '5px' }"
      :input="{ fontSize: '20px', padding: '1.5%', width: '94%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
      />
    </div>
    <div style="display: flex; justify-content: center">
      <input-reg
      :value="SelectedClientEdit.senha"
      @update:model-value="newValue => ChangeClientEdit({ senha: newValue })"
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
import { mapGetters, mapActions } from 'vuex'
import InputReg from '@/components/EnbPainel/Produtos/Register/InputReg'
import InputText from '@/components/EnbPainel/Produtos/Register/InputText'
export default {
  name: 'ClientReg',
  components: { InputReg, InputText },
  computed: {
    ...mapGetters(['SelectedClientEdit'])
  },
  methods: {
    ...mapActions(['SetModal01', 'ChangeClientEdit'])
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

<template>
  <div class='RegisterClient'>
    <div class="btn-add">
      <button
      v-if="$route.path !== '/painel/client/edit'"
      @click="push"
      >
      Adicionar
    </button>
    </div>
    <div class="block">
      <input-reg
      :value="SelectedClientEdit.usuario"
      @update:model-value="newValue => ChangeClientEdit({ usuario: newValue })"
      text="Usuário"
      :cont="{ width: '50%' }"
      :label="{ textAlign: 'left', marginLeft: '2%' }"
      :input="{ fontSize: '20px', padding: '1.5%', width: '94%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
      />
      <input-reg
      :value="SelectedClientEdit.email"
      @update:model-value="newValue => ChangeClientEdit({ email: newValue })"
      text="Email"
      :cont="{ width: '50%' }"
      :label="{ textAlign: 'left', marginLeft: '2%' }"
      :input="{ fontSize: '20px', padding: '1.5%', width: '94%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
      />
    </div>
    <div class="block">
      <input-reg
      :value="SelectedClientEdit.nome"
      @update:model-value="newValue => ChangeClientEdit({ nome: newValue })"
      text="Primeiro nome"
      :cont="{ width: '50%' }"
      :label="{ textAlign: 'left', marginLeft: '2%' }"
      :input="{ fontSize: '20px', padding: '1.5%', width: '94%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
      />
      <input-reg
      :value="SelectedClientEdit.sobrenome"
      @update:model-value="newValue => ChangeClientEdit({ sobrenome: newValue })"
      text="Sobrenome"
      :cont="{ width: '50%' }"
      :label="{ textAlign: 'left', marginLeft: '2%' }"
      :input="{ fontSize: '20px', padding: '1.5%', width: '94%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
      />
    </div>
    <div class="block">
      <input-reg
      :value="SelectedClientEdit.cep"
      @update:model-value="newValue => ChangeClientEdit({ cep: newValue })"
      text="CPF"
      :cont="{ width: '30%', paddingLeft: '0.6%' }"
      :label="{ textAlign: 'left', marginLeft: '1%' }"
      :input="{ fontSize: '20px', padding: '2.4%', width: '94%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
      />
      <input-reg
      :value="SelectedClientEdit.endereco"
      @update:model-value="newValue => ChangeClientEdit({ endereco: newValue })"
      text="Celular"
      :cont="{ width: '50%' }"
      :label="{ textAlign: 'left', marginLeft: '3%' }"
      :input="{ fontSize: '20px', padding: '1.5%', width: '92%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
      />
      <input-reg
      :value="SelectedClientEdit.numero"
      @update:model-value="newValue => ChangeClientEdit({ numero: newValue })"
      text="CEP"
      :cont="{ width: '18.5%' }"
      :label="{ textAlign: 'left', marginLeft: '2%' }"
      :input="{ fontSize: '20px', padding: '4%', width: '92%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
      />
    </div>
    <div class="block">
      <input-reg
      :value="SelectedClientEdit.cep"
      @update:model-value="newValue => ChangeClientEdit({ cep: newValue })"
      text="Bairro"
      :cont="{ width: '30%', paddingLeft: '0.6%' }"
      :label="{ textAlign: 'left', marginLeft: '1%' }"
      :input="{ fontSize: '20px', padding: '2.4%', width: '94%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
      />
      <input-reg
      :value="SelectedClientEdit.endereco"
      @update:model-value="newValue => ChangeClientEdit({ endereco: newValue })"
      text="Endereço"
      :cont="{ width: '50%' }"
      :label="{ textAlign: 'left', marginLeft: '3%' }"
      :input="{ fontSize: '20px', padding: '1.5%', width: '92%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
      />
      <input-reg
      :value="SelectedClientEdit.numero"
      @update:model-value="newValue => ChangeClientEdit({ numero: newValue })"
      text="Número"
      :cont="{ width: '18.5%' }"
      :label="{ textAlign: 'left', marginLeft: '2%' }"
      :input="{ fontSize: '20px', padding: '4%', width: '92%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
      />
    </div>
    <div class="block">
      <input-reg
      :value="SelectedClientEdit.cidade"
      @update:model-value="newValue => ChangeClientEdit({ cidade: newValue })"
      text="Cidade"
      :cont="{ width: '50%' }"
      :label="{ textAlign: 'left', marginLeft: '2%' }"
      :input="{ fontSize: '20px', padding: '1.5%', width: '94%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
      />
      <input-reg
      :value="SelectedClientEdit.uf"
      @update:model-value="newValue => ChangeClientEdit({ uf: newValue })"
      text="Estado(UF)"
      :cont="{ width: '50%' }"
      :label="{ textAlign: 'left', marginLeft: '2%' }"
      :input="{ fontSize: '20px', padding: '1.5%', width: '94%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
      />
    </div>
    <div class="block">
      <input-reg
      :value="SelectedClientEdit.cidade"
      @update:model-value="newValue => ChangeClientEdit({ cidade: newValue })"
      text="Senha"
      :cont="{ width: '50%' }"
      :label="{ textAlign: 'left', marginLeft: '2%' }"
      :input="{ fontSize: '20px', padding: '1.5%', width: '94%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
      />
      <input-reg
      :value="SelectedClientEdit.uf"
      @update:model-value="newValue => ChangeClientEdit({ uf: newValue })"
      text="Confirmar senha"
      :cont="{ width: '50%' }"
      :label="{ textAlign: 'left', marginLeft: '2%' }"
      :input="{ fontSize: '20px', padding: '1.5%', width: '94%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import InputReg from '../../Produtos/Register/InputReg'
export default {
  name: 'RegisterClient',
  components: { InputReg },
  computed: {
    ...mapGetters(['SelectedClientEdit'])
  },
  methods: {
    ...mapActions(['ChangeClientEdit', 'PushClient', 'PushMsg']),
    push () {
      this.PushClient(this.SelectedClientEdit)
        .then(() => {
          this.PushMsg({ msg: 'Cliente adicionado com sucesso.', color: '#326e3d' })
        })
    }
  }
}
</script>

<style scoped>
.RegisterClient {
}

.btn-add {
  display: flex;
  justify-content: end;
  padding-right: 1.3%;
}

.block {
  display: flex;
  padding: 0.5%;
}

button {
  border: 0;
  font-size: 16px;
  padding: 1%;
  border-radius: 5px;
  background-color: #333333;
  color: #FFFFFF;
  cursor: pointer;
}
</style>

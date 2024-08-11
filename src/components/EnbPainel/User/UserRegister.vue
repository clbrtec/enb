<template>
  <div class='UserRegister'>
    <div class="cont-btn">
      <button v-if="$route.path !== '/painel/user/edit'" @click="push">Adicionar</button>
      <button v-if="$route.path === '/painel/user/edit'" @click="update">Atualizar</button>
    </div>
    <div class="cont-form">
      <div class="block-left">
        <input-reg
        text="Usuário"
        :value="SelectedUserEdit.usuario"
        @update:modelValue="newValue => ChangeUserEdit({ usuario: newValue })"
        :cont="{ width: '100%', textAlign: 'left' }"
        :label="{ marginLeft: '3px', marginTop: '5px' }"
        :input="{ fontSize: '26px', padding: '1.5%', width: '97%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
        />
        <input-reg
        text="Nome"
        :value="SelectedUserEdit.nome"
        @update:modelValue="newValue => ChangeUserEdit({ nome: newValue })"
        :cont="{ width: '100%', textAlign: 'left' }"
        :label="{ marginLeft: '3px', marginTop: '10px' }"
        :input="{ fontSize: '26px', padding: '1.5%', width: '97%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
        />
        <input-reg
        text="Sobrenome"
        :value="SelectedUserEdit.sobrenome"
        @update:modelValue="newValue => ChangeUserEdit({ sobrenome: newValue })"
        :cont="{ width: '100%', textAlign: 'left' }"
        :label="{ marginLeft: '3px', marginTop: '10px' }"
        :input="{ fontSize: '26px', padding: '1.5%', width: '97%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
        />
        <input-reg
        text="Email"
        :value="SelectedUserEdit.email"
        @update:modelValue="newValue => ChangeUserEdit({ email: newValue })"
        :cont="{ width: '100%', textAlign: 'left' }"
        :label="{ marginLeft: '3px', marginTop: '10px' }"
        :input="{ fontSize: '26px', padding: '1.5%', width: '97%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
        />
        <input-reg
        text="Senha"
        type="password"
        :value="SelectedUserEdit.senha"
        @update:modelValue="newValue => ChangeUserEdit({ senha: newValue })"
        :cont="{ width: '100%', textAlign: 'left' }"
        :label="{ marginLeft: '3px', marginTop: '10px' }"
        :input="{ fontSize: '26px', padding: '1.5%', width: '97%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
        />
        <input-reg
        text="Confirmar senha"
        type="password"
        :cont="{ width: '100%', textAlign: 'left' }"
        :label="{ marginLeft: '3px', marginTop: '10px' }"
        :input="{ fontSize: '26px', padding: '1.5%', width: '97%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
        />
      </div>
      <div class="block-right">
        <user-permission/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import InputReg from '../Produtos/Register/InputReg.vue';
import UserPermission from './Register/UserPermission'
export default {
  name: 'UserRegister',
  components: { UserPermission, InputReg },
  computed: {
    ...mapGetters(['SelectedUserEdit'])
  },
  methods: {
    ...mapActions(['ChangeUserEdit', 'PushUser', 'PushMsg']),
    push () {
      this.PushUser(this.SelectedUserEdit)
        .then(() => this.PushMsg({ msg: 'Usuário cadastrado com sucesso.', color: 'green' }))
    },
    update () {
      this.PushMsg({ msg: 'Usuário atualizado com sucesso.', color: 'green' })
    }
  }
}
</script>

<style scoped>
.UserRegister {
  width: 98%;
  height: 95%;
  padding: 1%;
  overflow: auto;
}

.cont-form {
  display: flex;
}

.block-left {
  width: 50%;
  padding: 1%;
}

.block-right {
  width: 50%;
  padding: 1%;
}

.cont-btn {
  padding-bottom: 1%;
  text-align: right;
}

button {
  border: 0;
  font-size: 18px;
  padding: 1%;
  background-color: #000000;
  color: #FFFFFF;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 2%
}
</style>

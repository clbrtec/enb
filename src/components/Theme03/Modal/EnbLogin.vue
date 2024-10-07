<template>
  <div class='EnbLogin'>
    <enb-top/>
    <div class="label">Informe suas credenciais abaixo</div>
    <div class="cont-input">
      <enb-input label="Email" :input="{ width: '65%' }"/>
    </div>
    <div class="cont-input">
      <enb-input label="Senha" type="password" :input="{ width: '65%' }"/>
    </div>
    <div class="cont-btn">
      <div class="text-link">
        <span style="cursor: pointer">
          Esqueci a senha
        </span>
      </div>
      <div class="btn">
        <enb-button label="entrar" @click="login"/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import EnbTop from './EnbTop'
import EnbInput from '../EnbInput'
import EnbButton from '../EnbButton'
export default {
  name: 'EnbLogin',
  components: { EnbTop, EnbInput, EnbButton },
  methods: {
    ...mapActions(['GetLogin', 'SetModal01']),
    login () {
      this.GetLogin({ logged: true, admin: true })
        .then(() => this.SetModal01({ active: false }))
        .then(() => this.$router.push('/profile'))
    }
  }
}
</script>

<style scoped>
.EnbLogin {
  width: 25%;
  height: 50%;
  position: absolute;
  margin: auto;
  background-color: orange;
}

.label {
  color: #333333;
  font-size: 17px;
}

.cont-input {
  margin-top: 10%;
}

.cont-btn {
  width: 60%;
  padding: 15%;
  margin: auto;
  display: flex;
  align-items: center;
}

.text-link {
  width: 50%;
  text-align: left;
  font-size: 12px;
}

.btn {
  width: 50%;
  text-align: right
}
</style>

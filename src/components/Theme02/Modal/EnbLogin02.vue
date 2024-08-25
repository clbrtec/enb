<template>
  <div class='EnbLogin02'>
    <bar-modal02/>
    <div class="cont-login">
      <div class="text">
        Informe suas credenciais abaixo
      </div>
      <enb-input02
      label="Email ou usuário"
      />
      <enb-input02
      label="Senha"
      type="password"
      :cont="{ marginTop: '3%' }"
      />
      <div class="cont-btn">
        <div class="text-link">
          <span style="cursor: pointer">
            Esqueci a senha
          </span>
        </div>
        <div class="btn">
          <enb-button02 label="entrar"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EnbInput02 from '../EnbInput02'
import EnbButton02 from '../EnbButton02'
import { mapActions } from 'vuex'
import BarModal02 from './BarModal02'
export default {
  name: 'EnbLogin02',
  components: { BarModal02, EnbInput02, EnbButton02 },
  methods: {
    ...mapActions(['GetLogin', 'SetModal01']),
    login () {
      this.GetLogin({ logged: true, admin: true })
      this.SetModal01({ active: false })
    }
  }
}
</script>

<style scoped>
.EnbLogin02 {
  width: 500px;
  height: 340px;
  position: absolute;
  margin: auto;
  background-color: #FFFFFF;
  border-radius: 5px;
  overflow: hidden;
}

.cont-login {
  width: 100%;
  height: 90%;
}

.text {
  padding-top: 10%;
  padding-bottom: 6%;
}

.cont-btn {
  width: 80%;
  padding: 4%;
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

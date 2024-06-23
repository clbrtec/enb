<template>
  <div class='login'>
    <div class="cont">
      <enb-label text="Login" config="font-weight: bold"/>
      <enb-label text="Informe suas credenciais abaixo" config="font-size: 12px"/>
      <enb-input/>
      <enb-input/>
      <enb-button text="Entrar" @click="$router.push('/painel')"/>
    </div>
  </div>
</template>

<script>
import EnbLabel from '@/components/EnbLabel.vue'
import EnbInput from '@/components/EnbInput.vue'
import EnbButton from '@/components/EnbButton.vue'
export default {
  name: 'LoginPainel',
  components: { EnbLabel, EnbInput, EnbButton }
}
</script>

<style scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.cont {
  width: 350px;
  background-color: #ffffff;
  padding: 2%
}

label {
  display: block;
  padding: 1%
}
</style>

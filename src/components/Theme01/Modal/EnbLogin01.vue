<template>
  <div class='EnbLogin01'>
    <enb-label text="Login" config="font-weight: bold"/>
    <enb-label text="Informe suas credenciais abaixo" config="font-size: 12px"/>
    <enb-input :options="{ label: 'Email', styleLabel: { fontSize: '12px' } }"/>
    <enb-input :options="{ label: 'Senha', styleLabel: { fontSize: '12px' } }"/>
    <enb-button @click="login" text="Entrar" :options="{ style: { fontSize: '12px' } }"/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import EnbLabel from '@/components/EnbLabel.vue'
import EnbInput from '@/components/EnbInput.vue'
import EnbButton from '@/components/EnbButton.vue'
export default {
  name: 'EnbLogin01',
  components: { EnbLabel, EnbInput, EnbButton },
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
.EnbLogin01 {
  width: 350px;
  padding: 2%;
  position: absolute;
  margin: auto;
  background-color: #FFFFFF;
  border-radius: 5px;
}
</style>

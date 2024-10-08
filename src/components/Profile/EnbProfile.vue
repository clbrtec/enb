<template>
  <div class='EnbProfile'>
    <card-link label="Painel" icon="EngineerIcon" @click="$router.push('/painel')"/>
    <card-link label="Sair" icon="LogoutIcon" @click="logout"/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import CardLink from './CardLink'
export default {
  name: 'EnbProfile',
  components: { CardLink },
  methods: {
    ...mapActions(['GetLogout']),
    logout () {
      this.GetLogout()
        .then(() => this.$router.push('/loja'))
    }
  }
}
</script>

<style scoped>
.EnbProfile {
  width: 80%;
  min-height: 400px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

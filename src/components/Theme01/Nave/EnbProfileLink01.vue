<template>
  <div class='EnbProfileLink01'>
    <profile-link01 text="Login" v-if="!Profile.logged" @click="SetModal01({ component: 'EnbLogin01', active: true })"/>
    <profile-link01 @click="$router.push('/painel')" text="Painel" v-if="Profile.logged && Profile.admin"/>
    <profile-link01 @click="$router.push('/account')" text="Minha conta" v-if="Profile.logged && !Profile.admin"/>
    <profile-link01 @click="GetLogout" text="Sair" v-if="Profile.logged"/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ProfileLink01 from './ProfileLink01.vue'
export default {
  name: 'EnbProfileLink01',
  components: { ProfileLink01 },
  computed: {
    ...mapGetters(['Profile'])
  },
  methods: {
    ...mapActions(['SetModal01', 'GetLogout'])
  }
}
</script>

<style scoped>
.EnbProfileLink01 {
  position: absolute;
  width: 180px;
  margin-left: -150px;
  background-color: #FFFFFF;
  box-shadow: 1px 1px 1px 1px #CCCCCC;
  cursor: pointer;
  z-index: 998;
}
</style>

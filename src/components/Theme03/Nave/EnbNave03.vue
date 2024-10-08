<template>
  <div class='EnbNave03'>
    <div class="cont-nave">
      <div class="logo-link">
        <enb-logo/>
        <enb-link
        v-for="(l, key) in PropertyLink"
        :key="key"
        :data="l"
        />
      </div>
      <div class="login-search">
        <div class="c-action">
          <search-icon @click="SetModal01({ component: 'EnbSearch', active: true })"/>
        </div> 
        <div class="c-action">
          <user-icon v-if="!Profile.logged" @click="SetModal01({ component: 'EnbLogin', active: true })"/>
          <user-icon v-if="Profile.logged" @click="$router.push('/profile')"/>
         </div>
       </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import EnbLogo from './EnbLogo'
import EnbLink from './EnbLink'
import UserIcon from '../Icons/UserIcon'
import SearchIcon from '../Icons/SearchIcon'
export default {
  name: 'EnbNave03',
  components: { EnbLogo, EnbLink, UserIcon, SearchIcon },
  computed: {
    ...mapGetters(['PropertyLink', 'Profile'])
  },
  methods: {
    ...mapActions(['SetModal01'])
  }
}
</script>

<style scoped>
.EnbNave03 {
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  border-bottom: thin solid orange;
}

.cont-nave {
  width: 80%;
  height: 100%;
  display: flex;
  margin: auto;
}

.logo-link {
  width: 90%;
  height: 100%;
  display: flex;
}

.login-search {
  width: 10%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
}

.c-action {
  padding-right: 5%;
}
</style>

<template>
  <div class='EnbNave01'>
    <div class="cont-top">
      <enb-logo01/>
      <enb-link01
      v-for="(l, key) in LinksTheme01"
      :key="key"
      :data="l"
      />
      <div class="icons">
        <div class="cont-icons">
          <search-icon01/>
        </div>
        <div class="cont-icons">
          <cart-icon01 @click="ToggleCheckout01(true)"/>
        </div>
        <div class="cont-icons">
          <user-icon01 @click="SetModal01({ component: 'EnbLogin01', active: true })"/>
          <div v-if="false" class="painel">painel</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import EnbLogo01 from './EnbLogo01.vue'
import EnbLink01 from './EnbLink01.vue'
import CartIcon01 from '../Icons/CartIcon01.vue'
import UserIcon01 from '../Icons/UserIcon01.vue'
import SearchIcon01 from '../Icons/SearchIcon01'
export default {
  name: 'EnbNave01',
  components: { EnbLogo01, EnbLink01, CartIcon01, UserIcon01, SearchIcon01 },
  computed: {
    ...mapGetters(['LinksTheme01'])
  },
  methods: {
    ...mapActions(['ToggleCheckout01', 'SetModal01'])
  }
}
</script>

<style scoped>
.EnbNave01 {
  width: 100%;
  height: 18%;
  background-color: #EEEEEE;
}

.cont-top {
  display: flex;
  width: 80%;
  height: 100%;
  margin: auto;
}

.icons {
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: end;
}

.cont-icons {
  width: 15%;
}

.painel {
  background-color: #FFFFFF;
  position: absolute;
  padding: 1%;
  margin-left: -2.22%;
}
</style>

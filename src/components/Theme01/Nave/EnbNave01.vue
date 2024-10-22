<template>
  <div class='EnbNave01'>
    <div class="cont-top">
      <enb-logo01/>
      <sub-nave
      :show="showsubnave"
      />
      <enb-link01
      v-for="(l, key) in LinksTheme01"
      :key="key"
      :data="l"
      v-model:showsubnave="showsubnave"
      />
      <div class="icons">
        <div class="cont-icons">
          <search-icon01 @click="ToggleSearch01(true)"/>
        </div>
        <div class="cont-icons">
          <cart-icon01 @click="ToggleCheckout01(true)"/>
        </div>
        <div class="cont-icons">
          <label class="myAccount"
          @click="toProfile"
          @mouseover="ShowProfileLink=true"
          @mouseleave="ShowProfileLink=false"
          >
            {{ !Profile.logged ? 'login' : 'Minha Conta' }}
          </label>
          <!-- <user-icon01
          @click="toProfile"
          @mouseover="ShowProfileLink=true"
          @mouseleave="ShowProfileLink=false"
          /> -->
          <enb-profileLink01 v-if="ShowProfileLink"
          @mouseenter="ShowProfileLink=true"
          @mouseleave="ShowProfileLink=false"
          />
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
//import UserIcon01 from '../Icons/UserIcon01.vue'
import SearchIcon01 from '../Icons/SearchIcon01'
import EnbProfileLink01 from './EnbProfileLink01.vue'
import SubNave from './SubNave'
export default {
  name: 'EnbNave01',
  components: { EnbLogo01, EnbLink01, CartIcon01, SearchIcon01, EnbProfileLink01, SubNave },
  data () {
    return {
      ShowProfileLink: false,
      showsubnave: false
    }
  },
  computed: {
    ...mapGetters(['LinksTheme01', 'Profile'])
  },
  methods: {
    ...mapActions(['ToggleCheckout01', 'ToggleSearch01', 'SetModal01']),
    toProfile() {
      if(this.Profile.logged) {
        this.$router.push('/profile')
      }
    }
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

.myAccount {
  display: block;
  font-size: 14px;
  line-height: 100%;
}
</style>

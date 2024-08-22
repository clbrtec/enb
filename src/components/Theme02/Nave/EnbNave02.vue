<template>
  <div class='EnbNave02'>
    <enb-logo02/>
    <enb-link02
    v-for="(link, key) in LinksTheme01"
    :key="key"
    :data="link"
    />
    <enb-search02/>
    <link-profile02
    @click="SetModal01({ component: 'EnbLogin02', active: true, barText: 'login' })"
    />
    <div class="cont-bag"
    @mouseenter="showBag=true"
    >
      <bag-icon
      @mouseenter="showBag=true"
      />
      <enb-bag02 v-if="showBag"
      @mouseenter="showBag=true"
      @mouseleave="showBag=false"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import EnbLogo02 from './EnbLogo02'
import EnbSearch02 from './EnbSearch02'
import EnbLink02 from './EnbLink02'
import LinkProfile02 from './LinkProfile02'
import BagIcon from '../Icons/BagIcon'
import EnbBag02 from '../Bag/EnbBag02'
export default {
  name: 'EnbNave02',
  components: { EnbLogo02, EnbSearch02, EnbLink02, BagIcon, LinkProfile02, EnbBag02 },
  computed: {
    ...mapGetters(['LinksTheme01'])
  },
  data () {
    return {
      showBag: false
    }
  },
  methods: {
    ...mapActions(['SetModal01'])
  }
}
</script>

<style scoped>
.EnbNave02 {
  width: 80%;
  height: 10%;
  display: flex;
  justify-content: start;
  align-items: center;
  margin: auto;
}

.cont-bag {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding-left: 1%;
  padding-right: 1%;
}
</style>

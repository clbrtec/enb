<template>
  <div class='EnbNave02'>
    <enb-categ v-if="showCateg"
    @mouseenter="showCateg=true"
    @mouseleave="showCateg=false"
    />
    <div class="cont-nave">
      <enb-logo02/>
      <enb-link02
      v-for="(link, key) in LinksTheme01"
      :key="key"
      :data="link"
      v-model:showCateg="showCateg"
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
        <div v-if="CheckoutItens01.length">({{ CheckoutItens01.length }})</div>
        <enb-bag02 v-if="showBag"
        @mouseenter="showBag=true"
        @mouseleave="showBag=false"
        />
      </div>
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
import EnbCateg from './EnbCateg'
export default {
  name: 'EnbNave02',
  components: { EnbLogo02, EnbSearch02, EnbLink02, BagIcon, LinkProfile02, EnbBag02, EnbCateg },
  computed: {
    ...mapGetters(['LinksTheme01', 'CheckoutItens01'])
  },
  data () {
    return {
      showBag: false,
      showCateg: false
    }
  },
  methods: {
    ...mapActions(['SetModal01'])
  }
}
</script>

<style scoped>
.EnbNave02 {
  width: 100%;
  height: 70px;
  position: absolute;
  background-color: #FFFFFF ;
  border-bottom: thin solid #CCCCCC;
  z-index: 1;
}

.cont-nave {
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  margin: auto;
  color: #666666
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

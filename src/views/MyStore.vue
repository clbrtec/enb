<template>
  <enb-msg/>
  <div class='MyStore' @scroll="run"
  :style="{ fontFamily: FontDefault }"
  >
    <component v-if="Modal01.active" :is="Theme.modal"/>
    <component v-if="ShowCheckout" :is="Theme.checkout"/>
    <component v-if="ShowSearch01" :is="Theme.search"/>
    <component :is="Theme.nave"/>
    <enb-content :data="{ scroll }"/>
    <component :is="Theme.footer"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import EnbContent from '@/components/EnbContent'
import { EnbNave01, CheckoutSide01, SearchCont01, EnbModal01, EnbFooter01 } from './Theme01'
import { EnbNave02, EnbModal02 } from './Theme02'
import { EnbNave03, EnbModal03, EnbFooter03 } from './Theme03'
import EnbMsg from '@/components/EnbMsg/EnbMsg'
export default {
  name: 'MyStore',
  components: { 
    EnbContent,
    EnbNave01,
    CheckoutSide01,
    EnbModal01,
    SearchCont01,
    EnbFooter01,
    EnbMsg,
    EnbNave02,
    EnbModal02,
    EnbNave03,
    EnbModal03,
    EnbFooter03
  },
  computed: {
    ...mapGetters(['ShowCheckout', 'ShowSearch01', 'Modal01', 'Theme', 'FontDefault'])
  },
  methods: {
    run (e) {
      this.scroll = {
        position: e.target.offsetHeight + e.target.scrollTop,
        height: e.target.scrollHeight
      }
    }
  },
  data () {
    return {
      scroll: {
        position: 0,
        height: 1
      }
    }
  }
}
</script>

<style scoped>
.MyStore {
  width: 100%;
  height: 100%;
  overflow: auto;
}
</style>

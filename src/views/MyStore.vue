<template>
  <enb-msg/>
  <div class='MyStore'>
    <component v-if="Modal01.active" :is="Theme.modal"/>
    <component v-if="ShowCheckout" :is="Theme.checkout"/>
    <component v-if="ShowSearch01" :is="Theme.search"/>
    <component :is="Theme.nave"/>
    <component :is="Theme.content"/>
    <component :is="Theme.footer"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { EnbNave01, EnbContent01, CheckoutSide01, SearchCont01, EnbModal01, EnbFooter01 } from './Theme01'
import { EnbNave02, EnbModal02 } from './Theme02'
import EnbMsg from '@/components/EnbMsg/EnbMsg'
export default {
  name: 'MyStore',
  components: { EnbNave01, EnbContent01, CheckoutSide01, EnbModal01, SearchCont01, EnbFooter01, EnbMsg, EnbNave02, EnbModal02 },
  computed: {
    ...mapGetters(['ShowCheckout', 'ShowSearch01', 'Modal01', 'Theme'])
  }
}
</script>

<style scoped>
.MyStore {
  width: 100%;
  height: 100%;
}
</style>

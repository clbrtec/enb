<template>
  <div class='MyStore'>
    <component v-if="Modal01.active" :is="'EnbModal01'"/>
    <component v-if="ShowCheckout" :is="'CheckoutSide01'"/>
    <component v-if="ShowSearch01" :is="'SearchCont01'"/>
    <component :is="'EnbNave01'"/>
    <component :is="'EnbContent01'"/>
    <component :is="'EnbFooter01'"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import EnbNave01 from '@/components/Theme01/Nave/EnbNave01'
import EnbContent01 from '@/components/Theme01/Content/EnbContent01'
import CheckoutSide01 from '@/components/Theme01/Checkout/CheckoutSide01'
import SearchCont01 from '@/components/Theme01/Search/SearchCont01'
import EnbModal01 from '@/components/Theme01/Modal/EnbModal01.vue'
import EnbFooter01 from '@/components/Theme01/Footer/EnbFooter01.vue'
export default {
  name: 'MyStore',
  components: { EnbNave01, EnbContent01, CheckoutSide01, EnbModal01, SearchCont01, EnbFooter01 },
  computed: {
    ...mapGetters(['ShowCheckout', 'ShowSearch01', 'Modal01'])
  }
}
</script>

<style scoped>
.MyStore {
  width: 100%;
  height: 100%;
}
</style>

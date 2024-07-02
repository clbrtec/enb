<template>
  <div class='CheckoutSideItens'>
    <checkout-sideItem01
    v-for="(prod, key) in CheckoutItens01"
    :key="key"
    :data="prod"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CheckoutSideItem01 from './CheckoutSideItem01'
export default {
  name: 'CheckoutSideItens',
  components: { CheckoutSideItem01 },
  computed: {
    ...mapGetters(['CheckoutItens01'])
  }
}
</script>

<style scoped>
.CheckoutSideItens {
  height: 67%;
  padding-bottom: 3%;
  overflow: auto;
}
</style>

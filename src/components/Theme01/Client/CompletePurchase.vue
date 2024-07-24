<template>
  <div class='CompletePurchase'>
    <div class="block left">
      <client-reg/>
    </div>
    <div class="block">
      <client-checkout/>
    </div>
  </div>
</template>

<script>
import ClientReg from './ClientReg'
import ClientCheckout from './ClientCheckout'
export default {
  name: 'CompletePurchase',
  components: { ClientReg, ClientCheckout }
}
</script>

<style scoped>
.CompletePurchase {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}

.block {
  width: 37%;
  height: 100%;
}

.left {
}
</style>

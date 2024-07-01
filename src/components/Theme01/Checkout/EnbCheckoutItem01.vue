<template>
  <div class='EnbCheckoutItem01'>
    <div class="cont p">
      <enb-checkoutProd01/>
    </div>
    <div class="cont value">R$ 3,99</div>
    <div class="cont value"></div>
    <div class="cont value">R$ 3,99</div>
  </div>
</template>

<script>
import EnbCheckoutProd01 from './EnbCheckoutProd01'
export default {
  name: 'EnbCheckoutItem01',
  components: { EnbCheckoutProd01 }
}
</script>

<style scoped>
.EnbCheckoutItem01 {
  display: flex;
  border-top: thin solid #EEEEEE;
}

.cont {
  width: 20%;
  padding-top: 2%;
  padding-bottom: 2%;
}

.p {
  width: 40%;
}

.value {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

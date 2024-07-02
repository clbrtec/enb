<template>
  <div class='EnbCheckoutTotal01'>
    <div class="title">
      Total no carrinho
    </div>
    <div class="cont">
      <div class="label">Subtotal</div>
      <div class="value sub-value">R$ {{ CheckoutTotal01 }}</div>
    </div>
    <div class="cont total">
      <div class="label">Total</div>
      <div class="value">R$ {{ CheckoutTotal01 }}</div>
    </div>
    <div class="cont">
      <button>Continuar</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'EnbCheckoutTotal01',
  computed: {
    ...mapGetters(['CheckoutTotal01'])
  }
}
</script>

<style scoped>
.EnbCheckoutTotal01 {
  width: 30%;
  height: 30%;
  border: thin solid #CCCCCC;
  margin-left: 2%;
}

.title {
  font-size: 20px;
  font-weight: bold;
  padding: 5%;
  text-align: left;
}

.cont {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6%;
}

.label {
  width: 50%;
  text-align: left;
}
.value {
  width: 50%;
  text-align: right;
}

.sub-value {
  opacity: 0.7;
}

.total {
  font-size: 18px;
  font-weight: bold;
}

button {
  width: 40%;
  border: 0;
  background-color: orange;
  color: #FFFFFF;
  font-size: 19px;
  padding: 4%;
  border-radius: 5px;
  cursor: pointer;
}
</style>

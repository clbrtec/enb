<template>
  <div class='CheckoutSideBot01'>
    <div class="total">
      <div class="label">Total</div>
      <div class="value">R$ {{ CheckoutTotal01 }}</div>
    </div>
    <button>Finalizar a Compra</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'CheckoutSideBot01',
  computed: {
    ...mapGetters(['CheckoutItens01', 'CheckoutTotal01'])
  }
}
</script>

<style scoped>
.CheckoutSideBot01 {
  width: 80%;
  height: 20%;
  margin: auto;
  border-top: thin solid #CCCCCC;
}

.total {
  display: flex;
  justify-content: center;
  padding: 4%;
}

.label {
  width: 50%;
  text-align: left;
  font-weight: bold;
  font-size: 18px;
}

.value {
  width: 50%;
  text-align: right;
  font-size: 18px;
}

button {
  width: 92%;
  height: 35%;
  border: 0;
  background-color: orange;
  color: #FFFFFF;
  border-radius: 5px;
  font-size: 18px;
}
</style>

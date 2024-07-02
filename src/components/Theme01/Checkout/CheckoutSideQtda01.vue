<template>
  <div class='CheckoutSideQtda01'>
    <div @click="Sub" class="btn">-</div>
    <input :value="data.qtda" type="text">
    <div @click="QtdaCheckoutAdd01(data.id)" class="btn">+</div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'CheckoutSideQtda01',
  props: ['data'],
  
  methods: {
    ...mapActions(['QtdaCheckoutAdd01', 'QtdaCheckoutSub01']),
    Sub () {
      if (this.data.qtda === 1) {
        return
      }
      this.QtdaCheckoutSub01(this.data.id)
    }
  }
}
</script>

<style scoped>
.CheckoutSideQtda01 {
  display: flex;
  border: thin solid #CCCCCC;
  padding: 2%;
  border-radius: 5px;
}

input {
  width: 50%;
  text-align: center;
  border: 0;
}

input:focus {
  outline: none;
}

.btn {
  width: 25%;
  font-size: 18px;
  cursor: pointer;
}
</style>

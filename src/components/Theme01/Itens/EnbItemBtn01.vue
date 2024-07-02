<template>
  <div class='EnbItemBtn'>
    <button @click="Push">Comprar</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'EnbItemBtn',
  props: ['data'],
  methods: {
    ...mapActions(['ToggleCheckout01', 'PushCheckout01']),
    Push () {
      this.PushCheckout01(this.data)
      this.ToggleCheckout01(true)
    }
  }
}
</script>

<style scoped>
.EnbItemBtn {
  width: 100%;
  height: 100%;
}

button {
  border: 0;
  color: #FFFFFF;
  background-color: #4E7826;
  padding: 4%;
  border-radius: 5px;
  cursor: pointer;
}
</style>

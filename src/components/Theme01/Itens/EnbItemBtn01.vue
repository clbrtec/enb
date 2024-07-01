<template>
  <div class='EnbItemBtn'>
    <button @click="ToggleCheckout01(true)">Comprar</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'EnbItemBtn',
  methods: {
    ...mapActions(['ToggleCheckout01'])
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

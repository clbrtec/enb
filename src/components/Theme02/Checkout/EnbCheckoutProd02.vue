<template>
  <div class='EnbCheckoutProd02'>
    <div @click="DeleteCheckout01(data)" class="x">
      x
    </div>
    <div class="img">
      <img :src="data.img[0]">
    </div>
    <div class="desc">
      {{ data.name }}
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'EnbCheckoutProd02',
  props: ['data'],
  methods: {
    ...mapActions(['DeleteCheckout01'])
  }
}
</script>

<style scoped>
.EnbCheckoutProd02 {
  display: flex;
  justify-content: center;
  align-items: center;
}

.x {
  width: 5%;
  cursor: pointer;
  font-weight: bold;
}

.img {
  width: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  width: 90px;
  height: 90px;

}

.desc {
  width: 60%;
  text-align: left;
}
</style>

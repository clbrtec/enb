<template>
  <div class='EnbCheckoutProd01'>
    <div class="x">
      x
    </div>
    <div class="img">
      <img :src="img">
    </div>
    <div class="desc">
      Nome do produto silva
    </div>
  </div>
</template>

<script>
import img from '../Itens/img'
export default {
  name: 'EnbCheckoutProd01',
  data () {
    return {
      img: img
    }
  }
}
</script>

<style scoped>
.EnbCheckoutProd01 {
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

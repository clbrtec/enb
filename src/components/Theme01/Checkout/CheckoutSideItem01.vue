<template>
  <div class='CheckoutSideItem01'>
    <div class="cont-img">
      <img :src="data.img[0]">
    </div>
    <div class="cont">
      <div class="desc">{{ data.name }}</div>
      <div class="qtda-valor">
        <div class="qtda">
          <checkout-sideQtda01 :data="data"/>
        </div>
        <div class="valor">
          R$ {{ preco }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckoutSideQtda01 from './CheckoutSideQtda01'
export default {
  name: 'CheckoutSideItem01',
  components: { CheckoutSideQtda01 },
  props: ['data'],
  computed: {
    preco () {
      return (this.data.preco * this.data.qtda).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
    }
  }
}
</script>

<style scoped>
.CheckoutSideItem01 {
  display: flex;
  align-items: center;
  height: 20%;
}

.cont-img {
  width: 20%;
  padding: 2%;
}

img {
  width: 40px;
  height: 40px;
}

.cont {
  width: 80%;
  height: 100%;
}

.desc {
  display: flex;
  align-items: center;
  height: 50%;
  text-align: left;
}

.qtda-valor {
  height: 50%;
  display: flex;
  justify-content: center;
}

.qtda {
  width: 50%;
  display: flex;
  align-items: center;
  
}

.valor {
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

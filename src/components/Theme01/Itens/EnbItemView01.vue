<template>
  <div class='EnbItemView01'>
    <vue-image-zoomer
    :regular="img"
    hover-message="⚲ Zoom"
    img-width="300"
    img-height="300"
    />
    <div class="cont">
      <div class="cont-desc">
        Nome do produto Nome do produto Nome do produto Nome do produto
      </div>
      <div class="cont-desc valor">
        R$ 9,99
      </div>
      <div class="qtda-btn">
        <div class="qtda">
          <enb-setQtda01/> 
        </div>
        <div class="btn">
          <button>Comprar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { VueImageZoomer } from 'vue-image-zoomer'
import 'vue-image-zoomer/dist/style.css'
import img from './img'
import EnbSetQtda01 from './EnbSetQtda01.vue'
export default {
  name: 'EnbItemView01',
  components: { VueImageZoomer, EnbSetQtda01 },
  data () {
    return {
      img: img
    }
  }
}
</script>

<style scoped>
.EnbItemView01 {
  display: flex;
  justify-content: center;
  padding-top: 2%
}

.cont {
  width: 30%;
  padding: 2%;
}

.cont-desc {
  text-align: left;
  font-size: 22px;
  padding: 1%;
}

.valor {
  font-weight: bold
}

.qtda-btn {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 2%;
}

.qtda {
  width: 50%;
}

.btn {
  width: 50%;
}

button {
  width: 70%;
  padding: 4.5%;
  border: 0;
  border-radius: 10px;
  background-color: #4E7826;
  color: #FFFFFF;
  cursor: pointer;
}
</style>

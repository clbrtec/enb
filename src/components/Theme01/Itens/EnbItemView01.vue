<template>
  <div class='EnbItemView01'>
    <carousel>
      <slide v-for="(img, key) in ItemSelected01.img" :key="key">
        <vue-image-zoomer
        :regular="img"
        hover-message="⚲ Zoom"
        img-width="300"
        img-height="300"
        />
      </slide>
      <template #addons>
        <navigation />
      </template>
    </carousel>
    <div class="cont">
      <div class="cont-desc">
        {{ ItemSelected01.name }}
      </div>
      <div class="cont-desc valor">
        R$ {{ ItemSelected01.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) }}
      </div>
      <div class="qtda-btn">
        <div class="qtda">
          <enb-setQtda01 v-model:qtda="qtda"/> 
        </div>
        <div class="btn">
          <button @click="push">Comprar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { VueImageZoomer } from 'vue-image-zoomer'
import 'vue-image-zoomer/dist/style.css'
import EnbSetQtda01 from './EnbSetQtda01.vue'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
export default {
  name: 'EnbItemView01',
  components: { VueImageZoomer, EnbSetQtda01, Carousel, Slide, Navigation },
  computed: {
    ...mapGetters(['ItemSelected01'])
  },
  data () {
    return {
      qtda: 1
    }
  },
  methods: {
    ...mapActions(['PushCheckout01', 'ToggleCheckout01']),
    push () {
      let item = this.ItemSelected01
      item.qtda = this.qtda
      this.PushCheckout01(item)
      this.ToggleCheckout01(true)
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

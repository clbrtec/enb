<template>
  <div class='SelectProduto02'>
    <bar-modal02/>
    <div class="cont-select">
      <div class="cont-imgs">
        <carousel
        v-model="currentSlide"
        :items-to-show="1"
        >
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
        <Carousel
        v-if="ItemSelected01.img.length"
        id="thumbnails"
        :items-to-show="ItemSelected01.img.length"
        :wrap-around="true"
        v-model="currentSlide"
        ref="carousel"
        >
          <Slide v-for="(img, key) in ItemSelected01.img" :key="key">
            <div class="cont-pag" @click="slideTo(key)">
              <img class="img-pagination" :src="img"> 
            </div>
          </Slide>
        </Carousel>
      </div>
      <div class="cont">
        <div class="cont-desc name">
          {{ ItemSelected01.name }}
        </div>
        <div class="cont-desc desc">
          {{ ItemSelected01.descricao }}
        </div>
        <select-prop
        v-for="(data, k) in ItemSelected01.atributos"
        :key="k"
        :data="data"
        />
        <div class="cont-desc valor">
          <span :class="{ disabled: ItemSelected01.oferta > 0 }" style="margin: 5px">{{ ItemSelected01.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) }}</span>
          <span v-if="ItemSelected01.oferta > 0" style="margin: 5px">{{ ItemSelected01.oferta.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) }}</span>
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
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import BarModal02 from './BarModal02'
import { VueImageZoomer } from 'vue-image-zoomer'
import 'vue-image-zoomer/dist/style.css'
import EnbSetQtda01 from '../../Theme01/Itens/EnbSetQtda01'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import SelectProp from '../../Theme01/Itens/SelectProp'
export default {
  name: 'SelectProduto02',
  components: { BarModal02, VueImageZoomer, EnbSetQtda01, Carousel, Slide, Navigation, SelectProp },
  computed: {
    ...mapGetters(['ItemSelected01'])
  },
  methods: {
    ...mapActions(['PushCheckout01', 'SetModal01']),
    push () {
      let item = this.ItemSelected01
      item.qtda = this.qtda
      this.PushCheckout01(item)
      this.SetModal01({ active: false })
    },
    slideTo(val) {
      this.currentSlide = val
    }
  },
  data () {
    return {
      currentSlide: 0,
      qtda: 1
    }
  }
}
</script>

<style scoped>
.SelectProduto02 {
  width: 800px;
  height: 480px;
  position: absolute;
  margin: auto;
  background-color: #FFFFFF;
  border-radius: 5px;
  overflow: auto;
}

.cont-select {
  width: 96%;
  height: 86%;
  display: flex;
  padding: 2%;
}

.cont-imgs {
  width: 40%;
}

.cont {
  width: 70%;
  padding: 2%;
}

.cont-desc {
  text-align: left;
  font-size: 22px;
  padding: 1%;
}

.name {
  font-weight: bold;
}

.desc {
  font-size: 18px;
  color: #333333;
}

.valor {
  font-weight: bold;
  padding-top: 5%;
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
  background-color: #666666;
  color: #FFFFFF;
  cursor: pointer;
}

.disabled {
  color: #CCCCCC;
  text-decoration: line-through;
}

.img-pagination {
  width: 50px;
  height: 50px;
}
</style>

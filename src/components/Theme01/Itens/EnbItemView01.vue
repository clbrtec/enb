<template>
  <div class='EnbItemView01'>
    <div class="cont-imgs">
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
          <pagination />
        </template>
      </carousel>
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
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { VueImageZoomer } from 'vue-image-zoomer'
import 'vue-image-zoomer/dist/style.css'
import EnbSetQtda01 from './EnbSetQtda01.vue'
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel'
import SelectProp from './SelectProp'
export default {
  name: 'EnbItemView01',
  components: { VueImageZoomer, EnbSetQtda01, Carousel, Slide, Navigation, Pagination, SelectProp },
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
  padding-top: 2%;
}

.cont-imgs {
  width: 40%;
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
  border-radius: 10px;
  background-color: #4E7826;
  color: #FFFFFF;
  cursor: pointer;
}

.disabled {
  color: #CCCCCC;
  text-decoration: line-through;
}
</style>

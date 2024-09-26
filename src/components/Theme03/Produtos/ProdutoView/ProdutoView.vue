<template>
  <div class='ProdutoView'>
    <div class="block-left">
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
        <div class="cont-nav">
          <Carousel
          v-if="ItemSelected01.img.length"
          id="thumbnails"
          :items-to-show="ItemSelected01.img.length"
          :wrap-around="true"
          v-model="currentSlide"
          ref="carousel"
          >
            <Slide v-for="(img, key) in ItemSelected01.img" :key="key">
              <div @click="slideTo(key)">
                <img class="img-pagination" :src="img"> 
              </div>
            </Slide>
          </Carousel>
        </div>
      </div>
    </div>
    <div class="block-right">
      <div class="name">
        {{ ItemSelected01.name }}
      </div>
      <div class="price">
        R$ {{ ItemSelected01.preco }}
      </div>
      <div class="desc">
        {{ ItemSelected01.descricao }}
      </div>
      <div class="btn">
        <btn-whats/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import { VueImageZoomer } from 'vue-image-zoomer'
import 'vue-image-zoomer/dist/style.css'
import BtnWhats from './BtnWhats'
export default {
  name: 'ProdutoView',
  components: { VueImageZoomer, Carousel, Slide, Navigation, BtnWhats },
  computed: {
    ...mapGetters(['ItemSelected01'])
  },
  data () {
    return {
      currentSlide: 0,
      qtda: 1
    }
  },
  methods: {
    slideTo(val) {
      this.currentSlide = val
    }
  }
}
</script>

<style scoped>
.ProdutoView {
  display: flex;
  justify-content: center;
}

.block-left {
  width: 40%;
  padding-top: 2%;
}

.block-right {
  width: 40%;
  padding-top: 2%;
}

.cont-nav {
  width: 50%;
  margin: auto;
}

.img-pagination {
  width: 50px;
  height: 50px;
}

.name {
  font-size: 20px;
  color: orange;
  text-align: left;
}

.price {
  font-size: 20px;
  text-align: left;
  padding-top: 2%;
}

.desc {
  font-size: 16px;
  text-align: left;
  padding-top: 2%;
}

.btn {
  display: flex;
  justify-content: left;
  padding-top: 3%;
}
</style>

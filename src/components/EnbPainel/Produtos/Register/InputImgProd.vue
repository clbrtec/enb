<template>
  <div class='InputImgProd'>
    <img-icon
    v-if="!SelectedProdEdit.img.length"
    @click="SetModal({ component: 'SelectImg', active: true })" 
    :options="{ width: '180px', height: '160px', color: '#CCCCCC', action: true }"
    />
    <carousel
    v-if="SelectedProdEdit.img.length"
    v-model="currentSlide"
    :items-to-show="1"
    >
      <slide v-for="(img, key) in SelectedProdEdit.img" :key="key">
        <div class="cont-img">
          <img class="prod-img" :src="img"
          @click="SetModal({ component: 'SelectImg', active: true })" 
          >
        </div>
      </slide>
      <template #addons>
        <navigation />
      </template>
    </carousel>
    <Carousel
    v-if="SelectedProdEdit.img.length"
    id="thumbnails"
    :items-to-show="SelectedProdEdit.img.length"
    :wrap-around="true"
    v-model="currentSlide"
    ref="carousel"
    >
      <Slide v-for="(img, key) in SelectedProdEdit.img" :key="key">
        <div class="cont-pag" @click="slideTo(key)">
          <img class="img-pagination" :src="img"> 
        </div>
      </Slide>
    </Carousel>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ImgIcon from '../../Icons/ImgIcon'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
export default {
  name: 'InputImgProd',
  components: { ImgIcon, Carousel, Slide, Navigation },
  computed: {
    ...mapGetters(['SelectedProdEdit'])
  },
  methods: {
    ...mapActions(['SetModal']),
    slideTo(val) {
      this.currentSlide = val
    }
  },
  data () {
    return {
      currentSlide: 0
    }
  }
}
</script>

<style scoped>
.InputImgProd {
  width: 100%;
}

.prod-img {
  width: 150px;
  height: 150px;
  cursor: pointer;
}

.img-pagination {
  width: 50px;
  height: 50px;
}

.cont-img {
  width: 100%;
  height: 150px;
}
</style>

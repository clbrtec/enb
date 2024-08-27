<template>
  <div class='ProdImg02' @click="Select" @mouseenter="toggleImg(true)" @mouseleave="toggleImg(false)">
    <Transition>
      <img v-if="!show" :src="data.img[0]">
    </Transition>
    <Transition>
      <img v-if="show && data.img.length > 1" :src="data.img[1]">
    </Transition>
    <div class="oferta" v-if="data.oferta > 0">
      <div style="width: 50%; text-align: left; color: #FFFFFF">Promoção</div>
      <div style="width: 50%; text-align: right; font-weight: bold;">R$ {{ data.oferta }}</div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'ProdImg02',
  props: ['data'],
  methods: {
    ...mapActions(['SetItem01']),
    Select () {
      this.SetItem01(this.data)
        .then(() => this.$router.push('/itemview'))
    },
    toggleImg (img) {
      if (img && this.data.img.length > 1) {
        this.show = true
      } else {
        this.show = false
      }
    }
  },
  data () {
    return {
      show: false
    }
  }
}
</script>

<style scoped>
.ProdImg02 {
  width: 100%;
  height: 230px;
  position: relative;
  cursor: pointer;
}

img {
  width: 100%;
  height: 100%;
  margin-left: -50%;
  position: absolute;
}

.oferta {
  display: flex;
  position: absolute;
  bottom: 0;
  padding: 2%;
  width: 96%;
  background-color: rgb(11, 141, 109);
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>

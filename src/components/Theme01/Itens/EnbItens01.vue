<template>
  <div class='EnbItens01'>
    <carousel v-if="Produtos01.length">
      <slide v-for="(produtos, key) in Produtos" :key="key">
        <package-itens01 :data="produtos"/>
      </slide>

      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import PackageItens01 from './PackageItens01'
export default {
  name: 'EnbItens01',
  components: { Carousel, Slide, Pagination, Navigation, PackageItens01 },
  computed: {
    ...mapGetters(['Produtos01', 'ResultFilterCateg']),
    Produtos () {
      return this.$route.path === '/categorias' ? [this.ResultFilterCateg, []] : this.Produtos01
    }
  }
}
</script>

<style scoped>
.EnbItens01 {
  width: 100%;
  height: 462px;
}
</style>

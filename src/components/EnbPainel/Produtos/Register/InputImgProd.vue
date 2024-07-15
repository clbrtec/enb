<template>
  <div class='InputImgProd'>
    <img-icon
    v-if="SelectedProdEdit.img === ''"
    @click="SetModal({ component: 'SelectImg', active: true })" 
    :options="{ width: '180px', height: '160px', color: '#CCCCCC', action: true }"
    />
    <img :src="SelectedProdEdit.img"
    v-if="SelectedProdEdit.img !== ''"
    @click="SetModal({ component: 'SelectImg', active: true })" 
    >
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ImgIcon from '../../Icons/ImgIcon'
export default {
  name: 'InputImgProd',
  components: { ImgIcon },
  computed: {
    ...mapGetters(['SelectedProdEdit'])
  },
  methods: {
    ...mapActions(['SetModal'])
  }
}
</script>

<style scoped>
.InputImgProd {
  width: 50%;
}

img {
  width: 150px;
  height: 150px;
  cursor: pointer;
}
</style>

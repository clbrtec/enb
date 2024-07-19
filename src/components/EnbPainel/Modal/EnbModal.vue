<template>
  <div class='EnbModal'>
    <div class="black" @click="SetModal({ component: '', active: false })"></div>
    <component :is="EnbModal.component" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import SelectImg from './SelectImg'
import FastProdEdit from './FastProdEdit'
export default {
  name: 'EnbModal',
  components: { SelectImg, FastProdEdit },
  computed: {
    ...mapGetters(['EnbModal'])
  },
  methods: {
    ...mapActions(['SetModal'])
  }
}
</script>

<style scoped>
.EnbModal {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
}

.black {
  width: 100%;
  height: 100%;
  opacity: 0.50;
  position: absolute;
  background-color: #000000;
}
</style>

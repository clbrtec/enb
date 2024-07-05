<template>
  <div class='EnbModal01'>
    <div class="black" @click="SetModal01({ active: false })"></div>
    <component :is="Modal01.component" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import EnbLogin01 from './EnbLogin01.vue'
export default {
  name: 'EnbModal01',
  components: { EnbLogin01 },
  computed: {
    ...mapGetters(['Modal01']),
  },
  methods: {
    ...mapActions(['SetModal01'])
  }
}
</script>

<style scoped>
.EnbModal01 {
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

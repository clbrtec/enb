<template>
  <div class='EnbProdImg'>
    <img :src="data.img[0]" @click="Select">
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'EnbProdImg',
  props: ['data'],
  methods: {
    ...mapActions(['SetItem01']),
    Select () {
      this.SetItem01(this.data)
        .then(() => this.$router.push('/produtoview'))
    }
  }
}
</script>

<style scoped>
.EnbProdImg {
  width: 100%;
  height: 250px;
  background-color: red;
}

img {
  width: 100%;
  height: 100%;
  cursor: pointer;
}
</style>

<template>
  <div @click="select" class='ViewImg'>
    <img :src="data">
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'ViewImg',
  props: ['data'],
  methods: {
    ...mapActions(['ChangeProdEdit', 'SetModal']),
    select () {
      this.ChangeProdEdit({ img: this.data })
      this.SetModal({ component: '', active: false })
    }
  }
}
</script>

<style scoped>
.ViewImg {
  margin: 5px;
  border: thin solid #CCCCCC;
  cursor: pointer;
}

img {
  width: 100px;
  height: 100px;
}
</style>

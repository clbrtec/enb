<template>
  <div
  @click="select"
  :class="{ active: SelectedProdEdit.img.filter(i => i === data).length }"
  class='ViewImg'>
    <img :src="data">
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'ViewImg',
  props: ['data'],
  computed: {
    ...mapGetters(['SelectedProdEdit'])
  },
  methods: {
    ...mapActions(['ChangeProdEdit', 'SetModal']),
    select () {
      let imgs = this.SelectedProdEdit.img
      if(imgs.filter(i => i === this.data).length) {
        imgs = imgs.filter(i => i !== this.data)
        this.ChangeProdEdit({ img: imgs })
      } 
      else {
        imgs.push(this.data)
        this.ChangeProdEdit({ img: imgs })
      }
    }
  }
}
</script>

<style scoped>
.ViewImg {
  margin: 5px;
  border: 3px solid #CCCCCC;
  cursor: pointer;
}

img {
  width: 100px;
  height: 100px;
}

.active {
  border: 3px solid #648EEA;
}
</style>

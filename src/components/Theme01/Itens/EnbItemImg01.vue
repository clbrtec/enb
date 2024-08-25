<template>
  <div class='EnbItemImg01' @click="Select">
    <img :src="data.img[0]">
    <!-- <input type="file" @change="inFile"/> -->
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'EnbItemImg01',
  props: ['data'],
  methods: {
    ...mapActions(['SetItem01']),
    Select () {
      this.SetItem01(this.data)
        .then(() => this.$router.push('/itemview'))
      
    },
    inFile (e) {
      this.getBase64(e.target.files[0])
    },
    getBase64 (file) {
      let reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => {
        console.log(reader.result)
      }
      reader.onerror = (error) => {
        console.log('Error: ', error)
      }
    }
  }
}
</script>

<style scoped>
.EnbItemImg01 {
  width: 150px;
  height: 150px;
}

img {
  width: 100%;
  height: 100%;
  cursor: pointer;
}

img:hover {
  animation: ZoomIn 0.3s forwards;
}

@keyframes ZoomIn {
  from {
    width: 150px;
    height: 150px;
  }
  to {
    width: 170px;
    height: 170px;
    margin-left: -10px;
    margin-top: -10px;
  }
}
</style>

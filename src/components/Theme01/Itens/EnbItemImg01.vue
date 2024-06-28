<template>
  <div class='EnbItemImg01'>
    <img :src="img">
    <!-- <input type="file" @change="inFile"/> -->
  </div>
</template>

<script>
import img from './img'
export default {
  name: 'EnbItemImg01',
  data () {
    return {
      img: img
    }
  },
  methods: {
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
  background-color: green;
}

img {
  width: 100%;
  height: 100%;
}
</style>

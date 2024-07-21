<template>
  <div class='EnbLogo01'>
    <img :src="img">
  </div>
</template>

<script>
import logo from '../../../assets/logo'
export default {
  name: 'EnbLogo01',
  data () {
    return {
      img: logo
    }
  }
}
</script>

<style scoped>
.EnbLogo01 {
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 30px;
  width: 20%;
}

img {
  width: 70%;
}
</style>

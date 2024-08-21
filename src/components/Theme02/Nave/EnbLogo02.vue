<template>
  <div class='EnbLogo02'>
    <img :src="logo">
  </div>
</template>

<script>
import logo from '../../../assets/logo'
export default {
  name: 'EnbLogo02',
  data () {
    return {
      logo: logo
    }
  }
}
</script>

<style scoped>
.EnbLogo02 {
  width: 12%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

img {
  width: 90%;
  height: 90%;
  cursor: pointer;
}
</style>

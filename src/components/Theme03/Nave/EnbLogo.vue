<template>
  <div class='EnbLogo'>
    <img :src="logo">
  </div>
</template>

<script>
import logo from '../../../assets/logo'
export default {
  name: 'EnbLogo',
  data () {
    return {
      logo: logo
    }
  }
}
</script>

<style scoped>
.EnbLogo {
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
}

img {
  width: 90%;
  height: 75%;
  cursor: pointer;
}
</style>

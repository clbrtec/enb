<template>
  <div class='EnbLogo01'>
    <img :src="Logo">
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'EnbLogo01',
  computed: {
    ...mapGetters(['Logo'])
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

<template>
  <div class='EnbLogo'>
    <img :src="Logo">
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'EnbLogo',
  computed: {
    ...mapGetters(['Logo'])
  }
}
</script>

<style scoped>
.EnbLogo {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

img {
  width: 90%;
  height: 75%;
  cursor: pointer;
}
</style>

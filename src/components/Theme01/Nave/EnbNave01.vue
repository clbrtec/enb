<template>
  <div class='EnbNave01'>
    <div class="cont-top">
      <enb-logo01/>
      <enb-link01/>
    </div>
  </div>
</template>

<script>
import EnbLogo01 from './EnbLogo01.vue'
import EnbLink01 from './EnbLink01.vue'
export default {
  name: 'EnbNave01',
  components: { EnbLogo01, EnbLink01 }
}
</script>

<style scoped>
.EnbNave01 {
  width: 100%;
  height: 18%;
  background-color: #EEEEEE;
}

.cont-top {
  display: flex;
  width: 80%;
  height: 100%;
  margin: auto;
}
</style>

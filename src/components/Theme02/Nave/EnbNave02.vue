<template>
  <div class='EnbNave02'>
    <enb-logo02/>
    <enb-search02/>
  </div>
</template>

<script>
import EnbLogo02 from './EnbLogo02'
import EnbSearch02 from './EnbSearch02'
export default {
  name: 'EnbNave02',
  components: { EnbLogo02, EnbSearch02 }
}
</script>

<style scoped>
.EnbNave02 {
  width: 80%;
  height: 10%;
  display: flex;
  justify-content: start;
  align-items: center;
  margin: auto;
}
</style>

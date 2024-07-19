<template>
  <div class='EnbMsg'>
    <comp-msg
    v-for="(data, key) in EnbMsg"
    :key="key"
    :data="data"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CompMsg from './CompMsg'
export default {
  name: 'EnbMsg',
  components: { CompMsg },
  computed: {
    ...mapGetters(['EnbMsg'])
  }
}
</script>

<style scoped>
.EnbMsg {
  width: 20%;
  position: absolute;
  bottom: 0;
  right: 0;
  color: #FFFFFF;
}
</style>

<template>
  <div class='EnbLogin02'>
    <bar-modal02/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import BarModal02 from './BarModal02'
export default {
  name: 'EnbLogin02',
  components: { BarModal02 },
  methods: {
    ...mapActions(['GetLogin', 'SetModal01']),
    login () {
      this.GetLogin({ logged: true, admin: true })
      this.SetModal01({ active: false })
    }
  }
}
</script>

<style scoped>
.EnbLogin02 {
  width: 500px;
  height: 400px;
  position: absolute;
  margin: auto;
  background-color: #FFFFFF;
  border-radius: 5px;
  overflow: hidden;
}
</style>

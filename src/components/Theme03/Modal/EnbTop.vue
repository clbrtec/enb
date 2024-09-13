<template>
  <div class='EnbTop'>
    <close-icon color="#333333" @click="SetModal01({ active: false })"/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import CloseIcon from '../Icons/CloseIcon'
export default {
  name: 'EnbTop',
  components: { CloseIcon },
  methods: {
    ...mapActions(['SetModal01'])
  }
}
</script>

<style scoped>
.EnbTop {
  width: 92%;
  padding: 4%;
  display: flex;
  justify-content: end;
}
</style>

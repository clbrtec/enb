<template>
  <div class='LinkProfile02'>
    <div>
      {{ Profile.logged ? 'Minha Conta' : 'login' }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'LinkProfile02',
  computed: {
    ...mapGetters(['Profile'])
  }
}
</script>

<style scoped>
.LinkProfile02 {
  width: 6%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
  color: #666666;
  cursor: pointer;
}
</style>

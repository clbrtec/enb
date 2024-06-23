<template>
  <div class='EnbMystore' :class="{ flex: selectedThemeTop.name === 'Left' }">
    <component :is="selectedThemeTop.component"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import EnbTopbasic from '@/components/EditComponets/EnbTopbasic/EnbTopbasic.vue'
import EnbTopleft from '@/components/EditComponets/EnbTopleft/EnbTopleft.vue'
export default {
  name: 'EnbMystore',
  components: {
    EnbTopbasic,
    EnbTopleft
  },
  computed: {
    ...mapGetters(['selectedThemeTop'])
  }
}
</script>

<style scoped>
.EnbMystore {
  width: 100%;
  height: 100%;
}

.flex {
  display: flex;
}
</style>

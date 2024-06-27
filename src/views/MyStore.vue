<template>
  <div class='MyStore'>
    <component :is="'EnbNave01'"/>
  </div>
</template>

<script>
import EnbNave01 from '@/components/Theme01/Nave/EnbNave01'
export default {
  name: 'MyStore',
  components: { EnbNave01 }
}
</script>

<style scoped>
.MyStore {
  width: 100%;
  height: 100%;
}
</style>

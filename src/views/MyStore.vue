<template>
  <div class='MyStore'>
    <component :is="'EnbNave01'"/>
    <component :is="'EnbContent01'"/>
  </div>
</template>

<script>
import EnbNave01 from '@/components/Theme01/Nave/EnbNave01'
import EnbContent01 from '@/components/Theme01/Content/EnbContent01'
export default {
  name: 'MyStore',
  components: { EnbNave01, EnbContent01 }
}
</script>

<style scoped>
.MyStore {
  width: 100%;
  height: 100%;
}
</style>

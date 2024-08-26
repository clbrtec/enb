<template>
  <div class='EnbContent'>
    <router-view :data="data"/>
  </div>
</template>

<script>
export default {
  name: 'EnbContent',
  props: ['data']
}
</script>

<style scoped>
.EnbContent {
  width: 100%;
}
</style>

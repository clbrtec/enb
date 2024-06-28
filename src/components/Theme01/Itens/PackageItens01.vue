<template>
  <div class='PackageItens01'>
    <enb-item01
    v-for="(produto, k) in data"
    :key="k"
    :data="produto"
    />
  </div>
</template>

<script>
import EnbItem01 from './EnbItem01'
export default {
  name: 'PackageItens01',
  components: { EnbItem01 },
  props: ['data']
}
</script>

<style scoped>
.PackageItens01 {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
</style>

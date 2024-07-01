<template>
  <div class='EnbLink01'>
    <div class="cont" @click="$router.push(data.path)">{{ data.text }}</div>
  </div>
</template>

<script>
export default {
  name: 'EnbLink01',
  props: {
    data: {
      text: Object,
      default: () => ({ text: 'Link', path: '' })
    }
  }
}
</script>

<style scoped>
.EnbLink01 {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2.5%;
}

.cont {
  cursor: pointer;
}
</style>

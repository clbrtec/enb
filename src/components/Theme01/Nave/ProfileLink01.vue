<template>
  <div class='ProfileLink01'>
    {{ text }}
  </div>
</template>

<script>
export default {
  name: 'ProfileLink01',
  props: ['text']
}
</script>

<style scoped>
.ProfileLink01 {
  text-align: left;
  padding: 5%;
}

.ProfileLink01:hover {
  background-color: #CCCCCC;
}
</style>

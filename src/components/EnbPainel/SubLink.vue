<template>
  <div
  class='SubLink'
  :class="{ active: data.path === $route.path }"
  @click="$router.push(data.path)"
  >
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    {{ data.text }}
    </div>
</template>

<script>
export default {
  name: 'SubLink',
  props: {
    data: {
      type: Object,
      default: () => ({ text: 'Modulo', path: '' })
    }
  }
}
</script>

<style scoped>
.SubLink {
  padding: 5%;
  text-align: left;
  cursor: pointer;
  border-left: 7px solid #FFFFFF;
}

.SubLink:hover {
  background-color: #EEEEEE;
  border-left: 7px solid #648EEA;
}

.active {
  background-color: #EEEEEE;
  border-left: 7px solid #648EEA;
}
</style>

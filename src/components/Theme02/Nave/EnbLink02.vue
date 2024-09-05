<template>
  <div class='EnbLink02'
  @click="$router.push(data.path)"
  @mouseenter="emit(true)"
  @mouseleave="emit(false)"
  >
    {{ data.text }}
  </div>
</template>

<script>
export default {
  name: 'EnbLink02',
  props: {
    data: {
      type: Object,
      default: () => ({ text: 'link', path: '/' })
    },
    toggleCateg: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    emit (bool) {
      if(this.data.text === 'Produtos') {
        this.$emit('update:showCateg', bool)
      }
    }
  }
}
</script>

<style scoped>
.EnbLink02 {
  display: flex;
  align-items: center;
  height: 100%;
  padding-left: 1%;
  padding-right: 1%;
  cursor: pointer;
  color: #666666;
}

.EnbLink02:hover {
  background-color: #EEEEEE;
}
</style>

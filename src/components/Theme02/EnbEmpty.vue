<template>
  <div class='EnbEmpty'>
    <div class="cont-info">
      <Empty-icon/>
      <label>{{ label }}</label>
    </div>
  </div>
</template>

<script>
import EmptyIcon from './Icons/EmptyIcon'
export default {
  name: 'EnbEmpty',
  components: { EmptyIcon },
  props: {
    label: {
      type: String,
      default: 'Adicione algum texto aqui!'
    }
  }
}
</script>

<style scoped>
.EnbEmpty {
  width: 100%;
  display: flex;
  justify-content: center;
}

.cont-info {
  margin-top: 10%;
}

label {
  display: block;
  font-size: 20px;
  padding-top: 2%;
}
</style>

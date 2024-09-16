<template>
  <div class='EnbSearch'>
    <enb-input
    label="Digite aqui o que você deseja encontrar..."
    :cont="{ width: '85%' }"
    :input="{ width: '90%' }"
    />
    <enb-button label="buscar"/>
  </div>
</template>

<script>
import EnbInput from '../EnbInput'
import EnbButton from '../EnbButton';
export default {
  name: 'EnbSearch',
  components: { EnbInput, EnbButton }
}
</script>

<style scoped>
.EnbSearch {
  width: 30%;
  height: 10%;
  display: flex;
  justify-content: start;
  align-items: center;
  position: absolute;
  margin: auto;
  top: 8%;
  background-color: orange;
}
</style>

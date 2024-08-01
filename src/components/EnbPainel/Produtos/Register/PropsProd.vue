<template>
  <div class='PropsProd'>
    <div class="header">
      <div class="header-left">Atributos:</div>
      <div class="header-right"><button>Adicionar atributo</button></div>
    </div>
    <prop-prod/>
  </div>
</template>

<script>
import PropProd from './PropProd'
export default {
  name: 'PropsProd',
  components: { PropProd }
}
</script>

<style scoped>
.PropsProd {
  width: 100%;
  margin-top: 2%;
}

.header {
  display: flex;
  align-items: center;
}

.header-left {
  width: 50%;
  text-align: left;
  padding-left: 5px;
}

.header-right {
  width: 50%;
  text-align: right;
}

button {
  border: 0;
  padding: 3%;
  border-radius: 5px;
  background-color: #CCCCCC;
  cursor: pointer;
}
</style>

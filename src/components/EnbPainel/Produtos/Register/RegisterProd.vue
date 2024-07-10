<template>
  <div class='RegisterProd'>
    <div class="block">
      <div class="cont-block left">
        <div><input type="checkbox">Digital</div>
        <div style="margin-left: 2%;"><input type="checkbox">Transferível</div>
      </div>
      <div class="cont-block rigth">
        <button>Adicionar novo</button>
      </div>
    </div>
    <div class="block">
      <input-info/>
      <input-img/>
    </div>
  </div>
</template>

<script>
import InputInfo from './InputInfo.vue'
import InputImg from './InputImg.vue'
export default {
  name: 'RegisterProd',
  components: { InputInfo, InputImg }
}
</script>

<style scoped>
.RegisterProd {
}

.block {
  display: flex;
  padding: 2%;
}

.cont-block {
  width: 50%;
}

.rigth {
  display: flex;
  justify-content: end;
}

.left {
  display: flex;
  justify-content: left;
}
</style>

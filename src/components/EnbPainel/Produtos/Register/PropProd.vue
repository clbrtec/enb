<template>
  <div class='PropProd'>
    <div><input type="checkbox">Ativo</div>
    <div>
      <input-reg
      text="Nome"
      :label="{ marginLeft: '3px', marginTop: '8px' }"
      :input="{ fontSize: '18px', padding: '1%', width: '97.5%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
      />
    </div>
    <div>
      <label style="font-size: 12px; padding: 3px;">Valores:</label>
      <div class="cont-values">
        <div
        class="value"
        v-for="(v, k) in 20"
        :key="k"
        >
          <input type="checkbox">
          Vermelho
        </div>
      </div>
      <div class="value-btn">
        <input-reg
        text="Valor"
        :cont="{ width: '85%' }"
        :label="{ marginLeft: '3px', marginTop: '3px' }"
        :input="{ fontSize: '18px', padding: '1%', width: '95%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
        />
        <button>Adicionar valor</button>
      </div>
    </div>
  </div>
</template>

<script>
import InputReg from './InputReg';
export default {
  name: 'PropProd',
  components: { InputReg }
}
</script>

<style scoped>
.PropProd {
  border: thin solid #CCCCCC;
  border-radius: 5px;
  padding: 1.5%;
  margin-top: 1%;
  text-align: left
}

.cont-values {
  display: flex;
  flex-wrap: wrap;
  padding: 1.5%;
  border: thin solid #CCCCCC;
  border-radius: 5px;
  font-size: 14px;
}

.value-btn {
  display: flex;
  justify-content: end;
  align-items: end;
}

.value {
  display: flex;
  align-items: center;
  margin: 0%;
}

button {
  border: 0;
  padding: 0.92%;
  height: 35px;
  border-radius: 5px;
  background-color: #CCCCCC;
  cursor: pointer;
}
</style>

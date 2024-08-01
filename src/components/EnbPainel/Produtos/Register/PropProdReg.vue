<template>
  <div class='PropProdReg'>
    <div>
      <input-reg
      text="Nome"
      :value="name"
      @update:model-value="newValue => name = newValue"
      :label="{ marginLeft: '3px', marginTop: '8px' }"
      :input="{ fontSize: '18px', padding: '1%', width: '97.5%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
      />
    </div>
    <div>
      <label style="font-size: 12px; padding: 3px;" v-if="values.length">Valores:</label>
      <div class="cont-values" v-if="values.length">
        <div
        class="value"
        v-for="(value, k) in values"
        :key="k"
        >
          {{ value.name }}
        </div>
      </div>
      <div class="value-btn">
        <input-reg
        :value="value"
        text="Valor"
        @update:model-value="newValue => value = newValue"
        :cont="{ width: '85%' }"
        :label="{ marginLeft: '3px', marginTop: '3px' }"
        :input="{ fontSize: '18px', padding: '1%', width: '95%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
        />
        <button @click="pushValue">Adicionar valor</button>
      </div>
      <div class="add">
        <button @click="pushProp">Adicionar atributo</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import InputReg from './InputReg';
export default {
  name: 'PropProdReg',
  components: { InputReg },
  props: ['data'],
  data () {
    return {
      value: '',
      name: '',
      values: []
    }
  },
  computed: {
    ...mapGetters(['PropsProd'])
  },
  methods: {
    ...mapActions(['PushPropProd']),
    pushValue () {
      this.values.push({ active: false, id: Math.round(Math.random() * 1000000), name: this.value })
      this.value = ''
    },
    pushProp () {
      this.PushPropProd({ name: this.name, values: this.values })
      this.name = ''
      this.value = ''
    }
  }
}
</script>

<style scoped>
.PropProdReg {
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
  margin: 0.5%;
  padding: 1%;
  background-color: #EEEEEE;
}

button {
  border: 0;
  padding: 0.92%;
  height: 35px;
  border-radius: 5px;
  background-color: #CCCCCC;
  cursor: pointer;
}

.add  {
  display: flex;
  justify-content: center;
  margin-top: 2%;
}
</style>

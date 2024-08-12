<template>
  <div class='InputEstoque'>
    <div class="block-left">
      <input-select
      v-for="(data, key) in prod.atributos"
      @update:modelValue="newValue => get(data.id, data.name, newValue)"
      :key="key"
      :data="data.values"
      :text="data.name"
      :label="{ textAlign: 'left', marginTop: '1%', marginLeft: '5px' }"
      :input="{ width: '100%', padding: '1%', fontSize: '16px', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
      />
    </div>
    <div class="block-right">
      <div class="cont-input">
        <input-reg
        text="Quantidade"
        :value="src.quantidade"
        @update:modelValue="newValue => src.quantidade = newValue"
        :cont="{ width: '100%', textAlign: 'left' }"
        :label="{ marginLeft: '3px' }"
        :input="{ textAlign: 'right', fontSize: '16px', padding: '2%', width: '90%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
        />
      </div>
      <div class="cont-btn">
        <button @click="push">adicionar</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import InputReg from '../Produtos/Register/InputReg.vue'
import InputSelect from '../Produtos/Register/InputSelect.vue'
export default {
  name: 'InputEstoque',
  components: { InputReg, InputSelect },
  props: ['prod'],
  data () {
    return {
      src: {
        quantidade: 0,
        values: []
      }
    }
  },
  methods: {
    ...mapActions(['PushEstoqueVariavel', 'UpdateEstoque']),
    get (id, name, value) {
      let atributo = this.prod.atributos.filter(a => a.id === id)[0]
      let target = atributo.values.filter(v => v.name === value)[0]
      if(this.src.values.filter(v => v.id === target.id).length) {
        return
      }
      if(this.src.values.filter(v => v.idParent === id).length) {
        this.src.values = this.src.values.filter(v => v.idParent !== id)
      }
      this.src.values.push({
        id: target.id,
        idParent: id,
        name: name,
        value: value
      })
    },
    push () {
      if (!this.src.values.length) {
        if(this.src.quantidade) {
          this.UpdateEstoque(this.src.quantidade)
          this.src.quantidade = 0
        }
        return
      }
      this.PushEstoqueVariavel({
        quantidade: this.src.quantidade,
        values: this.src.values
      })
    }
  }
}
</script>

<style scoped>
.InputEstoque {
  display: flex;
  border-bottom: thin solid #CCCCCC;
}

.block-left {
  width: 70%;
  padding: 1%;
}

.block-right {
  display: flex;
  align-items: end;
  width: 30%;
  padding: 1%;
}

.cont-input {
  width: 70%;
}

button {
  border: 0;
  font-size: 14px;
  padding: 10%;
  background-color: #000000;
  color: #FFFFFF;
  border-radius: 4%;
  cursor: pointer;
}
</style>

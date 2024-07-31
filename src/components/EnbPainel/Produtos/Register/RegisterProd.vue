<template>
  <div class='RegisterProd'>
    <div class="block">
      <div class="left">
        <input-select
        :value="SelectedProdEdit.tipo"
        @update:model-value="newValue => ChangeProdEdit({ tipo: newValue })"
        :data="types"
        text="Tipo"
        :cont="{ width: '40%' }"
        :label="{ textAlign: 'left', marginTop: '5px', marginLeft: '3px' }"
        :input="{ width: '100%', padding: '4%', fontSize: '16px', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
        />
      </div>
      <div class="rigth">
        <button v-if="!edit" @click="push">Adicionar novo</button>
        <button v-if="edit" @click="update">Atualizar</button>
      </div>
    </div>
    <div class="block">
      <input-info/>
      <input-img/>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import InputInfo from './InputInfo.vue'
import InputImg from './InputImg.vue'
import InputSelect from './InputSelect'
export default {
  name: 'RegisterProd',
  components: { InputInfo, InputImg, InputSelect },
  data () {
    return {
      types: [
        { name: 'Simples' },
        { name: 'Variável' }
      ]
    }
  },
  computed: {
    ...mapGetters(['SelectedProdEdit']),
    edit () {
      return this.SelectedProdEdit.id !== ''
    }
  },
  methods: {
    ...mapActions(['ChangeProdEdit', 'PushProd', 'ClearProdEdit', 'PushMsg']),
    push () {
      this.PushProd(this.SelectedProdEdit)
        .then(() => {
          this.ClearProdEdit()
          this.PushMsg({ msg: 'Produto cadastrado com sucesso.', color: '#326e3d' })
        })
    },
    update () {
      this.PushMsg({ msg: 'Produto atuliazdo com sucesso.', color: 'green' })
    }
  }
}
</script>

<style scoped>
.RegisterProd {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.block {
  display: flex;
  padding: 2%;
}

.rigth {
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.left {
  width: 70%;
  display: flex;
}

button {
  border: 0;
  font-size: 16px;
  padding: 5%;
  margin: 1%;
  border-radius: 5px;
  background-color: #333333;
  color: #FFFFFF;
  cursor: pointer;
}
</style>

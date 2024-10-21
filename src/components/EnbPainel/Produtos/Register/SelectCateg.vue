<template>
  <div class='SelectCateg'>
    <div class="cont-categ">
      <div class="header">Categorias</div>
      <div class="cont">
        <input-categ
        v-for="(categ, key) in Categorias.filter(c  => c.name !== '')"
        :key="key"
        :data="categ"
        />
      </div>
    </div>
    <div>
      <div class="btn" @click="ShowAddCateg=!ShowAddCateg">
      +Adicionar nova Categoria
      </div>
      <div v-if="ShowAddCateg">
        <input-icon-categ
        @update:model-value="newValue => icon = newValue"
        />
        <input-reg
        :value="name"
        @update:model-value="newValue => name = newValue"
        text="Nome da Categoria"
        :label="{ marginLeft: '5px', textAlign: 'left', marginTop: '5px' }"
        :input="{ width: '95%', border: 'thin solid #CCCCCC', borderRadius: '5px', padding: '2%', fontSize: '16px' }"
        />
        <input-select
        @update:model-value="newValue => parent = newValue"
        :data="Categorias"
        text="Filha de"
        :label="{ textAlign: 'left', marginTop: '5px', marginLeft: '5px' }"
        :input="{ width: '100%', padding: '2%', fontSize: '16px', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
        />
        <div>
          <button
          @click="PushCateg({ children: { active: false, childrens: [], name: name }, parent: parent })"
          >
            Adicionar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import InputCateg from './InputCateg'
import InputReg from './InputReg'
import InputSelect from './InputSelect'
import InputIconCateg from './InputIconCateg'
export default {
  name: 'SelectCateg',
  components: { InputCateg, InputReg, InputSelect, InputIconCateg },
  data () {
    return {
      ShowAddCateg: false,
      parent: '',
      name: '',
      icon: ''
    }
  },
  computed: {
    ...mapGetters(['Categorias'])
  },
  methods: {
    ...mapActions(['PushCateg'])
  }
}
</script>

<style scoped>
.SelectCateg {
  width: 90%;
  margin: auto;
  border-radius: 5px;
  margin-top: 6%;
}

.cont-categ {
  height: 220px;
  border: thin solid #CCCCCC;
  border-radius: 5px;
}

.header {
  width: 100%;
  height: 18%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: thin solid #CCCCCC;
}

.cont {
  height: 79%;
  padding: 1%;
  overflow: auto;
}

.btn {
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: underline;
  font-size: 14px;
  cursor: pointer;
}

button {
  border: 0;
  padding: 3%;
  font-size: 12px;
  margin-top: 10px;
  border-radius: 2px;
  background-color: #CCCCCC;
  cursor: pointer;
}
</style>

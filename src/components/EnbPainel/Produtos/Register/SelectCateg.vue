<template>
  <div class='SelectCateg'>
    <div class="cont-categ">
      <div class="header">Categorias</div>
      <div class="cont">
        <input-categ
        v-for="(categ, key) in Categorias"
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
        <input-reg
        text="Nome da Categoria"
        :label="{ marginLeft: '5px', textAlign: 'left', marginTop: '5px' }"
        :input="{ width: '95%', border: 'thin solid #CCCCCC', borderRadius: '5px', padding: '2%', fontSize: '16px' }"
        />
        <input-select
        :data="Categorias"
        text="Filha de"
        :label="{ textAlign: 'left', marginTop: '5px', marginLeft: '5px' }"
        :input="{ width: '100%', padding: '2%', fontSize: '16px', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
        />
        <div>
          <button>Adicionar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import InputCateg from './InputCateg'
import InputReg from './InputReg'
import InputSelect from './InputSelect'
export default {
  name: 'SelectCateg',
  components: { InputCateg, InputReg, InputSelect },
  data () {
    return {
      ShowAddCateg: false
    }
  },
  computed: {
    ...mapGetters(['Categorias'])
  }
}
</script>

<style scoped>
.SelectCateg {
  width: 50%;
  border-radius: 5px;
}

.cont-categ {
  height: 180px;
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

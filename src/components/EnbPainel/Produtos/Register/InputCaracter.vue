<template>
  <div class='InputCaracter'>
    <div class="cont-caracter">
      <div class="caracter"
      v-for="(c, key) in SelectedProdEdit.caracter"
      :key="key"
      >
        <point-icon/><i>{{ c.name }}</i>
        <div class="del-caracter" @click="DelCaracterProd(c.id)">x</div>
      </div>
    </div>
    <input-reg
    text="Caracteristica"
    :value="name"
    @update:model-value="newValue => name = newValue"
    :cont="{ textAlign: 'left' }"
    :label="{ marginLeft: '3px' }"
    :input="{ fontSize: '20px', padding: '1.5%', width: '97%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
    />
    <div class="cont-add">
      <div class="btn-add" @click="push">+Adicionar</div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import PointIcon from '../../Icons/PointIcon'
import InputReg from './InputReg'
export default {
  name: 'InputCaracter',
  components: { InputReg, PointIcon },
  computed: {
    ...mapGetters(['SelectedProdEdit']),
  },
  data () {
    return {
      name: ''
    }
  },
  methods: {
    ...mapActions(['PushCaracterProd', 'DelCaracterProd']),
    push () {
      this.PushCaracterProd(this.name)
        .then(() => this.name = '')
    }
  }
}
</script>

<style scoped>
.InputCaracter {
  padding-top: 1.5%;
}

.caracter {
  text-align: left;
  padding: 0%;
  display: flex;
  align-items: center;
}

.cont-add {
  display: flex;
  justify-content: end;
}

.btn-add {
  cursor: pointer;
  text-decoration: underline;
}

.del-caracter {
  border: thin solid #CCCCCC;
  background-color: #EEEEEE;
  font-size: 12px;
  padding: 0.2%;
  margin-left: 1%;
  cursor: pointer;
}
</style>

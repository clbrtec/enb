<template>
  <div class='EnbSearch'>
    <enb-input
    :value="str"
    @update:modelValue="newValue => str = newValue"
    label="Digite aqui o que você deseja encontrar..."
    :cont="{ width: '85%' }"
    :input="{ width: '90%' }"
    />
    <enb-button label="buscar" @click="search"/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import EnbInput from '../EnbInput'
import EnbButton from '../EnbButton';
export default {
  name: 'EnbSearch',
  components: { EnbInput, EnbButton },
  data () {
    return {
      str: ''
    }
  },
  methods: {
    ...mapActions(['SearchProd01', 'ToggleSearchLoad', 'SetModal01']),
    search () {
      this.ToggleSearchLoad(true)
      this.$router.push('/search')
      this.SearchProd01(this.str)
        .then(() => this.ToggleSearchLoad(false))
        .then(() => this.SetModal01({ active: false }))
    }
  }
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

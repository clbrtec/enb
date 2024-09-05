<template>
  <div class='EnbSearch02'>
    <input v-model="str" type="text">
    <button @click="search">Buscar</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'EnbSearch02',
  data () {
    return {
      str: ''
    }
  },
  methods: {
    ...mapActions(['SearchProd01', 'ToggleSearchLoad']),
    search () {
      this.ToggleSearchLoad(true)
      this.$router.push('/search')
      this.SearchProd01(this.str)
        .then(() => this.ToggleSearchLoad(false))
    }
  }
}
</script>

<style scoped>
.EnbSearch02 {
  width: 35%;
  display: flex;
  justify-content: center;
}

input {
  border: 0;
  font-size: 16px;
  padding: 2%;
  background-color: #CCCCCC;
}

input:focus {
  outline: none;
}

button {
  border: 0;
  font-size: 12px;
  width: 18%;
  cursor: pointer;
}
</style>

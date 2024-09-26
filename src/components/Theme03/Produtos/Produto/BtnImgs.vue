<template>
  <div class='BtnImgs'>
    <button @click="Select">Ver Fotos</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'BtnImgs',
  props: ['data'],
  methods: {
    ...mapActions(['SetItem01']),
    Select () {
      this.SetItem01(this.data)
        .then(() => this.$router.push('/produtoview'))
    }
  }
}
</script>

<style scoped>
.BtnImgs {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
}

button {
  border: 0;
  background-color: orange;
  padding: 2%;
  border-radius: 8px;
  cursor: pointer;
}
</style>

<template>
  <div class='LinkCateg' @click="push">
    {{ data.name }}
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'LinkCateg',
  props: ['data'],
  methods: {
    ...mapActions(['FilterCateg']),
    router () {
      return new Promise((resolve) => {
        this.$router.push('/categorias')
        resolve()
      })
    },
    push () {
      this.router()
        .then(() => this.FilterCateg(this.data.name))
    }
  }
}
</script>

<style scoped>
.LinkCateg {
  background-color: #EEEEEE;
  border: thin solid #CCCCCC;
  padding: 4px;
  border-radius: 10px;
  cursor: pointer;
  margin: 4px;
}
</style>

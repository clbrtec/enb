<template>
  <div class='SubLinkNave' @click="push">
    {{ data.name }}
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'SubLinkNave',
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
.SubLinkNave {
  text-align: left;
  padding: 5%;
  cursor: pointer;
}

.SubLinkNave:hover {
  background-color: #CCCCCC;
}
</style>

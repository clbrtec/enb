<template>
  <div class='EnbLink' @click="push">
    <div class="icon">
      <img :src="data.icon">
    </div>
    <div :class="{ selected: CategSelected === data.label }" class="label">{{ data.name }}</div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'EnbLink',
  props: ['data'],
  computed: {
    ...mapGetters(['CategSelected'])
  },
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
.EnbLink {
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 2%;
  padding-right: 2%;
  font-size: 18px;
  margin-top: 1%;
}

.icon {
  padding-right: 5%;
}

.label {
  cursor: pointer;
}

.selected {
  color: orange
}

img {
  width: 20px;
  height: 20px;
  cursor: pointer;
}
</style>

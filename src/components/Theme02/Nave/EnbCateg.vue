<template>
  <div class='EnbCateg'>
    <link-categ
    v-for="(c, key) in Categs"
    :key="key"
    :data="c"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import LinkCateg from './LinkCateg'
export default {
  name: 'EnbCateg',
  components: { LinkCateg },
  computed: {
    ...mapGetters(['Categorias']),
    Categs () {
      return this.Categorias.filter(c => c.name !== '')
    }
  }
}
</script>

<style scoped>
.EnbCateg {
  width: 78%;
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  margin-top: 70px;
  background-color: #FFFFFF;
  border: thin solid #CCCCCC;
  padding: 5px;
  margin-left: 10%;
}
</style>

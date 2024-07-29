<template>
  <div class='SelectCateg'>
    <select @change="filter">
      <option value="">Categoria</option>
      <option
      v-for="(c, k) in Categs"
      :key="k"
      :value="c.name"
      >
        {{ c.name }}
      </option>
    </select>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'SelectCateg',
  computed: {
    ...mapGetters(['Categorias']),
    Categs () {
      return this.Categorias.filter(c => c.name !== '')
    }
  },
  methods: {
    ...mapActions(['FilterCateg']),
    filter (e) {
      this.FilterCateg(e.target.value)
    }
  }
}
</script>

<style scoped>
.SelectCateg {
  width: 30%;
  margin-left: 15px;
}

select {
  width: 100%;
  padding: 3%;
  margin-top: -4%;
  border: thin solid #CCCCCC;
  border-radius: 5px;
  font-size: 18px;
}
</style>

<template>
  <div class='NaveProd'>
    <span :class="{ focus: StatusProd }" @click="ChangeStatusProd(true)">
      Publicado ({{ pub }})
    </span>
    <span>|</span>
    <span :class="{ focus: !StatusProd }" @click="ChangeStatusProd(false)">
      Arquivado ({{ toFile }})
    </span>
    <select-categ/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import SelectCateg from './SelectCateg'
export default {
  name: 'NaveProd',
  components: { SelectCateg },
  computed: {
    ...mapGetters(['StatusProd', 'ProdutosTotal01']),
    toFile () {
      return this.ProdutosTotal01.filter(p => !p.status).length
    },
    pub () {
      return this.ProdutosTotal01.filter(p => p.status).length
    }
  },
  methods: {
    ...mapActions(['ChangeStatusProd'])
  }
}
</script>

<style scoped>
.NaveProd {
  width: 73%;
  display: flex;
}

span {
  padding-left: 1%;
  font-weight: bold;
  cursor: pointer;
  color: #CCCCCC;
}

.focus {
  color: #000000
}
</style>

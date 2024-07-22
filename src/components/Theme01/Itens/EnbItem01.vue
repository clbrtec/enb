<template>
  <div class='EnbItem01'>
    <div class="cont-img">
      <div class="btn-action" v-if="Profile01.logged && Profile01.admin">
        <edit-icon @click="edit"/>
        <edit-fast-icon @click="fastEdit"/>
        <delete-icon @click="del"/>
      </div>
      <enb-itemImg01 :data="data"/>
    </div>
    <div class="cont-desc">
      {{ data.name }} - {{ data.un }}
    </div>
    <div class="cont-valor">
      R$ {{ data.preco.toFixed(2).replace('.', ',') }}
    </div>
    <div class="cont-btn">
      <enb-itemBtn01 :data="data"/>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import EnbItemImg01 from './EnbItemImg01'
import EnbItemBtn01 from './EnbItemBtn01.vue'
import EditFastIcon from '@/components/EnbPainel/Icons/EditFastIcon'
import EditIcon from '@/components/EnbPainel/Icons/EditIcon'
import DeleteIcon from '@/components/EnbPainel/Icons/DeleteIcon'
export default {
  name: 'EnbItem01',
  components: { EnbItemImg01, EnbItemBtn01, EditFastIcon, EditIcon, DeleteIcon },
  computed: {
    ...mapGetters(['Profile01', 'SelectedProds'])
  },
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    ...mapActions(['PushProdEdit', 'ClearProdEdit', 'SetModal01', 'DeleteProd']),
    edit () {
      this.ClearProdEdit()
        .then(() => this.PushProdEdit(this.data))
        .then(() => {
          this.$router.push('/painel/produtos/edit')
        })
    },
    fastEdit () {
      this.ClearProdEdit()
        .then(() => this.PushProdEdit(this.data))
        .then(() => {
          this.SetModal01({ component: 'FastProdEdit', active: true })
        })
    },
    del () {
      this.ClearProdEdit()
        .then(() => this.PushProdEdit(this.data))
        .then(() => {
          this.DeleteProd(this.SelectedProds)
        })
    }
  }
}
</script>

<style scoped>
.EnbItem01 {
  width: 200px;
  height: 300px;
  /* border: thin solid #CCCCCC; */
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0.5px #CCCCCC;
  margin: 2%;
}

.cont-img {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 180px;
}
.cont-desc {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.cont-valor {
  width: 100%;
  height: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
}
.cont-btn {
  width: 100%;
  height: 50px;
}

.btn-action {
  display: flex;
  position: absolute;
  background-color: #FFFFFF;
}
</style>

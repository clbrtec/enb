<template>
  <div class='ProdAction'>
    <div class="cont">
      <edit-icon @click="edit"/>
    </div>
    <div class="cont">
      <edit-fast-icon/>
    </div>
    <div class="cont">
      <diretory-icon/>
    </div>
    <div class="cont">
      <eyes-icon :options="{ width: '30px', height: '30px', action: true }"/>
    </div>
    <div @click="copy" class="cont">
      <copy-icon/>
    </div>
    <div @click="del" class="cont">
      <delete-icon/>
    </div>
    <div class="cont-add">
      <add-icon @click="add"/>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import DeleteIcon from '../../Icons/DeleteIcon'
import CopyIcon from '../../Icons/CopyIcon'
import EyesIcon from '../../Icons/EyesIcon'
import DiretoryIcon from '../../Icons/DiretoryIcon'
import EditFastIcon from '../../Icons/EditFastIcon'
import EditIcon from '../../Icons/EditIcon'
import AddIcon from '../../Icons/AddIcon'
export default {
  name: 'ProdAction',
  components: { AddIcon, EditIcon, EditFastIcon, DiretoryIcon, EyesIcon, CopyIcon, DeleteIcon },
  computed: {
    ...mapGetters(['SelectedProds']),
    empty () {
      return this.SelectedProds[0].id === ''
    }
  },
  methods: {
    ...mapActions(['ClearProdEdit', 'PushProd', 'CopyProd', 'DeleteProd']),
    del () {
      if(this.empty) {
        alert('selecione um item')
        return
      }
      this.DeleteProd(this.SelectedProds)
        .then(() => {
          this.ClearProdEdit()  
        })
    },
    add () {
      if(!this.empty) {
        this.ClearProdEdit()
      }
      this.$router.push('/painel/produtos/register')
    },
    edit () {
      if(this.empty) {
        alert('Selecione um item')
        return
      }
      this.$router.push('/painel/produtos/edit')
    },
    copy () {
      if(this.empty) {
        alert('Selecione um item')
        return
      }
      this.PushProd(this.SelectedProds[0])
        .then(res => this.CopyProd(res))
        .then(() => {
          this.$router.push('/painel/produtos/copy')
        })
    }
  }
}
</script>

<style scoped>
.ProdAction {
  height: 8%;
  display: flex;
  align-items: center;
  justify-content: end;
}

.cont {
  width: 3.5%;
}
.cont-add {
  padding-right: 2%;
}
</style>

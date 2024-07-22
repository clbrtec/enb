<template>
  <div class='ProdAction'>
    <div class="cont">
      <edit-icon
      @click="edit"
      text="Editar"
      :active="true"
      :optionsLabel="{ marginTop: '65px' }"
      />
    </div>
    <div class="cont">
      <edit-fast-icon
      @click="fastEdit"
      text="Edição rápida"
      :active="true"
      :optionsLabel="{ marginTop: '65px' }"
      />
    </div>
    <div class="cont">
      <diretory-icon
      text="Arquivar"
      :active="true"
      :optionsLabel="{ marginTop: '65px' }"
      />
    </div>
    <div @click="view" class="cont">
      <eyes-icon
      :options="{ width: '30px', height: '30px', action: true }"
      text="Visualizar"
      :active="true"
      :optionsLabel="{ marginTop: '65px' }"
      />
    </div>
    <div @click="copy" class="cont">
      <copy-icon
      :options="{ width: '30px', height: '30px', action: true }"
      text="Copiar produto"
      :active="true"
      :optionsLabel="{ marginTop: '65px' }"
      />
    </div>
    <div @click="del" class="cont">
      <delete-icon
      :options="{ width: '30px', height: '30px', action: true }"
      text="Excluir"
      :active="true"
      :optionsLabel="{ marginTop: '65px' }"
      />
    </div>
    <div class="cont-add">
      <add-icon
      @click="add"
      text="Adiconar um produto"
      :active="true"
      :optionsLabel="{ width: '100px', marginTop: '90px', marginRight: '50px' }"
      />
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
    ...mapActions(['ClearProdEdit', 'PushProd', 'CopyProd', 'DeleteProd', 'SetModal', 'SetItem01', 'PushMsg']),
    del () {
      if(this.empty) {
        this.PushMsg({ msg: 'Selecione um produto', color: '#eba134' })
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
        this.PushMsg({ msg: 'Selecione um produto', color: '#eba134' })
        return
      }
      this.$router.push('/painel/produtos/edit')
    },
    fastEdit () {
      if(this.empty) {
        this.PushMsg({ msg: 'Selecione um produto', color: '#eba134' })
        return
      }
      if(this.SelectedProds.length > 1) {
        this.PushMsg({ msg: 'Selecione apenas um produto', color: '#eba134' })
        return
      }
      this.SetModal({ component: 'FastProdEdit', active: true })
    },
    copy () {
      if(this.empty) {
        this.PushMsg({ msg: 'Selecione um produto', color: '#eba134' })
        return
      }
      this.PushProd(this.SelectedProds[0])
        .then(res => this.CopyProd(res))
        .then(() => {
          this.$router.push('/painel/produtos/copy')
        })
    },
    view () {
      if(this.empty) {
        this.PushMsg({ msg: 'Selecione um produto', color: '#eba134' })
        return
      }
      if(this.SelectedProds.length > 1) {
        this.PushMsg({ msg: 'Selecione apenas um produto', color: '#eba134' })
        return
      }
      this.SetItem01(this.SelectedProds[0])
        .then(() => {
          this.$router.push('/itemview')
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

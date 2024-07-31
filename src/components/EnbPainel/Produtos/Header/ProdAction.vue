<template>
  <div class='ProdAction'>
    <nave-prod/>
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
      v-if="StatusProd"
      @click="toFile(false)"
      text="Arquivar"
      :active="true"
      :optionsLabel="{ marginTop: '65px' }"
      />
      <checked-icon
      v-if="!StatusProd"
      @click="toFile(true)"
      text="Publicar"
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
    <div
    @click="del"
    class="cont">
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
import NaveProd from '../Nave/NaveProd'
import CheckedIcon from '../../Icons/CheckedIcon'
export default {
  name: 'ProdAction',
  components: { AddIcon, EditIcon, EditFastIcon, DiretoryIcon, EyesIcon, CopyIcon, DeleteIcon, NaveProd, CheckedIcon },
  computed: {
    ...mapGetters(['SelectedProds', 'StatusProd']),
    empty () {
      return this.SelectedProds[0].id === ''
    }
  },
  methods: {
    ...mapActions(['ClearProdEdit', 'PushProd', 'CopyProd', 'DeleteProd', 'SetModal', 'SetItem01', 'PushMsg', 'ToFileProd']),
    del () {
      if(this.empty) {
        this.PushMsg({ msg: 'Selecione um produto', color: '#eba134' })
        return
      }
      this.SetModal({ 
        component: 'AskAction',
        active: true,
        ask: 'Tem certeza que deseja excluir o produto?',
        action: 'DeleteProd',
        payload: this.SelectedProds
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
          this.PushMsg({ msg: `Produto copiado com sucesso.`, color: '#326e3d' })
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
    },
    toFile (payload) {
      if(this.empty) {
        this.PushMsg({ msg: 'Selecione um ou mais produtos', color: '#eba134' })
        return
      }
      this.ToFileProd(payload)
        .then(() => {
          let str = payload ? 'puclicado' : 'arquivado'
          this.PushMsg({ msg: `Produto ${str} com sucesso.`, color: '#326e3d' })
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

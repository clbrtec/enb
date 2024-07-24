<template>
  <div class='ClientsList'>
    <div style="width: 12%">
      {{ data.nome }}
    </div>
    <div style="width: 12%">
      {{ data.usuario }}
    </div>
    <div style="width: 26%">
      {{ data.email }}
    </div>
    <div style="width: 10%">
      {{ data.cidade }} - {{ data.numero }}, {{ data.uf }}
    </div>
    <div style="width: 10%">
      Pedidos
    </div>
    <div style="width: 10%">
      Dinheiro gasto
    </div>
    <div style="width: 14%">
      Último pedido
    </div>
    <div class="acoes">
      <eyes-icon
      @click="view"
      text="Visualizar"
      :active="true"
      :optionsLabel="{ marginTop: '50px' }"
      :options="{ width: '20px', height: '20px', action: true }"/>
      <edit-icon
      @click="edit"
      text="Editar cliente"
      :active="true"
      :optionsLabel="{ marginTop: '80px', marginRight: '20px' }"
      :options="{ width: '22px', height: '22px' }"
      />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import EditIcon from '../../Icons/EditIcon'
import EyesIcon from '../../Icons/EyesIcon'
export default {
  name: 'ClientsList',
  components: { EditIcon, EyesIcon },
  props: ['data'],
  data () {
    return {
      checked: false
    }
  },
  computed: {
  },
  methods: {
    ...mapActions(['SetClientEdit', 'SetClientView']),
    edit () {
      this.SetClientEdit(this.data)
         .then(() => {
           this.$router.push('/painel/client/edit')
         })
    },
    view () {
      this.SetClientView(this.data)
        .then(() => {
          this.$router.push('/painel/client/view')
        })
    }
  }
}
</script>

<style scoped>
.ClientsList {
  height: 6%;
  display: flex;
  align-items: center;
  border-bottom: thin solid #CCCCCC;
  padding: 1%;
}

.acoes {
  width: 6%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

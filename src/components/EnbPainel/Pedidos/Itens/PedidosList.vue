<template>
  <div class='PedidosList'>
    <div style="width: 5%">
      <status-icon
      v-if="data.status === 0"
      :options="{ width: '20px', height: '20px', action: true }"
      text="Recebido"
      :active="true"
      :optionsLabel="{ marginTop: '50px' }"
      />
      <good-icon
      v-if="data.status === 1"
      :options="{ width: '20px', height: '20px', action: true }"
      text="Concluído"
      :active="true"
      :optionsLabel="{ marginTop: '50px' }"
      />
    </div>
    <div style="width: 10%">
      <span>#{{ data.id }}</span>
      de
      <span>{{ data.usuario.nome }} {{ data.usuario.sobrenome }}</span>
    </div>
    <div style="width: 25%">
      <div>{{ qtdeItens }} {{ strItens }}</div>
      <div
      v-for="(i, k) in data.itens"
      :key="k"
      >
        {{ i.qtda + 'x' + i.name }}
      </div>
    </div>
    <div style="width: 30%">
      {{ data.usuario.endereco }} - {{  data.usuario.numero  }} - {{  data.usuario.bairro  }} - {{ data.usuario.bairro }}
    </div>
    <div style="width: 15%">
      R$ {{ total }}
    </div>
    <div style="width: 10%">
      {{ data.data }}
    </div>
    <div class="acoes">
      <good-icon
      :options="{ width: '15px', height: '15px', action: true }"
      text="Marcar como completo"
      :active="true"
      :optionsLabel="{ marginTop: '65px' }"
      />
      <eyes-icon
      :options="{ width: '18px', height: '18px', action: true }"
      text="Detalhes"
      :active="true"
      :optionsLabel="{ marginTop: '65px' }"
      />
      <delete-icon
      :options="{ width: '18px', height: '18px', action: true }"
      text="Excluir"
      :active="true"
      :optionsLabel="{ marginTop: '65px' }"
      />
    </div> 
  </div>
</template>

<script>
import StatusIcon from '../../Icons/StatusIcon'
import GoodIcon from '../../Icons/GoodIcon'
import EyesIcon from '../../Icons/EyesIcon'
import DeleteIcon from '../../Icons/DeleteIcon'
export default {
  name: 'PedidosList',
  components: { StatusIcon, GoodIcon, EyesIcon, DeleteIcon },
  props: ['data'],
  computed: {
    total () {
      return this.data.itens.map(i => i.preco * i.qtda).reduce((t, n) => t + n, 0)
    },
    qtdeItens () {
      return this.data.itens.map(i => i.qtda).reduce((t, n) => t + n, 0)
    },
    strItens () {
      return this.qtdeItens > 1 ? 'itens' : 'item'
    }
  }
}
</script>

<style scoped>
.PedidosList {
  display: flex;
  align-items: center;
  border-bottom: thin solid #CCCCCC;
  padding: 1%;
}

.acoes {
  width: 6%;
  justify-content: center;
  align-items: center;
}
</style>

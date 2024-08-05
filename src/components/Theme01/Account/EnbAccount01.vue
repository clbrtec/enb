<template>
  <div class='EnbAccount01'>
    <div class="cont-all">
      <div class="title-action">
        <div class="title">
          Minha conta
        </div>
        <div class="action">
          <button>Editar</button>
          <button>Atualizar</button>
        </div>
      </div>
      <div class="block">
        <input-reg
        disabled
        :value="Profile.usuario"
        text="Usuário"
        :cont="{ width: '50%' }"
        :label="{ textAlign: 'left', marginLeft: '2%' }"
        :input="{ fontSize: '20px', padding: '1.5%', width: '94%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
        />
        <input-reg
        disabled
        :value="Profile.email"
        text="Email"
        :cont="{ width: '50%' }"
        :label="{ textAlign: 'left', marginLeft: '2%' }"
        :input="{ fontSize: '20px', padding: '1.5%', width: '94%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
        />
      </div>
      <div class="block">
        <input-reg
        disabled
        :value="Profile.nome"
        text="Primeiro nome"
        :cont="{ width: '50%' }"
        :label="{ textAlign: 'left', marginLeft: '2%' }"
        :input="{ fontSize: '20px', padding: '1.5%', width: '94%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
        />
        <input-reg
        disabled
        :value="Profile.sobrenome"
        text="Sobrenome"
        :cont="{ width: '50%' }"
        :label="{ textAlign: 'left', marginLeft: '2%' }"
        :input="{ fontSize: '20px', padding: '1.5%', width: '94%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
        />
      </div>
      <div class="block">
        <input-reg
        disabled
        :value="Profile.cpf"
        text="CPF"
        :cont="{ width: '30%', paddingLeft: '0.6%' }"
        :label="{ textAlign: 'left', marginLeft: '1%' }"
        :input="{ fontSize: '20px', padding: '2.4%', width: '94%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
        />
        <input-reg
        disabled
        :value="Profile.celular"
        text="Celular"
        :cont="{ width: '50%' }"
        :label="{ textAlign: 'left', marginLeft: '3%' }"
        :input="{ fontSize: '20px', padding: '1.5%', width: '92%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
        />
        <input-reg
        disabled
        :value="Profile.cep"
        text="CEP"
        :cont="{ width: '18.5%' }"
        :label="{ textAlign: 'left', marginLeft: '2%' }"
        :input="{ fontSize: '20px', padding: '4%', width: '92%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
        />
      </div>
      <div class="block">
        <input-reg
        disabled
        :value="Profile.bairro"
        text="Bairro"
        :cont="{ width: '30%', paddingLeft: '0.6%' }"
        :label="{ textAlign: 'left', marginLeft: '1%' }"
        :input="{ fontSize: '20px', padding: '2.4%', width: '94%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
        />
        <input-reg
        disabled
        :value="Profile.endereco"
        text="Endereço"
        :cont="{ width: '50%' }"
        :label="{ textAlign: 'left', marginLeft: '3%' }"
        :input="{ fontSize: '20px', padding: '1.5%', width: '92%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
        />
        <input-reg
        disabled
        :value="Profile.numero"
        text="Número"
        :cont="{ width: '18.5%' }"
        :label="{ textAlign: 'left', marginLeft: '2%' }"
        :input="{ fontSize: '20px', padding: '4%', width: '92%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
        />
      </div>
      <div class="block">
        <input-reg
        disabled
        :value="Profile.cidade"
        text="Cidade"
        :cont="{ width: '50%' }"
        :label="{ textAlign: 'left', marginLeft: '2%' }"
        :input="{ fontSize: '20px', padding: '1.5%', width: '94%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
        />
        <input-reg
        disabled
        :value="Profile.uf"
        text="Estado(UF)"
        :cont="{ width: '50%' }"
        :label="{ textAlign: 'left', marginLeft: '2%' }"
        :input="{ fontSize: '20px', padding: '1.5%', width: '94%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
        />
      </div>
      <div class="title">
        Meus pedidos
      </div>
      <div class="cont-pedidos">
        <pedidos-header/>
      </div>
      <div class="cont">
        <pedidos-list
        v-for="(p, key) in PedidosClient"
        :key="key"
        :data="p"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import InputReg from '@/components/EnbPainel/Produtos/Register/InputReg'
import PedidosHeader from '../Pedidos/header/PedidosHeader'
import PedidosList from '../Pedidos/Itens/PedidosList'
export default {
  name: 'EnbAccount01',
  components: { InputReg, PedidosHeader, PedidosList },
  computed: {
    ...mapGetters(['Pedidos', 'Profile']),
    PedidosClient () {
      return this.Pedidos.filter(p => p.usuario.id === this.Profile.id)
    }
  }
}
</script>

<style scoped>
.EnbAccount01 {
  width: 100%;
  height: 100%;
  margin: auto;
  overflow: auto;
}

.cont-all {
  width: 75%;
  margin: auto;
}

.title-action {
  display: flex;
  align-items: center;
  padding-top: 2%;
}
.title {
  width: 50%;
  display: flex;
  padding: 1.5%;
  font-size: 28px;
}

.action {
  width: 50%;
  text-align: right;
}

.block {
  display: flex;
  padding: 0.5%;
}

.cont-pedidos {
  width: 95%;
  margin: auto;
}

.cont {
  width: 95%;
  margin: auto;
  padding-bottom: 10%;
}

button {
  border: 0;
  font-size: 16px;
  padding: 2%;
  border-radius: 5px;
  background-color: #333333;
  color: #FFFFFF;
  cursor: pointer;
  margin-right: 2.5%;
}
</style>

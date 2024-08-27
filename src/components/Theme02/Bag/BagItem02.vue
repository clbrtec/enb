<template>
  <div class='BagItem02'>
    <div class="cont-img">
      <img :src="data.img[0]">
    </div>
    <div class="cont">
      <div class="desc">{{ data.name }}</div>
      <div class="qtda-valor">
        <div class="qtda">
          <bag-qtde02 :data="data"/>
        </div>
        <div class="valor">
          R$ {{ preco }}
        </div>
        <div class="del">
          <delete-icon @click="DeleteCheckout01(data)"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import BagQtde02 from './BagQtde02'
import DeleteIcon from '../Icons/DeleteIcon'
export default {
  name: 'BagItem02',
  components: { BagQtde02, DeleteIcon },
  props: ['data'],
  computed: {
    preco () {
      return (this.data.preco * this.data.qtda).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
    }
  },
  methods: {
    ...mapActions(['DeleteCheckout01'])
  }
}
</script>

<style scoped>
.BagItem02 {
  display: flex;
  align-items: center;
  padding-bottom: 2%;
  border-bottom: thin solid #CCCCCC;
}

.cont-img {
  width: 20%;
  padding: 2%;
}

img {
  width: 40px;
  height: 40px;
}

.cont {
  width: 80%;
  height: 100%;
}

.desc {
  display: flex;
  padding: 3%;
  padding-left: 0;
  align-items: center;
  text-align: left;
}

.qtda-valor {
  height: 50%;
  display: flex;
  justify-content: center;
}

.qtda {
  width: 30%;
  display: flex;
  align-items: center;
  
}

.valor {
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.del {
  width: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

<template>
  <div @click="set" class='SearchItem01'>
    <div class="cont-img">
      <img :src="data.img">
    </div>
    <div class="cont">
      <div class="desc">{{ data.name }}</div>
      <div class="valor">
        R$ {{ data.preco }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'SearchItem01',
  props: ['data', 'out'],
  emits: ['update:out'],
  methods: {
    ...mapActions(['SetItem01']),
    set () {
      this.SetItem01(this.data)
      this.$router.push('/itemview')
      this.$emit('update:out', true)
    }
  }
}
</script>

<style scoped>
.SearchItem01 {
  width: 90%;
  display: flex;
  align-items: center;
  height: 10%;
  margin: auto;
  border-bottom: thin solid #EEEEEE;
  cursor: pointer;
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
  align-items: center;
  height: 50%;
  text-align: left;
}

.valor {
  width: 100%;
  display: flex;
  align-items: center;
}
</style>

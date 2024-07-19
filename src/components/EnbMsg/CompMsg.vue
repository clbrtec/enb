<template>
  <div class='CompMsg' :style="{ backgroundColor: data.color }">
    <div class="msg">
      {{ data.msg }}
    </div>
    <div class="btn">
      <close-icon @click="DelMsg(data.id)" color="#FFFFFF"/>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import CloseIcon from '../EnbPainel/Icons/CloseIcon'
export default {
  name: 'CompMsg',
  components: { CloseIcon },
  props: ['data'],
  methods: {
    ...mapActions(['DelMsg'])
  },
  mounted () {
    setTimeout(() => {
      this.DelMsg(this.data.id)
    }, 4000);
  }
}
</script>

<style scoped>
.CompMsg {
  display: flex;
  margin: 5%;
  border-radius: 5px;
}

.msg {
  width: 90%;
  padding: 6%;
  text-align: left;
}

.btn {
  width: 10%;
  display: flex;
  justify-content: center;
  padding: 2%;
}
</style>

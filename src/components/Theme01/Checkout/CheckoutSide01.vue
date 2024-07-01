<template>
  <div class='CheckoutSide01'>
    <div class="black" @click="out=true"></div>
    <div :class="{ contOut: out }" class="cont" ref="teste"></div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'CheckoutSide01',
  data () {
    return {
      out: false,
      end: 0
    }
  },
  mounted () {
    this.$refs.teste.addEventListener("animationend", this.animationEnd,false);
  },
  methods: {
    ...mapActions(['ToggleCheckout01']),
    animationEnd () {
      this.end++
      if (this.end > 1) {
        this.ToggleCheckout01(false)
      }
    }
  }
}
</script>

<style scoped>
.CheckoutSide01 {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 999;
}

.black {
  width: 100%;
  height: 100%;
  opacity: 0.50;
  position: absolute;
  background-color: #000000;
}

.cont {
  width: 30%;
  height: 100%;
  position: absolute;
  right: 0;
  background-color: #FFFFFF;
  animation: ShowIn 0.5s;
}

.contOut {
  width: 0%;
  animation: ShowOut 0.5s;
}

@keyframes ShowIn {
  from {
    width: 0%;
  }
  to {
    width: 30%;
  }
}

@keyframes ShowOut {
  from {
    width: 30%;
  }
  to {
    width: 0%;
  }
}
</style>

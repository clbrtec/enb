<template>
  <div class='EnbCheck' :style="options.style">
    <div class="cont-l">
      <label>{{ options.text }}</label>
    </div>
    <div class="cont-c">
      <div @click="changeState" class="cont-check">
        <div class="cicle" :class="{ on: state, off: !state }"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EnbCheck',
  props: {
    startState: {
      type: Boolean,
      default: false
    },
    options: {
      type: Object,
      default: () => ({ key: '', value: '', text: 'checkbox', disabled: false, style: {}, processing: false })
    }
  },
  methods: {
    changeState () {
      if (this.options.disabled) {
        return
      }
      //this.state = !this.state
      this.state = true
      this.$emit('returnValue', { key: this.options.key, value: this.state })
    }
  },
  watch: {
    startState (nv) {
      this.state = nv
    }
  },
  created () {
    this.state = this.startState
  },
  data () {
    return {
      state: false
    }
  }
}
</script>

<style scoped>
.EnbCheck {
  display: flex;
  align-items: center;
  padding: 1.7%;
  width: 93.3%;
  margin: auto;
  margin-top: 2%;
  border: thin solid #CCCCCC;
  border-radius: 5px;
  background-color: #FFFFFF;
}
.cont-l {
  width: 50%;
  text-align: left;
}
.cont-c {
  display: flex;
  flex-direction: row-reverse;
  width: 49%;
}
.cont-check {
  width: 35px;
  height: 15px;
  border-radius: 10px;
  background-color: #8a8a8a;
  cursor: pointer;
}
.cicle {
  width: 20px;
  height: 20px;
  border-radius: 100%;
  margin-top: -2px;
  position: relative;
  background-color: #CCCCCC;
  box-shadow: 0px 0px 3px 0.05px #B3B3B3;
}
label {
  padding-left: 2%;
  white-space: nowrap;
  overflow: hidden;
}
.on {
  animation: startOn 0.2s forwards;
}
.off {
  animation: startOff 0.2s forwards;
}
@keyframes startOn {
  0% {
    margin-left: 0px;
    background-color: #CCCCCC;
  }
  100% {
    margin-left: 15px;
    background-color: #333333;
  }
}
@keyframes startOff {
  0% {
    margin-left: 15px;
    background-color: #333333;
  }
  100% {
    margin-left: 0px;
    background-color: #CCCCCC;
  }
}
</style>
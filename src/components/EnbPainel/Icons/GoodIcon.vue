<template>
  <div class='GoodIcon' @mouseenter="textShow=true" @mouseleave="textShow=false">
    <svg :width="options.width" :height="options.height" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path fill="none" stroke="#000000" stroke-width="2" d="M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M7,12 L11,15 L16,8"/>
    </svg>
    <div
    :style="optionsLabel"
    :class="{ active: !active }"
    class="label"
    v-if="textShow"
    >
      {{ text }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodIcon',
  props: {
    text: {
      type: String,
      default: ''
    },
    optionsLabel: {
      type: Object,
      default: () => ({})
    },
    active: {
      type: Boolean,
      default: false
    },
    options: {
      type: Object,
      default: () => ({ width: '15px', height: '15px' })
    }
  },
  data () {
    return {
      textShow: false
    }
  }
}
</script>

<style scoped>
.GoodIcon {
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
}

.label {
  background-color: #FFFFFF;
  border: thin solid #CCCCCC;
  border-radius: 5px;
  position: absolute;
  padding: 0.5%;
}

.active {
  display: none;
}
</style>

<template>
  <div class='EditIcon' @mouseenter="textShow=true" @mouseleave="textShow=false">
    <svg :width="options.width" :height="options.height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 10L14 6M18 10L21 7L17 3L14 6M18 10L17 11M14 6L8 12V16H12L14.5 13.5M20 14V20H12M10 4L4 4L4 20H7" :stroke="color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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
  name: 'EditIcon',
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
      default: () => ({ width: '30px', height: '30px' })
    },
    color: {
      type: String,
      default: '#000000'
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
.EditIcon {
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

<template>
  <div class='AddIcon' @mouseenter="textShow=true" @mouseleave="textShow=false">
    <svg width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
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
  name: 'AddIcon',
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
.AddIcon {
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

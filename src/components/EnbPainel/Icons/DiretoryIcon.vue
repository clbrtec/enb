<template>
  <div class='DiretoryIcon' @mouseenter="textShow=true" @mouseleave="textShow=false">
    <svg width="30px" height="30px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#000000">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M7.71 3h6.79l.51.5v10l-.5.5h-13l-.5-.5v-11l.5-.5h5l.35.15.85.85zm6.28 10v-1.51l.01-4v-1.5H7.7l-.86.86-.35.15H2v6h11.99zm-6.5-8h6.5l.01-.99H7.5l-.36-.15-.85-.85H2v3h4.28l.86-.86.35-.15zm2.29 4.07L8.42 7.7l.74-.69 2.22 2.22v.71l-2.29 2.21-.7-.72 1.4-1.35H8.42a2 2 0 0 0-1.35.61A1.8 1.8 0 0 0 6.54 12h-1a2.76 2.76 0 0 1 .81-2 3 3 0 0 1 2-.93h1.43z"/>
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
  name: 'DiretoryIcon',
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
.DiretoryIcon {
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

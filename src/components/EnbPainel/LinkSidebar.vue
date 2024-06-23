<template>
  <div class='LinkSidebar'>
    <div class="cont-link" @click="run">
      &nbsp;&nbsp;
      {{ data.text }}
    </div>
    <div v-if="showSubLink">
      <sub-link
      v-for="(link, k) in data.child"
      :key="k"
      :data="link"
      />
    </div>
  </div>
</template>

<script>
import SubLink from '@/components/EnbPainel/SubLink.vue'
export default {
  name: 'LinkSidebar',
  components: { SubLink },
  data () {
    return {
      showSubLink: false
    }
  },
  props: {
    data: {
      type: Object,
      default: () => ({ text: 'Modulo', path: '', child: [] })
    }
  },
  methods: {
    run () {
      if(typeof this.data.child === 'undefined' && typeof this.data.path !== 'undefined') {
        this.$router.push(this.data.path)
      }
      if(!this.showSubLink) {
        this.showSubLink = true
      } else {
        this.showSubLink = false
      }
    }
  }
}
</script>

<style scoped>
.LinkSidebar {
  cursor: pointer;
}

.cont-link {
  padding: 5%;
  text-align: left;
  border-left: 7px solid #FFFFFF;
}

.cont-link:hover {
  background-color: #EEEEEE;
  border-left: 7px solid #648EEA;
}
</style>

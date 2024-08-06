<template>
  <div class='LinkSidebar'>
    <div :class="{ contActive: $route.path.indexOf(data.path) >= 0 }" class="cont-link" @click="run">
      <component :is="data.icon"/>
      &nbsp;
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
import ProdIcon from './Icons/ProdIcon'
import ClientIcon from './Icons/ClientIcon'
import ListIcon01 from '../Theme01/Icons/ListIcon01'
import StoreIcon01 from '../Theme01/Icons/StoreIcon01'
import GiftIcon from '../EnbPainel/Icons/GiftIcon'
import SubLink from '@/components/EnbPainel/SubLink'
export default {
  name: 'LinkSidebar',
  components: { SubLink, ProdIcon, ClientIcon, ListIcon01, StoreIcon01, GiftIcon },
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
  display: flex;
  padding: 5%;
  justify-content: left;
  align-items: center;
  border-left: 7px solid #FFFFFF;
}

.cont-link:hover {
  background-color: #EEEEEE;
  border-left: 7px solid #648EEA;
}

.contActive {
  background-color: #EEEEEE;
  border-left: 7px solid #648EEA;
}
</style>

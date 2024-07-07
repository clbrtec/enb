<template>
  <div class='SearchCont01'>
    <div class="black" @click="out=true"></div>
    <div :class="{ contOut: out }" class="cont" ref="cont">
      <search-input01/>
      <search-result01>
        <search-item01
        v-for="(data, key) in ResultSearch01"
        :key="key"
        :data="data"
        v-model:out="out"
        />
      </search-result01>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import SearchInput01 from './SearchInput01'
import SearchResult01 from './SearchResult01'
import SearchItem01 from './SearchItem01'
export default {
  name: 'SearchCont01',
  components: { SearchInput01, SearchResult01, SearchItem01 },
  data () {
    return {
      out: false,
      end: 0
    }
  },
  mounted () {
    this.$refs.cont.addEventListener("animationend", this.animationEnd,false);
  },
  computed: {
    ...mapGetters(['ResultSearch01'])
  },
  methods: {
    ...mapActions(['ToggleSearch01']),
    animationEnd () {
      this.end++
      if (this.end > 1) {
        this.ToggleSearch01(false)
      }
    }
  }
}
</script>

<style scoped>
.SearchCont01 {
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
  animation: ShowOut 0.3s;
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

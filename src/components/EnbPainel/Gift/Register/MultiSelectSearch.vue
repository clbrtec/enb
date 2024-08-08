<template>
  <div class='MultiSelectSearch' v-show="show">
    <input v-model="str" type="text" ref="in" v-if="!noSearch"/>
    <div class="cont-result">
      <result-search
      v-for="(r, key) in Res"
      :key="key"
      :store="store"
      :dados="r"
      @update:show="$emit('update:show', false)"
      />
    </div>
  </div>
</template>

<script>
import ResultSearch from './ResultSearch'
export default {
  name: 'MultiSelectSearch',
  components: { ResultSearch },
  emits: ['update:show'],
  props: {
    show: {
      type: Boolean,
      default: false
    },
    store: {
      type: String,
      default: 'MultiSelectStore'
    },
    data: {
      type: Array,
      default: () => ([{ id: 2541, name: 'teste' }])
    },
    noSearch: {
      type: Boolean,
      default: false
    },
    srcFixed: {
      type: Array,
      default: () => ([{ id: 2541, name: 'teste' }])
    }
  },
  data () {
    return {
      ref: null,
      str: ''
    }
  },
  computed: {
    result () {
      return this.str === '' ? [] : this.data.filter(r => r.name.indexOf(this.str) > -1)
    },
    Res () {
      return this.noSearch ? this.srcFixed : this.result
    }
  },
  watch: {
    show (n) {
      if(n && !this.noSearch) {
        setTimeout(() => {
          this.$refs.in.focus()
        }, 100)
      }
    }
  }
}
</script>

<style scoped>
.MultiSelectSearch {
  width: 100%;
  position: absolute;
  box-shadow: 0px 1px 2px 1px #CCCCCC;
  background-color: #FFFFFF;
  z-index: 999;
}

input {
  font-size: 18px;
  width: 96%;
  padding: 1.8%;
  border: 0;
}

input:focus {
  outline: none;
}

.cont-result {
  width: 100%;
  max-height: 250px;
  overflow: auto;
}
</style>

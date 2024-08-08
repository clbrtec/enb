<template>
  <div class='MultiSelect'>
    <div class="label">{{ label }}:</div>
    <div :class="{ viewSelectEmpty: Itens.length <= 0 }" class="view-select" @click="showSearch=!showSearch">
      <multi-select-item
      v-for="(d, key) in Itens"
      :key="key"
      :chave="key"
      :data="d"
      :store="store"
      />
    </div>
    <multi-select-search
    :show="showSearch"
    :store="store"
    :data="src"
    :noSearch="noSearch"
    :srcFixed="srcFixed"
    />
  </div>
</template>

<script>
import MultiSelectSearch from './MultiSelectSearch'
import MultiSelectItem from './MultiSelectItem'
export default {
  name: 'MultiSelect',
  components: { MultiSelectSearch, MultiSelectItem },
  props: {
    label: {
      type: String,
      default: 'Label'
    },
    store: {
      type: String,
      default: 'MultiSelectStore'
    },
    src: {
      type: Array,
      default: () => ([])
    },
    noSearch: {
      type: Boolean,
      default: false
    },
    srcFixed: {
      type: Array,
      default: () => ([])
    }
  },
  computed: {
    Itens () {
      return typeof this.$store.state.System[this.store] === 'undefined' ? [] : this.$store.state.System[this.store]
    }
  },
  data () {
    return {
      showSearch: false
    }
  },
  created () {
    console.log(this.$store.state.System.Profile.admin)
  }
}
</script>

<style scoped>
.MultiSelect {
  width: 100%;
  position: relative;
}

.label {
  font-size: 12px;
  text-align: left;
  margin-top: 10px;
  margin-left: 5px;
  padding-bottom: 5px;
}

.view-select {
  display: flex;
  padding: 2.5%;
  border: thin solid #CCCCCC;
  border-radius: 5px;
}

.viewSelectEmpty {
  padding: 4.5%;
}
</style>

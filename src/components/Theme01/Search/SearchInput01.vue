<template>
  <div class='SearchInput01'>
    <div class="icon">
      <filter-icon01/>
    </div>
    <div class="cont-input">
      <input @input="run" type="text">
    </div>
    <div class="icon">
      <search-icon01/>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import FilterIcon01 from '@/components/Theme01/Icons/FilterIcon01'
import SearchIcon01 from '@/components/Theme01/Icons/SearchIcon01'
export default {
  name: 'SearchInput01',
  components: { FilterIcon01, SearchIcon01 },
  methods: {
    ...mapActions(['SearchProd01']),
    run (e) {
      this.SearchProd01(e.target.value)
    }
  }
}
</script>

<style scoped>
.SearchInput01 {
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon {
  width: 20%;
}

.cont-input {
  width: 80%;
}

input {
  width: 96%;
  padding: 2%;
  font-size: 18px;
  border: 0;
  border-bottom: thin solid #CCCCCC;
}

input:focus {
  outline: none;
}
</style>

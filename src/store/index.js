import { createStore } from 'vuex'
import System from './System'
import EnbPainel from './EnbPainel'
import Theme01 from './Theme01'
import Clients from './Clients'

export default createStore({
  modules: {
    System,
    EnbPainel,
    Theme01,
    Clients
  }
})

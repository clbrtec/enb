export default {
  'TOGGLE_CHEKCOUT01' (state, payload) {
    state.ShowCheckout = payload
  },
  'TOGGLE_SEARCH01' (state, payload) {
    state.ShowSearch01 = payload
  },
  'PUSH_CHECKOUT01' (state, payload) {
    if(state.CheckoutItens01.filter(i => i.id === payload.id).length) {
      state.CheckoutItens01.map(i => {
        if(i.id === payload.id) {
          if(payload.qtda > 1) {
            i.qtda = payload.qtda
          }
          i.qtda++
        }
      })
      console.log('1')
      return
    }
    payload.qtda = 1
    state.CheckoutItens01.push(payload)
    console.log('2')
  },
  'QTDA_CHECKOUTADD01' (state, payload) {
    state.CheckoutItens01.map(i => {
      if(i.id === payload) {
        i.qtda++
      }
    })
  },
  'QTDA_CHECKOUTSUB01' (state, payload) {
    state.CheckoutItens01.map(i => {
      if(i.id === payload) {
        i.qtda--
      }
    })
  },
  'DELETE_CHECKOUT01' (state, payload) {
    let NewList = state.CheckoutItens01.filter(i => i.id !== payload.id)
    state.CheckoutItens01 = NewList
  },
  'ITEM_SELECTED01' (state, payload) {
    state.ItemSelected01 = payload
  },
  'SET_MODAL01' (state, payload) {
    state.Modal01 = payload
  },
  'SEARCH_PROD01' (state, payload) {
    if (payload === '') {
      state.ResultSearch01 = []
      return
    }
    let res = state.Produtos01[0].concat(state.Produtos01[1]).filter(p => p.name.toUpperCase().indexOf(payload.toUpperCase()) >= 0)
    state.ResultSearch01 = res
  },
  'FILTER_CATEG' (state, payload) {
    state.CategSelected = payload
    let res = state.Produtos01[0].concat(state.Produtos01[1]).filter(p => p.categoria === payload)
    state.ResultFilterCateg = res
  },
  'DELETE_PROD' (state, payload) {
    for(let key in payload) {
      state.Produtos01[0] = state.Produtos01[0].filter(p => p.id !== payload[key].id)
    }
  },
   'PUSH_PROD' (state, payload) {
    state.Produtos01[0].push(payload)
  },
  'CLEAR_CHECKOUT01' (state) {
    state.CheckoutItens01 = []
  },
  'SELECT_PROPPROD' (state, payload) {
    let prop = state.ItemSelected01.atributos.filter(p => p.id === payload.prop.id)[0]
    prop.values.map(v => {
      v.selected = false
    })
    prop.values.filter(v => v.id === payload.value.id)[0].selected = true
  }
}

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
  'GET_LOGIN01' (state) {
    state.Profile01 = { logged: true, admin: true }
  },
  'GET_LOGOUT01' (state) {
    state.Profile01 = { logged: false, admin: false }
  },
  'SEARCH_PROD01' (state, payload) {
    if (payload === '') {
      state.ResultSearch01 = []
      return
    }
    let res = state.Produtos01[0].concat(state.Produtos01[1]).filter(p => p.name.toUpperCase().indexOf(payload.toUpperCase()) >= 0)
    state.ResultSearch01 = res
  }
}

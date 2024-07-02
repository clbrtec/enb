export default {
  'TOGGLE_CHEKCOUT01' (state, payload) {
    state.ShowCheckout = payload
  },
  'PUSH_CHECKOUT01' (state, payload) {
    if(state.CheckoutItens01.filter(i => i.id === payload.id).length) {
      state.CheckoutItens01.map(i => {
        if(i.id === payload.id) {
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
  }
}

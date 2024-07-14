export default {
  'SET_MODAL' (state, payload) {
    state.EnbModal = payload
  },
  'PUSH_IMG' (state, payload) {
    if (!state.UploadImg.filter(i => i === payload).length) {
      state.UploadImg.push(payload)
    }
  },
  'CHANGE_PRODEDIT' (state, payload) {
    for(let key in state.SelectedProdEdit) {
      state.SelectedProdEdit[key] = payload[key]
    }
  }
}

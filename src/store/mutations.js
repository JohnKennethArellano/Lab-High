export default {
  setUserData: (state, data) => {
    state.userData = data
  },
  showLogOutModal: (state, value) => {
    state.logOutModal.isShowing = value
  },
  toggleLoader: (state, value) => {
    state.showLoading.state = value
  }
}

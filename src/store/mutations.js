export default {
  setUserData: (state, data) => {
    state.userData = data
  },
  resetUserData: (state) => {
    state.userData = {}
  },
  showLogOutModal: (state, value) => {
    state.logOutModal.isShowing = value
  }
}

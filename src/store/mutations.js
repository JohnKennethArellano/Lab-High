export default {
  setUserData: (state, data) => {
    state.userData = data
  },
  showLogOutModal: (state, value) => {
    state.logOutModal.isShowing = value
  },
  toggleLoader: (state, value) => {
    state.showLoading.state = value
  },
  showLoading: (state, showLoading) => {
    state.loading.showLoading = showLoading
  },
  showLoginPrompt: (state, showLoginPrompt) => {
    state.loginPrompt.showLoginPrompt = showLoginPrompt
  },
  showRequestPrompt: (state, showRequestPrompt) => {
    state.requestPrompt.showRequestPrompt = showRequestPrompt
  },
  showResetPrompt: (state, showResetPrompt) => {
    state.resetPrompt.showResetPrompt = showResetPrompt
  }
}

export const mutations = {
  showLoading: (state, showLoading) => {
    state.loading.showLoading = showLoading;
  },
  showLoginPrompt: (state,showLoginPrompt) => {
    state.loginPrompt.showLoginPrompt = showLoginPrompt;
  },
  showRequestPrompt: (state,showRequestPrompt) => {
    state.requestPrompt.showRequestPrompt = showRequestPrompt;
  },
  showResetPrompt: (state,showResetPrompt) => {
    state.resetPrompt.showResetPrompt = showResetPrompt;
  },
};
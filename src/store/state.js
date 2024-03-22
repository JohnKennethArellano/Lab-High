import { reactive } from "vue";

export const state = reactive({
  data: {
    username: "",
  },
  loading: {
    showLoading: false,
  },
  loginPrompt: {
    showLoginPrompt: false,
  },
  requestPrompt: {
    showRequestPrompt: false,
  },
  resetPrompt: {
    showResetPrompt: false,
  },
  sidebar: {
    collapsed: false,
  }
});
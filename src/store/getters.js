export const getters = {
  getUser: (state) => {
    return state.data.username;
  },
  getSidebarState: (state) => {
    return state.sidebar.collapsed;
  },
  getStudentsData: (state) => {
    return state.students.data;
  },
  getRole: (state) => state.userData.role
};

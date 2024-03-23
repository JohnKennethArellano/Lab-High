export default {
  getUser: (state) => {
    return state.userData
  },
  getSidebarState: (state) => {
    return state.sidebar.collapsed
  },
  getStudentsData: (state) => {
    return state.students.data
  },
  getRole: (state) => state.userData.role
}

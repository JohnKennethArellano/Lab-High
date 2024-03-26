import axiosAuth from "@/axios/axioswithtoken"

const getUsers = async (page) => {
  
  const users = await axiosAuth.get(`dashboard/table/today?page=${page}`)
  return users.data.attendance_today
}
export default getUsers

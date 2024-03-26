import axiosAuth from "@/axios/axioswithtoken";

const getstudents = async (page) => {
  
    const users = await axiosAuth.get(`dashboard/table/today/adviser?page=${page}`)
    return users.data.attendance_today
}
export default getstudents
  
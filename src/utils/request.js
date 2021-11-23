import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://carlblog.site/api/'
})

axiosInstance.interceptors.request.use(config=>{
  return config
},err=>{
  return Promise.reject(err)
})

axiosInstance.interceptors.response.use(res=>{
  return res
},err=>{
  return Promise.reject(err)
})

export default axiosInstance
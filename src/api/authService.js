import { axiosInstance } from '../config/axiosInstance'

export const signUp = (data) => {
  return axiosInstance.post('/auth/register', data)
}

export const signIp = (data) => {
  return axiosInstance.post('/auth/login', data)
}

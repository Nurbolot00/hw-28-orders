import { axiosInstance } from "../config/axiosInstance"

export const addMealRequest = (token, data) => {
  return axiosInstance.post('/foods', data, {
      headers: { Authorization: token },
  })
}

export const getMealsAdminRequest = () => {
  return axiosInstance.get('/foods')
}

export const deleteMealRequest = (token, id) => {
  return axiosInstance.delete(`/foods/${id}`, {
      headers: { Authorization: token },
  })
}

export const getOneMealRequest = (token, id) => {
  return axiosInstance.get(`/foods/${id}`, {
      headers: { Authorization: token },
  })
}

export const updateMealRequest = (token, data) => {
  return axiosInstance.put(`/foods/${data.id}`, data, {
      headers: { Authorization: token },
  })
}
import { axiosInstance } from '../config/axiosInstance'

export const getMealsRequest = () => {
  return axiosInstance.get('/foods')
}

export const getBasketRequest = (token) => {
  return axiosInstance.get('/basket', { headers: { Authorization: token } })
}

export const updateBasketRequest = (id, basketAmount,token) => {
  return axiosInstance.put(
    `basketItem/${id}/update`,
    { basketAmount },
    {
        headers: { Authorization: token },
    }
)
}

export const deleteBasketItemRequest = (id,token) => {
  return axiosInstance.delete(`/basketItem/${id}/delete`, {
    headers: { Authorization: token },
})
}

export const addToBasketRequest = (newItem,token) => {
  return axiosInstance.post(
    `foods/${newItem.id}/addToBasket`,
    { amount: newItem.amount },
    {
        headers: { Authorization: token },
    }
)
}

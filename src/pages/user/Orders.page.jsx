/* eslint-disable no-console */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOrders } from '../../store/order/order.thunk'

const OrdersPage = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getOrders())
  }, [])
  const { meals } = useSelector((state) => state.orders)
  console.log(meals)
  return (
    <div>
      {meals.map((item) =>
        item.items.map((element) => {
          return <p>{element.title}</p>
        })
      )}
    </div>
  )
}

export default OrdersPage

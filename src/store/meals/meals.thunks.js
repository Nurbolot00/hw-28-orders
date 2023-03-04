/* eslint-disable prettier/prettier */
import { createAsyncThunk } from '@reduxjs/toolkit'
import { getMealsRequest } from '../../api/mealsService'
// import { fetchApi } from '../../lib/fetchApi'
// eslint-disable-next-line import/no-cycle
import { mealsSlice } from './index'

export const getMeals = createAsyncThunk(
  'meals/getMeals',
  async (payload, { dispatch, rejectWithValue }) => {
    try {
      dispatch(mealsSlice.mealsActions.getMealsStarted())
      const { data } = await getMealsRequest()
      dispatch(mealsSlice.mealsActions.getMealsSuccess(data))
      return data.data
    } catch (error) {
      return rejectWithValue('something went wrong')
    }
  }
)

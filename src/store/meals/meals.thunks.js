/* eslint-disable prettier/prettier */
import { createAsyncThunk } from '@reduxjs/toolkit'
import { fetchApi } from '../../lib/fetchApi'
// eslint-disable-next-line import/no-cycle
import { mealsSlice } from './index'

export const getMeals = createAsyncThunk(
  'meals/getMeals',
  async (payload, { dispatch, rejectWithValue }) => {
    try {
      dispatch(mealsSlice.mealsActions.getMealsStarted())
      const { data } = await fetchApi('foods')
      //   console.log(data);
      dispatch(mealsSlice.mealsActions.getMealsSuccess(data))
      return data
    } catch (error) {
      return rejectWithValue('something went wrong')
    }
  }
)

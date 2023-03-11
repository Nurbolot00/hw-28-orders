import { createAsyncThunk } from '@reduxjs/toolkit'
import { deleteMealRequest, getMealsAdminRequest, getOneMealRequest, updateMealRequest } from '../../api/mealsService'


export const mealsAdmin = createAsyncThunk(
    'mealsAdmin/getMeals',
    async (payload, { rejectWithValue, getState }) => {
        try {
            const { token } = getState().auth

            const { data } = await getMealsAdminRequest(token)
            return data.data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const deleteMeal = createAsyncThunk(
    'mealsAdmin/delete',
    async (payload, { rejectWithValue, getState, dispatch }) => {
        try {
            const { token } = getState().auth
            const { data } = await deleteMealRequest(token, payload)
            dispatch(mealsAdmin())
            return data.data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const getOneMeal = createAsyncThunk(
    'mealsAdmin/getOneMeal',
    async (payload, { rejectWithValue, getState }) => {
        try {
            const { token } = getState().auth

            const { data } = await getOneMealRequest(token, payload)
            return data.data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const updateMeal = createAsyncThunk(
    'mealsAdmin/updateMeal',
    async (payload, { rejectWithValue, getState, dispatch }) => {
        try {
            const { token } = getState().auth
            const { data } = await updateMealRequest(token, payload)
            dispatch(mealsAdmin())
            return data.data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)
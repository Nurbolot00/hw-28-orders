/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Routes as Router, Route } from 'react-router-dom'
import UserLayout from '../layout/UserLayout'
import MealsPage from '../pages/Meals.page'
import SignUp from '../pages/SignUp.page'
import SignIn from '../pages/SignIn.page'

const Routes = () => {
    return (
        <Router>
            <Route path="/" element={<UserLayout />}>
                <Route index element={<MealsPage />} />
                <Route path="signup" element={<SignUp />} />
                <Route path="signin" element={<SignIn />} />
            </Route>
        </Router>
    )
}

export default Routes
import React, { memo, useEffect, useState } from 'react';
import { fetchApi } from '../../lib/fetchApi';
import MealItem from './meal-item/MealItem';
import { styled } from "@mui/material/styles";


const Meals = () => {

    const [meals,setMeals] = useState([])
    const [error,setError] = useState('')
    const [isLoading,setLoading] = useState(false)
 
    const getMeals = async() =>{
        try{
            setLoading(true)
       const response =  await fetchApi('foods')
       console.log(response.data);

       setMeals(response.data)
       
        }catch(error){
            console.log(error);
            setError("failed to Load meals")
        }
        setLoading(false)
    }

    useEffect(() =>{   
        getMeals()  
    },[])

    return (
        <StyledCard >
            {isLoading && !error && <p>LOADING........</p>}
            {error &&  <p style={{color: 'red'}}>{error}</p>}
            {meals.map((meal,index) => {
                return <MealItem key={index}  meal={meal}/>
            })}
            </StyledCard>
       
    );
};

export default memo(Meals);


const StyledCard = styled('div')(({theme}) => ({
    backgroundColor: theme.palette.primary.light,
    borderRadius: '16px',
    width: '75%',
    margin: '40px auto',
    padding: '40px',
    color: theme.palette.primary.contrastText
  }))
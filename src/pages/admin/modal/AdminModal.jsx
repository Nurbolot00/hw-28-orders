import { Button, TextField } from '@mui/material'
import { styled } from '@mui/material/styles'
import React from 'react'
import { useDispatch } from 'react-redux'
import MuiButton from '../../../components/UI/MuiButton'
import { addMeals } from '../../../store/meals/meals.thunks'


export const AdminModal = ({
    searchParams,
    closeModalHandler,
    title,
    description,
    price,
    setTitle,
    setDescription,
    setPrice,
    change,
    saveUpdateMealHandler,
}) => {
    const dispatch = useDispatch()
    const titleChangeHandler = (e) => {
        setTitle(e.target.value)
    }
    const descriptionChangeHandler = (e) => {
        setDescription(e.target.value)
    }
    const pricenChangeHandler = (e) => {
        setPrice(e.target.value)
    }
    const submitHandler = () => {
        const newMeal = {
            title,
            description,
            price: +price,
        }
        dispatch(addMeals(newMeal))
        setTitle('')
        setDescription('')
        setPrice(0)
        closeModalHandler()
    }
    return (
        <div>
            {searchParams.has('modal') ? (
                <StyledModal>
                    <Form>
                        <TextField
                            value={title}
                            type="text"
                            label="Title:"
                            placeholder="Meal title"
                            onChange={titleChangeHandler}
                        />
                        <TextField
                            value={description}
                            type="text"
                            label="Description"
                            placeholder="Meal description"
                            onChange={descriptionChangeHandler}
                        />
                        <TextField
                            value={price}
                            type="number"
                            label="Price: $"
                            placeholder="Meal price"
                            onChange={pricenChangeHandler}
                            inputProps={{ min: 0, max: 5000 }}
                            min={0}
                            max={5000}
                        />
                    </Form>
                    <Container>
                        <Button onClick={closeModalHandler}>
                            Cancel
                        </Button>
                        {change ? (
                            <MuiButton variant='contained' onClick={saveUpdateMealHandler}>
                                Save Meal
                            </MuiButton>
                        ) : (
                            <MuiButton variant='contained' onClick={submitHandler}>
                                ADD Meal
                            </MuiButton>
                        )}
                    </Container>
                </StyledModal>
            ) : null}
        </div>
    )
}


const Container = styled('div')`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 20px;
`
const StyledModal = styled('div')`
    position: fixed;
    padding: 30px;
    top: 30%;
    left: 33%;
    width: 500px;
    height: auto;
    background-color: #f6eff4;
    border-radius: 5px;
`
const Form = styled('form')`
    display: flex;
    flex-direction: column;
    row-gap: 30px;
`
// const CancelButon = styled(Button)`
//     background-color: red;
//     color: white;
//     font-size: 15px;
//     margin-right: 20px;
//     :hover {
//         background-color: blue;
//     }
// `
// const AddButton = styled(Button)`
//     background-color: #0d00ff;
//     color: white;
//     font-size: 15px;
//     margin-right: 20px;
//     :hover {
//         background-color: #ff0000;
//     }
// `

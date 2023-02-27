/* eslint-disable jsx-a11y/label-has-associated-control */
import styledComponents from 'styled-components'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { TextField } from '@mui/material'
import { styled } from '@mui/material/styles'
import { addToBasket } from '../../../store/meals/basket.slice'
import { ReactComponent as PlusIcon } from '../../../assets/icons/plus-icon.svg'
import MuiButton from '../../UI/MuiButton'

const MealItemForm = ({ id, price, title }) => {
  const dispatch = useDispatch()
  const [amount, setAmount] = useState(1)

  const amountChangeHandler = (event) => {
    setAmount(+event.target.value)
  }

  const submitHandler = (event) => {
    event.preventDefault()

    const basketItem = {
      id,
      price,
      title,
      amount,
    }
    dispatch(addToBasket(basketItem))
  }
  return (
    <FormStyle onSubmit={submitHandler}>
      <StyledContainer>
        <label htmlFor={id}>Amount</label>
        <StyledTextField
          id={id}
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          size="small"
          value={amount}
          onChange={amountChangeHandler}
        />
      </StyledContainer>
      {/* <Button>
        <StyledIcon />
        Add
      </Button> */}
      <MuiButton variant="contained" onClick={submitHandler}>
        <StyledIcon />
        Add
      </MuiButton>
    </FormStyle>
  )
}

export default MealItemForm

const StyledContainer = styled('form')(({ theme }) => ({
  marginBottom: '10px',
  label: {
    fontWeight: '600',
    fontSize: '18px',
    lineHeight: '27px',
    marginRight: '20px',
  },
  ' input': {
    color: theme.palette.primary.contrastText,
    width: '60px',
    height: '32px',
    border: '1px solid',
    borderRadius: '6px',
    outline: 'none',
    padding: '4px 12px',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '24px',
  },
}))

const FormStyle = styled('form')(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
}))

const StyledIcon = styledComponents(PlusIcon)`
  margin-right: 10px;
`

const StyledTextField = styled(TextField)(({ theme }) => ({
  '&': {
    width: '70px',
    color: theme.palette.primary.contrastText,
  },
}))

import { Button } from "@mui/material";
import { memo, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styledComponents from "styled-components";

import { styled } from "@mui/material/styles";

import { getBasket } from "../../store/meals/BasketSlice";
import { uiActions } from "../../store/ui/uiSlice";

import BasketButton from "./BusketButton";

const Header = ({ onShowBasket }) => {
  const dispatch = useDispatch()
  const items = useSelector((state)=> state.basket.items)
  const [animationClass, setAnimationClass] = useState("");

  const themeMode = useSelector(state => state.ui.themeMode)


  useEffect(()=>{
dispatch(getBasket())
  },[dispatch])
  
  const calculateTotalAmount = useCallback(() => {
    const sum = items.reduce((s, item) => {
      return s + item.amount;
    }, 0);
    return sum;
  }, [items]);
  useEffect(() => {
    setAnimationClass("bump");

    const id = setTimeout(() => {
      setAnimationClass("");

      return () => {
        clearTimeout(id);
      };
    }, 600);
  }, [items]);


  const theme = themeMode ==="light" ? 'dark' : 'light' 
  const themeChangeHandler = () =>{
    dispatch(uiActions.changeTheme(theme))
    console.log(theme);
  }

  return (
    <StyledHeaderContainer >
      <Logo>ReactMeals</Logo>

      <StyledInnerContrainer>
      <BasketButton
        onClick={onShowBasket}
        className={animationClass}
        count={calculateTotalAmount()}
      ></BasketButton>
       <StyledButton
        variant="contained"
        onClick={themeChangeHandler}
        className={animationClass}
        count={calculateTotalAmount()}
        sx={{color: '#fff'}}
      >{themeMode === 'light' ? 'Turn Dark Mode' : 'Turn Light Mode'}</StyledButton>
      </StyledInnerContrainer>
    </StyledHeaderContainer>
  );
};

export default memo(Header);

const StyledHeaderContainer = styled('nav')(({theme}) => ({
  width: '100%',
  position: 'fixed',
  top: '0',
  zIndex: '1',
  height: '101px',
  backgroundColor: theme.palette.primary.main,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingLeft: '120px',
  paddingRight: '120px',
}))

const StyledInnerContrainer = styled('div')(({theme}) => ({
  display: 'flex'

}))

const StyledButton = styled(Button)(({theme}) => ({
  backgroundColor: theme.palette.primary.dark,
  marginLeft: '3rem'
}))

const Logo = styledComponents.p`
  margin: 0;
  font-weight: 600;
  font-size: 38px;
  line-height: 57px;
  color: #ffffff;
  font-family: Poppins, sans-serif;
`;
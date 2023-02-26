import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import styledComponents from "styled-components";
import { styled } from "@mui/material/styles";
import {
  deleteBasketItem,
  submitOrder,
  updateBasketItem,
} from "../../store/meals/BasketSlice";
import { uiActions } from "../../store/ui/uiSlice";
import BasicModal from "../mui-modal/BasicModal";
import BasketItem from "./BasketItem";
import TotalAmount from "./TotalAmount";

const Basket = ({ onOpen, onClose }) => {
  const items = useSelector((state) => state.basket.items);

  const orderSubmitHandler = async () => {
    try {
      await dispatch(
        submitOrder({
          oderData: { items },
        })
      ).unwrap();

      dispatch(uiActions.showSnackbar({
        severity: "success",
        message: "Order completed successfully",
      }))
    } catch (error) {
      dispatch(uiActions.showSnackbar({
        severity: "error",
        message: "Failed, try again later",
      }))
    } finally{
      onClose()
    }
  };



  const dispatch = useDispatch();
  const dec = useCallback(
    (id, amount) => {
      if (amount > 1) {
        dispatch(updateBasketItem({ amount: amount - 1, id: id }));
      } else {
        dispatch(deleteBasketItem(id));
      }
    },
    [dispatch]
  );

  const incrementAmount = useCallback(
    (id, amount) => {
      dispatch(updateBasketItem({ amount: amount + 1, id: id }));
    },
    [dispatch]
  );

  const getTotalPrice = useCallback(() => {
    return items.reduce((sum, { price, amount }) => (sum += price * amount), 0);
  }, [items]);
  return (
    <>
      <BasicModal onOpen={onOpen} onClose={onClose}>
        <StyledContainer>
          <FiwedHeightContainer>
            {items.map((item) => {
              return (
                <BasketItem
                  key={item._id}
                  incrementAmount={() => incrementAmount(item._id, item.amount)}
                  dec={() => dec(item._id, item.amount)}
                  title={item.title}
                  price={item.price}
                  amount={item.amount}
                />
              );
            })}
          </FiwedHeightContainer>

          <TotalAmount
            price={getTotalPrice()}
            onClose={onClose}
            onOrder={orderSubmitHandler}
          />
        </StyledContainer>
        </BasicModal>
    </>
  );
};

export default Basket;


const FiwedHeightContainer = styledComponents.div`
  max-height: 228px;
  overflow-y: scroll;
`;


const StyledContainer = styled('div')(({theme}) => ({
  backgroundColor: theme.palette.primary.light,
  width: '100%',
  height: '100%',
  padding: '1.5rem 2rem',
}))
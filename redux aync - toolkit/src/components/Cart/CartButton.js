import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cartState";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const totalItems = useSelector((state) => state.cart.totalItems);
  const dispatch = useDispatch();
  const toggleCartHandler = () => {
    dispatch(cartActions.toggle());
  };
  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalItems}</span>
    </button>
  );
};

export default CartButton;

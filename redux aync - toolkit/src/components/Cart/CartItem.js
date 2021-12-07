import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartState";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  console.log(props);
  const { title, quantity, total, price } = props.item;
  const dispatch = useDispatch();

  const removeItemHandler = () => {
    dispatch(cartActions.remove({ id: props.id, quantity: 1 }));
  };
  const addItemHandler = () => {
    dispatch(
      cartActions.add({ id: props.id, title: title, price: price, quantity: 1 })
    );
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;

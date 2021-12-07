import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const { cartItems, totalItems } = useSelector((state) => state.cart);
  const showCart = totalItems > 0;
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      {showCart && (
        <ul>
          {cartItems.map((item) => (
            <CartItem key={item.id} id={item.id} item={item} />
          ))}
        </ul>
      )}
      {!showCart && <div>Please add items to cart, to continue shopping</div>}
    </Card>
  );
};

export default Cart;

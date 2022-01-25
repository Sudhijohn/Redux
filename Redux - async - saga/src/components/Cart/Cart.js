import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const { cartItems, totalItems } = useSelector((state) => state.cart);
  const displayItems = totalItems > 0;

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      {displayItems && (
        <ul>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </ul>
      )}
      {!displayItems && <div> Please add some items to cart!! </div>}
    </Card>
  );
};

export default Cart;

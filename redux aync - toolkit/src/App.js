import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector } from "react-redux";

function App() {
  const displayCart = useSelector((state) => state.cart.displayCart);
  return (
    <Layout>
      {displayCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
import { fetchProducts } from "../../store/productActions";

const Products = (props) => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {products.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;

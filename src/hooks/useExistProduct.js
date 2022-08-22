import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCart } from "../store/cart";

function useExistProduct() {
  const dispatch = useDispatch();
  const wholeCart = useSelector((state) => state.cart.cart);

  const [quantity, setQuantity] = useState(0);

  const checkId = (id) => {
    if (wholeCart) {
      const filterProduct = wholeCart?.filter((item) => id == item.id);

      if (filterProduct?.length > 0) {
        setQuantity(filterProduct[0].quantity);
      } else {
        setQuantity(0);
      }
    } else {
      setQuantity(0);
    }
  };

  const updateCart = (product, newQuantity) => {
    var newObj = { ...product, quantity: newQuantity };
    dispatch(changeCart(newObj));
  };

  return [checkId, updateCart, quantity];
}

export default useExistProduct;

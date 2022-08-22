import { useEffect } from "react";
import { BsPlusSquare } from "react-icons/bs";
import { useSelector } from "react-redux";
import useExistProduct from "../../hooks/useExistProduct";

const Counter = ({ item }) => {
  const wholeCart = useSelector((state) => state.cart.cart);
  const [checkId, updateCart, quantity] = useExistProduct();

  useEffect(() => {
    checkId(item.id);
  }, [wholeCart]);

  const handleIncrement = () => {
    updateCart(item, quantity + 1);
  };

  const handleDecrement = () => {
    updateCart(item, quantity - 1);
  };

  return (
    <div>
      {!quantity ? (
        <button onClick={handleIncrement} className="flex cursor-pointer">
          <BsPlusSquare size={27} color="#377D71" />
        </button>
      ) : (
        <div className="flex items-center">
          <button
            onClick={handleDecrement}
            className="inline-flex items-center justify-center ml-2 bg-[#377D71] text-white w-[25px] h-[25px] rounded-full"
          >
            -
          </button>
          {quantity}
          <button
            onClick={handleIncrement}
            className="inline-flex items-center justify-center mr-2 bg-[#377D71] text-white w-[25px] h-[25px] rounded-full"
          >
            +
          </button>
        </div>
      )}
    </div>
  );
};

export default Counter;

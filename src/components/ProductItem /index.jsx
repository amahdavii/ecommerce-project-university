import { ProductContainer, ProductPrice, ProductCounterArea } from "./style";
import Counter from "../Counter";
import { Link } from "react-router-dom";

const ProductItem = ({ categoryName, item, category }) => {
  return (
    <ProductContainer category={category}>
      <div className="relative">
        <Link to={"/product-detail"} state={{ product: item }}>
          <img className="rounded-xl" src={item.image} alt="Product img" />
        </Link>
        <span className="inline-block bg-[#377D71] text-white rounded-md px-2 py-1 text-[12px] absolute top-2 left-2">
          {categoryName}
        </span>
      </div>
      <h1 className="font-semibold mt-3">{item.name}</h1>
      <ProductCounterArea>
        <ProductPrice>{Number(item.price).toLocaleString()} تومان</ProductPrice>
        <Counter item={item} />
      </ProductCounterArea>
    </ProductContainer>
  );
};

export default ProductItem;

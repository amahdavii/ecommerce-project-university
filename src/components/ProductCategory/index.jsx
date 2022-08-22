import ProductItem from "../ProductItem ";
import { BiMobileVibration } from "react-icons/bi";
import { RiArrowLeftSLine } from "react-icons/ri";
import { ProductsContainer, CategoryMoreBtn, CategoryTitleArea } from "./style";
import { Link } from "react-router-dom";

const ProductCategory = ({ id, name, itemCategory }) => {
  return (
    <>
      <div className="flex items-center justify-between mb-5">
        <CategoryTitleArea>
          <span className="bg-[#377D71] rounded-full w-[35px] h-[35px] flex justify-center items-center ml-2 text-white">
            <BiMobileVibration size={20} />
          </span>
          {name}
        </CategoryTitleArea>

        <Link to={"/product-category"} state={{ id }}>
          <CategoryMoreBtn>
              همه محصولات
            <RiArrowLeftSLine size={18} className="mr-1" />
          </CategoryMoreBtn>
        </Link>
      </div>
      <ProductsContainer>
        {itemCategory?.map(
          (item, index) =>
            index < 6 && (
              <ProductItem item={item} key={item.id} categoryName={name} />
            )
        )}
      </ProductsContainer>
    </>
  );
};

export default ProductCategory;

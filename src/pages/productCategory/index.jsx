import BaseLayout from "../../layout/baseLayout";
import ProductItem from "../../components/ProductItem ";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import MobileLayout from "../../layout/mobileLayout";

const ProductCategoryPage = () => {
  let location = useLocation();
  const [id, setId] = useState(null);
  const [products, setProducts] = useState([]);
  const [sort, setSort] = useState("asc");

  const categories = useSelector((state) => state.categories.categories);
  useEffect(() => {
    if (location.state.id) {
      setId(location.state.id);
    } else setId("all");
  }, [location]);
  useEffect(() => {
    var allProducts = [];
    categories.map((item) => {
      item.children.map((product) => {
        allProducts = [
          ...allProducts,
          { ...product, catId: item.id, catName: item.name },
        ];
      });
    });
    allProducts = allProducts.sort((a, b) => a.price - b.price);
    setProducts(allProducts);
  }, []);
  useEffect(() => {
    if (products.length) {
      var productSort = [...products];
      if (sort === "asc") {
        productSort = productSort.sort((a, b) => a.price - b.price);
      } else {
        productSort = productSort.reverse();
      }
      setProducts(productSort);
    }
  }, [sort]);
  return (
    <>
      <MobileLayout>
        <div className="flex justify-between items-start flex-col">
          <div className="bg-white rounded-md  px-3 py-2 flex flex-col items-center w-full">
            <h2 className="font-bold text-[#377d71] text-[17px] mb-5 mt-2 w-full">
              <span className="bg-[#CEE5D0] px-3 py-2 rounded-md block text-center">
                دسته بندی ها
              </span>
            </h2>
            <ul className="w-full flex justify-between">
              <li
                onClick={() => setId("all")}
                className={`mb-3 cursor-pointer text-[14px] ${
                  id === "all" ? `text-[#377d71]` : "text-[#000]"
                }`}
              >
                همه ی محصولات
              </li>
              {categories.map((item) => (
                <li
                  onClick={() => setId(item.id)}
                  className={`mb-3 cursor-pointer  text-[14px] ${
                    id === item.id ? `text-[#377d71]` : "text-[#000]"
                  }`}
                  key={item.id}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="bg-white rounded-md  p-4 flex mb-4 flex-col mt-3">
              <h2 className="font-bold text-[#377d71]">
                <span className="bg-[#CEE5D0] px-3 py-2 rounded-md  block w-full text-center">
                  مرتب سازی بر اساس
                </span>
              </h2>
              <ul className="flex mr-5 font-normal mt-3 justify-center">
                <li
                  className={`ml-4 cursor-pointer ${
                    sort === "desc" ? `text-[#377d71]` : "text-[#000]"
                  }`}
                  onClick={() => setSort("desc")}
                >
                  بیشترین قیمت
                </li>
                <li
                  className={` cursor-pointer ${
                    sort === "asc" ? `text-[#377d71]` : "text-[#000]"
                  }`}
                  onClick={() => setSort("asc")}
                >
                  کمترین قیمت
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-1">
              {products
                .filter((item) => (id === "all" ? item : item.catId === id))
                .map((product) => (
                  <ProductItem
                    item={product}
                    key={product.id}
                    categoryName={product.catName}
                    category={true}
                  />
                ))}
            </div>
          </div>
        </div>
      </MobileLayout>

      <BaseLayout>
        <div className="flex justify-between items-start">
          <div className="w-[18%] bg-white rounded-md  px-3 py-2">
            <h2 className="font-bold text-[#377d71] text-[17px] mb-5 mt-2">
              <span className="bg-[#CEE5D0] px-3 py-2 rounded-md block text-center">
                دسته بندی ها
              </span>
            </h2>
            <ul>
              <li
                onClick={() => setId("all")}
                className={`mb-3 cursor-pointer ${
                  id === "all" ? `text-[#377d71]` : "text-[#000]"
                }`}
              >
                همه ی محصولات
              </li>
              {categories.map((item) => (
                <li
                  onClick={() => setId(item.id)}
                  className={`mb-3 cursor-pointer ${
                    id === item.id ? `text-[#377d71]` : "text-[#000]"
                  }`}
                  key={item.id}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-[80%] flex flex-col">
            <div className="bg-white rounded-md  p-4 flex mb-4">
              <h2 className="font-bold text-[#377d71]">
                <span className="bg-[#CEE5D0] px-3 py-2 rounded-md">
                  مرتب سازی بر اساس
                </span>
              </h2>
              <ul className="flex mr-5 font-normal">
                <li
                  className={`ml-4 cursor-pointer ${
                    sort === "desc" ? `text-[#377d71]` : "text-[#000]"
                  }`}
                  onClick={() => setSort("desc")}
                >
                  بیشترین قیمت
                </li>
                <li
                  className={` cursor-pointer ${
                    sort === "asc" ? `text-[#377d71]` : "text-[#000]"
                  }`}
                  onClick={() => setSort("asc")}
                >
                  کمترین قیمت
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-5 gap-4">
              {products
                .filter((item) => (id === "all" ? item : item.catId === id))
                .map((product) => (
                  <ProductItem
                    item={product}
                    key={product.id}
                    categoryName={product.catName}
                  />
                ))}
            </div>
          </div>
        </div>
      </BaseLayout>
    </>
  );
};

export default ProductCategoryPage;

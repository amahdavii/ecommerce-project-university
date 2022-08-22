import BaseLayout from "../../layout/baseLayout";
import { BsPatchCheck, BsBagPlus } from "react-icons/bs";
import useExistProduct from "../../hooks/useExistProduct";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Counter from "../../components/Counter";
import MobileLayout from "../../layout/mobileLayout";

const ProductDetailPage = () => {
  const [product, setProduct] = useState(0);
  const location = useLocation();
  const wholeCart = useSelector((state) => state.cart.cart);
  const [checkId, updateCart, quantity] = useExistProduct();

  useEffect(() => {
    setProduct(location.state.product);
  }, [location]);
  useEffect(() => {
    checkId(product.id);
  }, [product, wholeCart]);

  console.log(product);

  return (
    <>
      <MobileLayout>
        <div className="flex justify-between flex-col">
          <div className=" bg-white rounded-md py-3 px-4 flex">
            <img
              className="rounded-md w-full"
              src={product.image}
              alt="Product-img"
            />
          </div>
          <div className="bg-white rounded-md py-3 px-4 flex flex-col mt-3.5">
            <h1 className="font-bold text-[22px] text-[#333] my-1">
              {product.name}
            </h1>
            <div className="text-[#377d71] font-semibold text-[20px] mt-1">
              {Number(product.price).toLocaleString()}تومان
            </div>
            <ul className="py-3 border-t border-b my-5">
              {/* <li className="font-semibold">
                برند: <span className="text-[#377d71]">{product.brand}</span>
              </li> */}
              <li className="font-semibold mt-1.5">
                کد محصول:{" "}
                <span className="text-[#377d71]">shop-{product.id}</span>
              </li>
              <li className="font-semibold mt-1.5">موجود در انبار</li>
              <li className="font-semibold mt-1.5">ارسال فوری در تهران</li>
            </ul>
            {quantity === 0 ? (
              <button
                onClick={() => updateCart(product, 1)}
                className="bg-[#377d71] mt-auto py-4 text-white rounded-md flex items-center justify-center"
              >
                <BsBagPlus className="ml-2" size={18} />

                <span> افزودن به سبد خرید</span>
              </button>
            ) : (
              <div className="bg-[#377d71] mt-auto py-2 text-white rounded-md w-[25%] flex items-center justify-center">
                <Counter item={product} />
              </div>
            )}
          </div>
          <div className="mt-3.5 mb-3.5 bg-white rounded-md py-3 px-4 flex flex-col">
            <div className="w-full h-[80px] bg-[#377d71] rounded-md text-white flex items-center justify-center">
              <BsPatchCheck size={30} className="ml-4" />
              <span className="font-semibold">
                {" "}
                همراه با گارانتی ویژه فروشگاه
              </span>
            </div>
            <ul className="mt-4">
              <li className="bg-[#f0f0f0] p-3 rounded-md mb-3">
                ضمانت بازگشت کالا
              </li>
              <li className="bg-[#f0f0f0] p-3 rounded-md mb-3">
                پشتیبانی در ساعات کاری
              </li>
              <li className="bg-[#f0f0f0] p-3 rounded-md mb-3">
                امکان تحویل اکسپرس
              </li>
              <li className="bg-[#f0f0f0] p-3 rounded-md mb-3">
                ضمانت اصل بودن کالا
              </li>
              <li className="bg-[#f0f0f0] p-3 rounded-md mb-3">
                ارسال با پست در شهرستان ها
              </li>
            </ul>
          </div>
        </div>
      </MobileLayout>

      <BaseLayout>
        <div className="flex justify-between">
          <div className="w-[28%] bg-white rounded-md py-3 px-4 flex">
            <img
              className="rounded-md w-full"
              src={product.image}
              alt="Product-img"
            />
          </div>
          <div className="w-[40%] bg-white rounded-md py-3 px-4 flex flex-col">
            <h1 className="font-bold text-[22px] text-[#333] my-1">
              {product.name}
            </h1>
            <div className="text-[#377d71] font-semibold text-[20px] mt-1">
              {Number(product.price).toLocaleString()}تومان
            </div>
            <ul className="py-3 border-t border-b my-5">
              <li className="font-semibold">
                برند: <span className="text-[#377d71]">{product.brand}</span>
              </li>
              <li className="font-semibold mt-1.5">
                کد محصول:{" "}
                <span className="text-[#377d71]">shop-{product.id}</span>
              </li>
              <li className="font-semibold mt-1.5">موجود در انبار</li>
              <li className="font-semibold mt-1.5">ارسال فوری در تهران</li>
            </ul>
            {quantity === 0 ? (
              <button
                onClick={() => updateCart(product, 1)}
                className="bg-[#377d71] mt-auto py-4 text-white rounded-md w-[35%] flex items-center justify-center"
              >
                <BsBagPlus className="ml-2" size={18} />

                <span> افزودن به سبد خرید</span>
              </button>
            ) : (
              <div className="bg-[#377d71] mt-auto py-2 text-white rounded-md w-[15%] flex items-center justify-center">
                <Counter item={product} />
              </div>
            )}
          </div>
          <div className="w-[28%] bg-white rounded-md py-3 px-4 flex flex-col">
            <div className="w-full h-[80px] bg-[#377d71] rounded-md text-white flex items-center justify-center">
              <BsPatchCheck size={30} className="ml-4" />
              <span className="font-semibold">
                {" "}
                همراه با گارانتی ویژه فروشگاه
              </span>
            </div>
            <ul className="mt-4">
              <li className="bg-[#f0f0f0] p-3 rounded-md mb-3">
                ضمانت بازگشت کالا
              </li>
              <li className="bg-[#f0f0f0] p-3 rounded-md mb-3">
                پشتیبانی در ساعات کاری
              </li>
              <li className="bg-[#f0f0f0] p-3 rounded-md mb-3">
                امکان تحویل اکسپرس
              </li>
              <li className="bg-[#f0f0f0] p-3 rounded-md mb-3">
                ضمانت اصل بودن کالا
              </li>
              <li className="bg-[#f0f0f0] p-3 rounded-md mb-3">
                ارسال با پست در شهرستان ها
              </li>
            </ul>
          </div>
        </div>
      </BaseLayout>
    </>
  );
};

export default ProductDetailPage;

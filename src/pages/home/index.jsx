import React from "react";
import BaseLayout from "../../layout/baseLayout";
import Slider from "../../components/Slider";
import ShoppingFeature from "../../components/ShoppingFeature";
import ProductCategory from "../../components/ProductCategory";

import Brands from "../../components/Brands";
import BlogItems from "../../components/Blogs";
import MobileLayout from "../../layout/mobileLayout";
import MobileSlider from "../../components/mobile/slider";
import MobileLogoSlider from "../../components/mobile/LogoSlider";

import {
  HiOutlineTruck,
  HiOutlineShieldCheck,
  HiOutlineRefresh,
  HiOutlineSupport,
} from "react-icons/hi";
import { useSelector } from "react-redux";

const HomePage = () => {
  const categories = useSelector((state) => state.categories.categories);

  return (
    <>
      <MobileLayout>
        <MobileSlider />
        <div className="flex justify-between flex-wrap mb-5">
          <div className="bg-white w-[49%] mb-1.5 rounded-md p-2 flex items-center">
            <span className=" bg-[#377d71] text-white w-[30px] h-[30px] flex items-center justify-center rounded-md ml-2">
              <HiOutlineTruck size={22} />
            </span>
            <span className="font-bold text-[14px]">ارسال رایگان</span>
          </div>
          <div className="bg-white w-[49%] mb-1.5 rounded-md p-2 flex items-center">
            <span className=" bg-[#377d71] text-white w-[30px] h-[30px] flex items-center justify-center rounded-md ml-2">
              <HiOutlineShieldCheck size={22} />
            </span>
            <span className="font-bold text-[14px]">امنیت در پرداخت</span>
          </div>
          <div className="bg-white w-[49%] rounded-md p-2 flex items-center">
            <span className=" bg-[#377d71] text-white w-[30px] h-[30px] flex items-center justify-center rounded-md ml-2">
              <HiOutlineRefresh size={22} />
            </span>
            <span className="font-bold text-[14px]">بازگشت وجه</span>
          </div>
          <div className="bg-white w-[49%] rounded-md p-2 flex items-center">
            <span className=" bg-[#377d71] text-white w-[30px] h-[30px] flex items-center justify-center rounded-md ml-2">
              <HiOutlineSupport size={22} />
            </span>
            <span className="font-bold text-[14px]">پشتیبانی 24 ساعته</span>
          </div>
        </div>
        {categories.map((item) => (
          <ProductCategory
            name={item.name}
            key={item.id}
            id={item.id}
            itemCategory={item.children}
          />
        ))}
        <MobileLogoSlider />
      </MobileLayout>

      <BaseLayout>
        <Slider />
        <ShoppingFeature />
        {categories.map((item) => (
          <ProductCategory
            name={item.name}
            key={item.id}
            itemCategory={item.children}
            id={item.id}
          />
        ))}
        <Brands />
        <BlogItems />
      </BaseLayout>
    </>
  );
};

export default HomePage;

import { useEffect } from "react";
import { useState } from "react";
import { BiHomeAlt, BiBasket, BiCategory, BiBook } from "react-icons/bi";
import { useLocation, useNavigate } from "react-router-dom";

import { MobileBottomNav } from "./style";
import { useSelector } from "react-redux";

const MobileFooter = () => {
  const [active, setActive] = useState();
  let location = useLocation();
  let navigate = useNavigate();
  const wholeCart = useSelector((state) => state.cart.cart);

  useEffect(() => {
    if (location.pathname === "/") {
      setActive("home");
    } else if (location.pathname === "/cart") {
      setActive("cart");
    } else if (location.pathname === "/blogs") {
      setActive("blogs");
    } else if (location.pathname === "/categories") {
      setActive("categories");
    }
  }, [location]);

  return (
    <MobileBottomNav>
      <div
        className="flex flex-col items-center"
        onClick={() => {
          setActive("home");
          navigate("/", { replace: true });
        }}
        style={{ color: active === "home" ? "#377d71" : "#333" }}
      >
        <BiHomeAlt size={25} />
        <span className="mt-1 text-[14px]">خانه</span>
      </div>
      <div
        className="flex flex-col items-center relative"
        onClick={() => {
          setActive("cart");
          navigate("/cart", { replace: true });
        }}
        style={{ color: active === "cart" ? "#377d71" : "#333" }}
      >
        <BiBasket size={25} />
        <span className="mt-1 text-[14px]">سبد خرید</span>
        {wholeCart.length ? (
          <span className="bg-[#377d71] w-[20px] h-[20px] flex items-center justify-center text-white rounded-md absolute right-2 -top-1">
            {wholeCart.length}
          </span>
        ) : null}
      </div>
      <div
        className="flex flex-col items-center"
        onClick={() => {
          setActive("categories");
          navigate("/categories", { replace: true });
        }}
        style={{ color: active === "categories" ? "#377d71" : "#333" }}
      >
        <BiCategory size={25} />
        <span className="mt-1 text-[14px]">دسته بندی ها</span>
      </div>
      <div
        className="flex flex-col items-center"
        onClick={() => {
          setActive("blogs");
          navigate("/blogs", { replace: true });
        }}
        style={{ color: active === "blogs" ? "#377d71" : "#333" }}
      >
        <BiBook size={25} />
        <span className="mt-1 text-[14px]">بلاگ</span>
      </div>
    </MobileBottomNav>
  );
};

export default MobileFooter;

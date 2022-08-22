import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Logo, DotSymbol } from "../../components/Header/style";
import { BsArrowLeft } from "react-icons/bs";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const RegisterPage = () => {
  const [visible, setVisible] = useState(false)
  const [revisible, setRevisible] = useState(false)
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex  justify-center items-center bg-[#f0f0f0]">
      <div className="bg-white w-[400px]  rounded-lg shadow-md p-3">
        <div className="flex justify-between items-center mb-5">
          <Link to="/">
            <Logo>
              پروژه فروشگاه اینترنتی <DotSymbol>.</DotSymbol>
            </Logo>
          </Link>
          <BsArrowLeft
            className="cursor-pointer"
            onClick={() => navigate(-1)}
            size={22}
          />
        </div>
        <form>
          <label htmlFor="username-input" className="block mt-4 font-semibold">
            نام کاربری
          </label>
          <input
            id="username-input"
            className="w-full border rounded-md px-3 py-2 mt-2 outline-none"
            type="text"
            placeholder="نام کاربری را وارد کنید"
          />
          <label htmlFor="email-input" className="block mt-4 font-semibold">
            ایمیل
          </label>
          <input
            id="email-input"
            className="w-full border rounded-md px-3 py-2 mt-2 outline-none"
            type="email"
            placeholder="ایمیل خود را وارد کنید"
          />
          <label htmlFor="password-input" className="block mt-4 font-semibold">
            رمزعبور
          </label>
          <div className="w-full border rounded-md mt-2 overflow-hidden flex items-center">
            <input
              id="password-input"
              className=" px-3 py-2 outline-none w-[90%]"
              type={revisible ? "text" : "password"}
              placeholder="رمزعبور را وارد کنید"
            />
            <div className="w-[10%] flex justify-center ">
              {revisible ? (
                <AiOutlineEyeInvisible
                  className="cursor-pointer"
                  onClick={() => setRevisible(false)}
                  size={20}
                />
              ) : (
                <AiOutlineEye
                  className="cursor-pointer"
                  onClick={() => setRevisible(true)}
                  size={20}
                />
              )}
            </div>
          </div>

          <label htmlFor="repassword-input" className="block mt-4 font-semibold">
            تکرار رمز عبور
          </label>
          <div className="w-full border rounded-md mt-2 overflow-hidden flex items-center">
            <input
              id="repassword-input"
              className=" px-3 py-2 outline-none w-[90%]"
              type={visible ? "text" : "password"}
              placeholder="رمزعبور را دوباره وارد کنید"
            />
            <div className="w-[10%] flex justify-center ">
              {visible ? (
                <AiOutlineEyeInvisible
                  className="cursor-pointer"
                  onClick={() => setVisible(false)}
                  size={20}
                />
              ) : (
                <AiOutlineEye
                  className="cursor-pointer"
                  onClick={() => setVisible(true)}
                  size={20}
                />
              )}
            </div>
          </div>
          <button className="bg-[#377d71] text-white w-full rounded-md py-3 mt-4">
            ثبت نام
          </button>
          <p className="mt-3 text-[14px]">
                با کلیک بر روی دکمه ثبت نام تمام قوانین سایت را پذیرفته اید.
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;

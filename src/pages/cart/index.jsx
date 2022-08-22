import MobileDetailLayout from "../../layout/mobileDetailLayout";
import BaseLayout from "../../layout/baseLayout";
import { changeCart } from "../../store/cart";
import { useDispatch, useSelector } from "react-redux";

const CartPage = () => {
  const dispatch = useDispatch();
  const wholeCart = useSelector((state) => state.cart.cart);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const updateCart = (product, newQuantity) => {
    var newObj = { ...product, quantity: newQuantity };
    dispatch(changeCart(newObj));
  };

  return (
    <>
      <MobileDetailLayout HeaderTitle="سبد خرید">
        <div className="px-4 pb-[90px]">
          {wholeCart.map((item) => (
            <div className="flex justify-between items-center my-3 pt-2 pb-5 bg-white px-3 rounded-md">
              <div className="flex">
                <img
                  className="w-[85px] h-[85px] rounded-lg ml-3"
                  src={item.image}
                  alt="product img"
                />
                <div className="flex flex-col">
                  <h2 className="font-semibold text-[15px]">{item.name}</h2>
                  <span className="text-gray-600 text-[15px]">
                    {Number(item.price).toLocaleString()} تومان
                  </span>
                </div>
              </div>
              <div className="flex">
                <button
                  onClick={() => updateCart(item, item.quantity + 1)}
                  className="bg-[#377d71] text-white w-[25px] h-[25px] rounded-full"
                >
                  +
                </button>
                <span className="mx-2">{item.quantity}</span>
                <button
                  onClick={() => updateCart(item, item.quantity - 1)}
                  className="bg-[#377d71] text-white w-[25px] h-[25px] rounded-full"
                >
                  -
                </button>
              </div>
            </div>
          ))}

          {wholeCart.length ? (
            <>
              <div className="bg-white rounded-md p-3">
                <ul className="mb-2">
                  <li className="flex my-2 text-[18px] font-semibold">
                    <span>مجموع قیمت:</span>
                    <span className="mr-2 text-[#377d71]">
                      {Number(totalPrice).toLocaleString()} تومان
                    </span>
                  </li>
                  <li className="flex my-2 text-[18px] font-semibold">
                    <span>مالیات :</span>
                    <span className="mr-2  text-[#377d71]">0</span>
                  </li>
                  <li className="flex my-2  text-[18px] font-semibold">
                    <span>قیمت نهایی :</span>
                    <span className="mr-2 text-[#377d71]">
                      {Number(totalPrice).toLocaleString()} تومان
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white mt-3 rounded-md p-3">
                <h2 className="font-bold mb-2">مشخصات خریدار</h2>
                <input
                  type="text"
                  className="border w-full rounded-md p-2 outline-none mb-3"
                  placeholder="نام ونام خانوادگی"
                />
                <input
                  type="text"
                  className="border w-full rounded-md p-2 outline-none mb-3"
                  placeholder="شهر"
                />
                <input
                  type="text"
                  className="border w-full rounded-md p-2 outline-none mb-3"
                  placeholder="استان"
                />
                <input
                  type="text"
                  className="border w-full rounded-md p-2 outline-none mb-3"
                  placeholder="کد پستی"
                />
                <textarea className="border w-full rounded-md p-2 outline-none" placeholder="آدرس خود را وارد کنید" name="" id="" cols="30" rows="10"></textarea>
              </div>
              <button className="w-full bg-[#377d71] text-white py-3 rounded-md mt-3">
                اقدام به پرداخت
              </button>
            </>
          ) : (
            <div className="mt-4">سبد خرید شما خالی است</div>
          )}
        </div>
      </MobileDetailLayout>
      <BaseLayout>
        {wholeCart.length ? (
          <div className="flex justify-between items-start">
            <div className="w-[70%] bg-white rounded-md p-5">
              <h2 className="font-bold text-[18px]">سبد خرید</h2>
              {wholeCart.map((item) => (
                <div className="flex justify-between items-center my-3 pt-2 pb-5">
                  <div className="flex">
                    <img
                      className="w-[85px] h-[85px] rounded-lg ml-5"
                      src={item.image}
                      alt="product img"
                    />
                    <div className="flex flex-col justify-between">
                      <h2 className="font-semibold text-[18px]">{item.name}</h2>
                      <span className="text-gray-600 text-[17px]">
                        {Number(item.price).toLocaleString()} تومان
                      </span>
                    </div>
                  </div>
                  <div>
                    <button
                      onClick={() => updateCart(item, item.quantity + 1)}
                      className="bg-[#377d71] text-white w-[25px] h-[25px] rounded-full"
                    >
                      +
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button
                      onClick={() => updateCart(item, item.quantity - 1)}
                      className="bg-[#377d71] text-white w-[25px] h-[25px] rounded-full"
                    >
                      -
                    </button>
                  </div>
                </div>
              ))}

              <h2 className="font-bold mb-4">مشخصات خریدار</h2>
              <div>
                <div className="flex justify-between mb-3">
                  <input
                    className="w-[23%] border outline-none p-2 rounded-md"
                    type="text"
                    placeholder="نام و نام خانوادگی"
                  />
                  <input
                    className="w-[23%] border outline-none p-2 rounded-md"
                    type="text"
                    placeholder="شهر"
                  />
                  <input
                    className="w-[23%] border outline-none p-2 rounded-md"
                    type="text"
                    placeholder="استاد"
                  />
                  <input
                    className="w-[23%] border outline-none p-2 rounded-md"
                    type="text"
                    placeholder="کد پستی"
                  />
                </div>
                <textarea
                  className="w-full border outline-none rounded-md p-2"
                  placeholder="آدرس خود را وارد کنید"
                  name=""
                  id=""
                  cols="30"
                  rows="6"
                ></textarea>
                {/* <div className="flex justify-end">
                  <button className="bg-[#377d71] text-white py-2 px-4 rounded-md">
                    ثبت آدرس
                  </button>
                </div> */}
              </div>
            </div>
            <div className="w-[28%] bg-white rounded-md p-3">
              <ul className="mb-2">
                <li className="flex my-2 text-[18px] font-semibold">
                  <span>مجموع قیمت:</span>
                  <span className="mr-2 text-[#377d71]">{totalPrice}</span>
                </li>
                <li className="flex my-2 text-[18px] font-semibold">
                  <span>مالیات :</span>
                  <span className="mr-2  text-[#377d71]">0</span>
                </li>
                <li className="flex my-2  text-[18px] font-semibold">
                  <span>قیمت نهایی :</span>
                  <span className="mr-2 text-[#377d71]">{totalPrice}</span>
                </li>
              </ul>
              <button className="bg-[#377d71] text-white w-full py-3 rounded-md">
                اقدام به پرداخت
              </button>
            </div>
          </div>
        ) : (
          <p>سبد خرید خالی است</p>
        )}
      </BaseLayout>
    </>
  );
};

export default CartPage;

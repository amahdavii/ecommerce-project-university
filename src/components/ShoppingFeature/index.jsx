import {
  HiOutlineTruck,
  HiOutlineShieldCheck,
  HiOutlineRefresh,
  HiOutlineSupport,
} from "react-icons/hi";

const ShoppingFeature = () => {
  return (
    <div className="grid grid-cols-4 gap-4 mb-6">
      <div className="bg-white rounded-2xl p-3 flex items-center">
        <div className="bg-[#377D71] w-[70px] h-[70px] rounded-2xl flex items-center justify-center text-white">
          <HiOutlineTruck size={30} />
        </div>
        <div className="text-[#333] mr-3">
          <h2 className="font-bold">ارسال رایگان</h2>
          <p>سفارشات خود را رایگان دریافت کنید</p>
        </div>
      </div>
      <div className="bg-white rounded-2xl p-3 flex items-center">
        <div className="bg-[#377D71] w-[70px] h-[70px] rounded-2xl flex items-center justify-center text-white">
          <HiOutlineShieldCheck size={30} />
        </div>
        <div className="text-[#333] mr-3">
          <h2 className="font-bold">امنیت در پرداخت</h2>
          <p>با خیال راحت از ما خرید کنید</p>
        </div>
      </div>
      <div className="bg-white rounded-2xl p-3 flex items-center">
        <div className="bg-[#377D71] w-[70px] h-[70px] rounded-2xl flex items-center justify-center text-white">
          <HiOutlineRefresh size={30} />
        </div>
        <div className="text-[#333] mr-3">
          <h2 className="font-bold">بازگشت وجه</h2>
          <p>کالا هنگام نارضایتی مرجوع می گردد</p>
        </div>
      </div>
      <div className="bg-white rounded-2xl p-3 flex items-center">
        <div className="bg-[#377D71] w-[70px] h-[70px] rounded-2xl flex items-center justify-center text-white">
          <HiOutlineSupport size={30} />
        </div>
        <div className="text-[#333] mr-3">
          <h2 className="font-bold">پشتیبانی ۲۴ ساعته</h2>
          <p>همکاران ما پاسخگو شما هستند</p>
        </div>
      </div>
    </div>
  );
};

export default ShoppingFeature;

import MobileDetailLayout from "../../layout/mobileDetailLayout";
import { BiMobileVibration, BiMobileAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <MobileDetailLayout HeaderTitle="دسته بندی ها">
      <div className="px-4 py-3 flex justify-between">
        <Link to={"/product-category"} state={{ id: 1 }} className="w-[48%]">
          <div className="h-[130px] bg-white rounded-md flex items-center justify-center flex-col">
            <BiMobileAlt size={35} color="#377d71" />
            <span className="mt-3">گوشی موبایل</span>
          </div>
        </Link>
        <Link to={"/product-category"} state={{ id: 2 }} className="w-[48%]">
          <div className="h-[130px] bg-white rounded-md flex items-center justify-center flex-col">
            <BiMobileVibration size={35} color="#377d71" />
            <span className="mt-3">لوازم جانبی موبایل</span>
          </div>
        </Link>
      </div>
    </MobileDetailLayout>
  );
};

export default Categories;

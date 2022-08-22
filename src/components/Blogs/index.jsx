import BlogItem from "./BlogItem";

import { VscNotebook } from "react-icons/vsc";
import { RiArrowLeftSLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const BlogItems = () => {
  return (
    <>
      <div className="flex items-center justify-between mb-5">
        <h2 className="flex items-center font-bold text-[#333] text-[18px]">
          <span className="bg-[#377D71] rounded-full w-[35px] h-[35px] flex justify-center items-center ml-2 text-white">
            <VscNotebook size={20} />
          </span>
          مقالات وبلاگ
        </h2>

        {/* <a
          href="/blogs"
          className="bg-[#377D71] px-4 py-2 rounded-full flex items-center cursor-pointer text-white"
        >
          همه محصولات
          <RiArrowLeftSLine size={18} className="mr-1" />
        </a> */}
      </div>
      <div className="flex items-center justify-between">
        <Link to="/blog/1" className="w-[32%]">
          <BlogItem
            image={require("../../assets/images/blog-img.jpg")}
            date="10 تیر"
            title="از تاریخچه بانکداری الکترونیک چه می‌دانید؟"
          />
        </Link>
        <Link to="/blog/2" className="w-[32%]">
          <BlogItem
            image={require("../../assets/images/jeff.jpg")}
            date="12 تیر"
            title="برای میلیونر شدن از کارآفرینان برتر الگو بگیرید"
          />
        </Link>
        <Link to="/blog/3" className="w-[32%]">
          <BlogItem
            image={require("../../assets/images/karafarini.jpg")}
            date="15 تیر"
            title="ویژگی‌های شخصیتی و مهارت‌های کارآفرینان را بشناسیم"
          />
        </Link>
      </div>
    </>
  );
};

export default BlogItems;

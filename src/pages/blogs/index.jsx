import BaseLayout from "../../layout/baseLayout";
import MobileDetailLayout from "../../layout/mobileDetailLayout";
import BlogImg from "../../assets/images/blog-img.jpg";
import { Link } from "react-router-dom";

const BlogsPage = () => {
  return (
    <>
      <MobileDetailLayout HeaderTitle="بلاگ">
        <div className="px-4 pt-3 pb-[100px] flex flex-col">
          <Link to="/blog/1">
            <div className="bg-white w-full rounded-lg overflow-hidden relative mb-[20px]">
              <img
                src={require("../../assets/images/blog-img.jpg")}
                alt="blogphoto"
              />
              <div className="bg-[#377D71]/85 absolute bottom-0 w-full px-4 h-[35%] backdrop-blur-xl text-[#333] flex flex-col justify-center">
                <span className="bg-[#377D71] rounded-full text-white  text-center text-[12px] py-1 mb-2 w-[50px]">
                  ۱۰ تیر
                </span>
                <h1 className="font-bold text-[13px] text-[#377D71]">
                  از تاریخچه بانکداری الکترونیک چه می‌دانید؟
                </h1>
              </div>
            </div>
          </Link>
          <Link to="/blog/2">
            <div className="bg-white w-full rounded-lg overflow-hidden relative mt-3">
              <img
                src={require("../../assets/images/jeff.jpg")}
                alt="blogphoto"
              />
              <div className="bg-[#377D71]/85 absolute bottom-0 w-full px-4 h-[35%] backdrop-blur-xl text-[#333] flex flex-col justify-center">
                <span className="bg-[#377D71] rounded-full text-white  text-center text-[12px] py-1 mb-2 w-[50px]">
                  12 تیر
                </span>
                <h1 className="font-bold text-[13px]  text-[#377D71]">
                  برای میلیونر شدن از کارآفرینان برتر الگو بگیرید{" "}
                </h1>
              </div>
            </div>
          </Link>
          <Link to="/blog/3">
            <div className="bg-white w-full rounded-lg overflow-hidden relative mt-3">
              <img
                src={require("../../assets/images/karafarini.jpg")}
                alt="blogphoto"
              />
              <div className="bg-[#377D71]/85 absolute bottom-0 w-full px-4 h-[35%] backdrop-blur-xl text-[#333] flex flex-col justify-center">
                <span className="bg-[#377D71] rounded-full text-white  text-center text-[12px] py-1 mb-2 w-[50px]">
                  15 تیر
                </span>
                <h1 className="font-bold text-[13px] text-[#377D71]">
                  ویژگی‌های شخصیتی و مهارت‌های کارآفرینان را بشناسیم{" "}
                </h1>
              </div>
            </div>
          </Link>
        </div>
      </MobileDetailLayout>
      <BaseLayout>
        <div className="w-full bg-white rounded-md p-4 flex  mb-4">
          <img src={BlogImg} alt="blog-img" className="w-[300px] rounded-md" />
          <div className="flex flex-col mr-5 text-[#333]">
            <div className="flex items-center justify-between mb-2">
              <h1 className="font-semibold text-[20px]">
                از تاریخچه بانکداری الکترونیک چه می‌دانید؟
              </h1>
              <span className="bg-[#377d71] text-white px-4 py-1.5 rounded-full">
                10 تیر
              </span>
            </div>
            <p className="text-[17px] leading-7">
              لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و
              بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح
              گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و
              ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید،
              تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد.
              معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و
              بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند
              که صفحه طراحی یا صفحه بندی شده بعد از اینکه متن در آن قرار گیرد
              چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته
              شده‌است. از آنجایی که طراحان عموما نویسنده متن نیستند و وظیفه
              رعایت حق تکثیر متون را ندارند و در همان حال کار آنها به نوعی
              وابسته به متن می‌باشد آنها با استفاده از محتویات ساختگی، صفحه
              گرافیکی خود را صفحه‌آرایی می‌کنند تا مرحله طراحی و صفحه‌بندی را به
              پایان برند.
            </p>
          </div>
        </div>
        <div className="w-full bg-white rounded-md p-4 flex  mb-4">
          <img src={BlogImg} alt="blog-img" className="w-[300px] rounded-md" />
          <div className="flex flex-col mr-5 text-[#333]">
            <div className="flex items-center justify-between mb-2">
              <h1 className="font-semibold text-[20px]">
                از تاریخچه بانکداری الکترونیک چه می‌دانید؟
              </h1>
              <span className="bg-[#377d71] text-white px-4 py-1.5 rounded-full">
                10 تیر
              </span>
            </div>
            <p className="text-[17px] leading-7">
              لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و
              بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح
              گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و
              ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید،
              تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد.
              معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و
              بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند
              که صفحه طراحی یا صفحه بندی شده بعد از اینکه متن در آن قرار گیرد
              چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته
              شده‌است. از آنجایی که طراحان عموما نویسنده متن نیستند و وظیفه
              رعایت حق تکثیر متون را ندارند و در همان حال کار آنها به نوعی
              وابسته به متن می‌باشد آنها با استفاده از محتویات ساختگی، صفحه
              گرافیکی خود را صفحه‌آرایی می‌کنند تا مرحله طراحی و صفحه‌بندی را به
              پایان برند.
            </p>
          </div>
        </div>

        <div className="w-full bg-white rounded-md p-4 flex">
          <img src={BlogImg} alt="blog-img" className="w-[300px] rounded-md" />
          <div className="flex flex-col mr-5 text-[#333]">
            <div className="flex items-center justify-between mb-2">
              <h1 className="font-semibold text-[20px]">
                از تاریخچه بانکداری الکترونیک چه می‌دانید؟
              </h1>
              <span className="bg-[#377d71] text-white px-4 py-1.5 rounded-full">
                10 تیر
              </span>
            </div>
            <p className="text-[17px] leading-7">
              لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و
              بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح
              گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و
              ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید،
              تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد.
              معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و
              بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند
              که صفحه طراحی یا صفحه بندی شده بعد از اینکه متن در آن قرار گیرد
              چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته
              شده‌است. از آنجایی که طراحان عموما نویسنده متن نیستند و وظیفه
              رعایت حق تکثیر متون را ندارند و در همان حال کار آنها به نوعی
              وابسته به متن می‌باشد آنها با استفاده از محتویات ساختگی، صفحه
              گرافیکی خود را صفحه‌آرایی می‌کنند تا مرحله طراحی و صفحه‌بندی را به
              پایان برند.
            </p>
          </div>
        </div>
      </BaseLayout>
    </>
  );
};

export default BlogsPage;

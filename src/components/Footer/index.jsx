import {
  TrustSymbolArea,
  AboutProjectArea,
  FooterNav,
  FooterSocialArea,
  FooterSocialTitle,
  FooterSocialItems,
  FooterArea,
} from "./style";
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import enamadLogo from "../../assets/images/enamad.png";
import namadMeli from "../../assets/images/namadmeli.png";
import senfLogo from "../../assets/images/senf.png";

const Footer = () => {
  return (
    <footer className="bg-white py-5 text-[#333] shadow-lg">
      <FooterArea>
        <AboutProjectArea className="w-[30%]">
          <h1 className="font-bold mb-1">درباره فروشگاه</h1>
          <p>
            این وبسایت برای پروژه دانشگاه آزاد واحد تهران مرکز توسط علی مهدوی
            امیری و برای استاد تناوش طراحی و پیاده سازی شده و هیچکدوم از کالاها
            و نوشته واقعی نیستند صرفا برای نمایش در این پروژه و به صورت ماک قرار
            داده شده اند.
          </p>
        </AboutProjectArea>

        <FooterNav>
          <h2 className="font-bold mb-1">اطلاعات دانشجو</h2>
          <li>نام و نام خانوادگی : علی مهدوی امیری</li>
          <li>شماره دانشجویی : 9683100002</li>
        </FooterNav>
        <div className="flex flex-col">
          <TrustSymbolArea className="mb-5">
            <img src={enamadLogo} alt="enamad" />
            <img src={namadMeli} alt="namadmeli" />
            <img src={senfLogo} alt="senf namad" />
          </TrustSymbolArea>
          <FooterSocialArea>
            <FooterSocialTitle>همراه همیشگی ما شوید:</FooterSocialTitle>
            <FooterSocialItems>
              <li>
                <FaInstagram size={25} />
              </li>
              <li>
                <FaLinkedinIn size={25} />
              </li>
              <li>
                <FaTwitter size={25} />
              </li>
            </FooterSocialItems>
          </FooterSocialArea>
        </div>
      </FooterArea>
      <p className="text-center pt-5">تمام حقوق سایت محفوظ است</p>
    </footer>
  );
};

export default Footer;

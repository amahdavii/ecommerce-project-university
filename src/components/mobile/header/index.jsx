import {
  MobileHeaderArea,
  MobileHeaderNav,
  MobileHeaderContainer,
  MobileLogo,
  LogoSpan,
  MobileSearchArea,
  MobileSearchInput,
} from "./style";

import { Link } from "react-router-dom";

import { MdSearch, MdOutlinePersonOutline } from "react-icons/md";

const MobileHeader = () => {
  return (
    <MobileHeaderArea>
      <MobileHeaderNav>پروژه فروشگاه اینترنتی - استاد تناوش</MobileHeaderNav>
      <MobileHeaderContainer>
        <div className="flex justify-between items-center">
          <Link to="/">
            <MobileLogo>
              فروشگاه اینترنتی
              <LogoSpan />
            </MobileLogo>
          </Link>

          <Link to="/login">
            <div className="border inline-flex items-center p-2 rounded-md">
              <MdOutlinePersonOutline size={20} className="ml-1" />
              حساب کاربری
            </div>
          </Link>
        </div>
        <Link to="/search">
          <MobileSearchArea>
            <MdSearch size={25} color="#333" />
            <MobileSearchInput placeholder="جستجو کنید..." type="text" />
          </MobileSearchArea>
        </Link>
      </MobileHeaderContainer>
    </MobileHeaderArea>
  );
};

export default MobileHeader;

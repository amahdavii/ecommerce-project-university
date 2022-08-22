import React from "react";
import {
  HeaderDesktop,
  NavbarArea,
  NavbarContainer,
  NavbarRightSide,
  NavbarCenterSide,
  NavbarLeftSide,
  Logo,
  UserAccount,
  DotSymbol,
  UserBasket,
  InfoNav,
  InfoNavDesc,
} from "./style";

import { FiUser, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Search from "../search";

const Header = () => {
  const wholeCart = useSelector((state) => state.cart.cart);

  return (
    <HeaderDesktop>
      <InfoNav>
        <InfoNavDesc>
          پروژه فرانت اند فروشگاه اینترنتی استاد تناوش - دانشگاه تهران مرکز
        </InfoNavDesc>
      </InfoNav>
      <NavbarArea>
        <NavbarContainer className="container mx-auto">
          <NavbarRightSide>
            <Link to="/">
              <Logo>
                پروژه فروشگاه اینترنتی <DotSymbol>.</DotSymbol>
              </Logo>
            </Link>
          </NavbarRightSide>
          <NavbarCenterSide>
            <Search />
          </NavbarCenterSide>
          <NavbarLeftSide>
            <Link to="/login">
              <UserAccount>
                <FiUser className="ml-1" size={24} />
                حساب کاربری
              </UserAccount>
            </Link>
            <Link to="/cart">
              <UserBasket>
                <FiShoppingCart className="ml-1" size={24} />
                <span>{wholeCart.length}</span>
              </UserBasket>
            </Link>
          </NavbarLeftSide>
        </NavbarContainer>
      </NavbarArea>
    </HeaderDesktop>
  );
};

export default Header;

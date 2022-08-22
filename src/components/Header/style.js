import styled from "styled-components";
import tw from "twin.macro";

export const HeaderDesktop = styled.header`
  ${tw`
    bg-white
  `}
`;

export const InfoNav = styled.div`
  ${tw`
    w-full 
    bg-[#377D71] 
    text-white
    py-2
   `}
`;

export const InfoNavDesc = styled.div`
  ${tw`
  container
  mx-auto
  `}
`;

export const DotSymbol = styled.span`
  ${tw`
  inline-flex
  text-red-400
  text-4xl
 `}
`;

export const NavbarArea = styled.nav`
  ${tw`
    py-[25px]
    text-[#333]
    shadow-lg
   `}
`;

export const NavbarContainer = styled.div`
  ${tw`
    flex
    items-center
    justify-between
   `}
`;

export const NavbarRightSide = styled.div`
  ${tw`
    flex-1
   `}
`;

export const NavbarCenterSide = styled.div`
  ${tw`
    flex-[2]
    flex
   `}
`;

export const NavbarLeftSide = styled.div`
  ${tw`
    flex
    flex-1
    justify-end
   `}
`;

export const SearchContainer = styled.div`
  ${tw`
    border
    border-solid
    border-gray-200
    flex
    items-center
    rounded-full
    overflow-hidden
    px-4
    bg-[#f7f7f7]
   `}
`;

export const SearchInput = styled.input`
  ${tw`
    border-none
    outline-none
    py-2
    px-1
    w-[30rem]
    bg-[#f7f7f7]
   `}
`;

export const Logo = styled.div`
  ${tw`
    font-bold
    text-[20px]
`}
`;

export const UserAccount = styled.div`
  ${tw`
    inline-flex
    items-center
    cursor-pointer
  `}
`;

export const UserBasket = styled.div`
  ${tw`
    inline-flex
    items-center
    mr-10
    cursor-pointer
    relative
  `}

  span {
    position: absolute;
    background: #377d71;
    color: #fff;
    width: 15px;
    height: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    top: -5px;
    right: -7px;
    font-size: 12px;
  }
`;

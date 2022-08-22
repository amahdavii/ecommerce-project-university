import styled from "styled-components";
import tw from "twin.macro";

export const MobileHeaderArea = styled.div`
  @media (max-width: 639px) {
    ${tw`
        flex
        flex-col
    `}
  }
`;

export const MobileHeaderNav = styled.div`
  @media (max-width: 639px) {
    ${tw`
        bg-[#377D71]
        text-white
        p-3
     `}
  }
`;

export const MobileHeaderContainer = styled.header`
  @media (max-width: 639px) {
    ${tw`
        bg-white
        p-3
    `}
  }
`;

export const MobileLogo = styled.div`
  @media (max-width: 639px) {
    ${tw`
        flex
        items-center
        text-[#333]
        font-bold
        text-[18px]
        py-2.5
    `}
  }
`;

export const LogoSpan = styled.span`
  @media (max-width: 639px) {
    ${tw`
        w-[5px]
        h-[5px]
        bg-red-600
        rounded-full
        mr-1
    `}
  }
`;

export const MobileSearchArea = styled.div`
  @media (max-width: 639px) {
    ${tw`
        flex
        items-center
        mt-3
        bg-white
        w-full
        rounded-full
        border
        px-2
        overflow-hidden
    `}
  }
`;

export const MobileSearchInput = styled.input`
  @media (max-width: 639px) {
    ${tw`
        w-[90%]
        py-2
        outline-none
        mr-2
    `}
  }
`;
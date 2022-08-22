import styled from "styled-components";
import tw from "twin.macro";

export const MobileBottomNav = styled.div`
  @media (max-width: 639px) {
    ${tw`
      fixed
      bottom-0
      w-full
      bg-white
      px-5
      py-3
      flex
      justify-around
      z-[1000]
      border
      border-t
    `}
  }
`;

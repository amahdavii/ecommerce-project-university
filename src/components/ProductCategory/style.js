import styled from "styled-components";
import tw from "twin.macro";

export const ProductsContainer = styled.div`
  ${tw`
    grid 
    grid-cols-6 
    gap-4
  `}

  @media (max-width: 639px) {
    ${tw`
      flex
      overflow-x-scroll
   `}
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const CategoryTitleArea = styled.h2`
  ${tw`
    flex 
    items-center 
    font-bold 
    text-[#333]
     text-[18px]
   `}

  @media (max-width: 639px) {
    ${tw`
     text-[16px]
   `}
  }
`;

export const CategoryMoreBtn = styled.a`
  ${tw`
     bg-[#377D71]
     px-4
     py-2
     rounded-full
     flex
     items-center
     cursor-pointer
     text-white
    `}

  @media (max-width: 639px) {
    ${tw`
       p-2
       text-[12px]
    `}
  }
`;

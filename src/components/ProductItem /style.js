import styled from "styled-components";
import tw from "twin.macro";

export const ProductContainer = styled.div`
  ${tw`
      bg-white
      rounded-xl
      p-3
      shadow-lg
      // transition-all  
      cursor-pointer
      mb-5
  `}

  /* &:hover {
    transform: translateY(-5px) scale(1.025);
  } */

  @media (max-width: 639px) {
    ${tw`
       ml-[3%]
    `}

    min-width:  ${(props) => (props.category ? "auto" : "200px")};
  }
`;

export const ProductPrice = styled.span`
  ${tw`
    inline-block
    text-gray-600
    mt-1 
    text-[15px]
  `}

  @media (max-width: 639px) {
    ${tw`
    text-[14px]
  `}
  }
`;

export const ProductCounterArea = styled.div`
  ${tw`
  flex 
  justify-between 
  items-center 
  `}

  /* @media (max-width: 639px) {
    ${tw`
      flex-col
      items-start
    `}
  } */
`;

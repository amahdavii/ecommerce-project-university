import styled from "styled-components";
import tw from "twin.macro";

export const FooterArea = styled.div`
  ${tw`
   container 
   mx-auto 
   flex 
   justify-between
   items-center  
   pb-6
   border-b
  `}
`;

export const TrustSymbolArea = styled.div`
  ${tw`
    flex
    items-center
    justify-between
    `}

  img {
    width: 140px;
    cursor: pointer;
    padding: 0 5px;
  }
`;

export const AboutProjectArea = styled.div`
  ${tw`
    text-[#333]
  `}
`;

export const FooterNav = styled.ul`
  ${tw`
    list-none	
  `}

  li:not(:first-child) {
    cursor: pointer;
    margin-bottom: 5px;
  }
`;

export const FooterSocialArea = styled.div`
  ${tw`
    flex
    items-center
    `}
`;

export const FooterSocialTitle = styled.h2`
  ${tw`
    font-bold
    ml-auto
    `}
`;

export const FooterSocialItems = styled.ul`
  ${tw`
     flex
    `}

  li {
    margin: 0 10px;
    cursor: pointer;
  }
`;

import styled from "styled-components";
import tw from "twin.macro";

export const BaseLayoutContainer = styled.div`
  @media (max-width: 639px) {
    display: none;
  }
  ${tw`
    flex 
    flex-col 
    min-h-screen
  `}
`;

export const Main = styled.main`
  ${tw`
    container 
    mx-auto 
    my-5
    flex-1
    `}
`;

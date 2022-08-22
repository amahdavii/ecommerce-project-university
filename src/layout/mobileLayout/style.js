import styled from "styled-components";
import tw from "twin.macro";

export const MobileLayoutArea = styled.div`
  display: none;
  @media (max-width: 639px) {
    display: block;
  }
`;

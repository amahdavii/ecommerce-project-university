import Header from "../../components/Header";
import { BaseLayoutContainer, Main } from "./style";
import Footer from "../../components/Footer";

const BaseLayout = ({ children }) => {
  return (
    <BaseLayoutContainer>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </BaseLayoutContainer>
  );
};

export default BaseLayout;

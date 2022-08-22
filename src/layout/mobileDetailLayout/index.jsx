import { DetailLayoutArea } from "./style";
import HeaderTitleMobile from "../../components/mobile/headerTitle";
import MobileFooter from "../../components/mobile/footer";
const MobileDetailLayout = ({ children, HeaderTitle }) => (
  <DetailLayoutArea>
    <HeaderTitleMobile HeaderTitle={HeaderTitle} />
    <main>{children}</main>
    <MobileFooter />
  </DetailLayoutArea>
);

export default MobileDetailLayout;

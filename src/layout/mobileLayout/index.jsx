import MobileHeader from "../../components/mobile/header";
import MobileFooter from "../../components/mobile/footer";
import { MobileLayoutArea } from "./style";

const MobileLayout = ({ children }) => {
  return (
    <MobileLayoutArea>
      <MobileHeader />
      <main className="p-3 pb-[70px]">{children}</main>
      <MobileFooter />
    </MobileLayoutArea>
  );
};

export default MobileLayout;

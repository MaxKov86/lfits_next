import CloseBtn from "../../components/Buttons/CloseBtn/CloseBtn";
import {
  SidebarNav,
  SidebarNavItem,
  SidebarNavLink,
  SidebarSocialItem,
  SidebarSocialLink,
  SidebarSocialList,
  SidebarStyle,
} from "./Sidebar.styled";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { MENU_SOCIAL_ITEMS } from "../../constants/mobileMenuSocialItems.constant";
import { MOBILE_MENU_ITEMS } from "../../constants/mobileMenuItems.constant";

const Sidebar = ({ onCloseBtn, isOpen }) => {
  const changeSvg = (type) => {
    switch (type) {
      case "instagram":
        return <FaInstagram />;
      case "facebook":
        return <FaFacebookF />;
      case "telegram":
        return <FaTelegramPlane />;
      case "linkedin":
        return <FaLinkedinIn />;
      case "tiktok":
        return <FaTiktok />;

      default:
        break;
    }
  };

  return (
    <SidebarStyle open={isOpen}>
      <CloseBtn close={onCloseBtn} />
      <SidebarNav>
        {Object.values(MOBILE_MENU_ITEMS).map((item) => (
          <SidebarNavItem onClick={onCloseBtn} key={item.linkName}>
            <SidebarNavLink to={item.anchorTo}>{item.linkName}</SidebarNavLink>
          </SidebarNavItem>
        ))}
      </SidebarNav>
      <SidebarSocialList>
        {Object.values(MENU_SOCIAL_ITEMS).map((item) => (
          <SidebarSocialItem key={item.link}>
            <SidebarSocialLink
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {changeSvg(item.type)}
            </SidebarSocialLink>
          </SidebarSocialItem>
        ))}
      </SidebarSocialList>
    </SidebarStyle>
  );
};

export default Sidebar;

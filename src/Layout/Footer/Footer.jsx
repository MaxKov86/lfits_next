import Logo from "../../components/Logo/Logo";
import {
  FooterContainer,
  FooterCopyright,
  FooterStyle,
  LinksContainer,
  // LinksWrapper,
  ListLink,
  LogoContainer,
  SocialList,
  SocialListItem,
  SocialListLink,
} from "./Footer.styled";

import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

const Footer = () => {
  return (
    <FooterStyle id="contacts">
      <FooterContainer>
        <LogoContainer>
          <Logo fill="#E6643A" width="150px" height="45px" />
        </LogoContainer>
        <LinksContainer>
          <ListLink href="tel:+380677144408">
            Подзвоніть: <span style={{ fontWeight: "600" }}>+380677144408</span>
          </ListLink>
          <ListLink href="mailto:hello@lfits.com.ua">
            Напишіть:{" "}
            <span style={{ fontWeight: "600" }}>hello@lfits.com.ua</span>
          </ListLink>
        </LinksContainer>
        <SocialList id="contacts">
          <SocialListItem>
            <SocialListLink
              href="https://www.instagram.com/lfits.office/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </SocialListLink>
          </SocialListItem>
          <SocialListItem>
            <SocialListLink
              href="https://www.facebook.com/lfits.office/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </SocialListLink>
          </SocialListItem>
          <SocialListItem>
            <SocialListLink
              href="https://t.me/LFITS_office"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegramPlane />
            </SocialListLink>
          </SocialListItem>
          <SocialListItem>
            <SocialListLink
              href="https://www.linkedin.com/company/lfits/?originalSubdomain=ua"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </SocialListLink>
          </SocialListItem>
          <SocialListItem>
            <SocialListLink
              href="https://www.tiktok.com/@lfits_?_t=8sIGLPnF3Tx&_r=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok />
            </SocialListLink>
          </SocialListItem>
        </SocialList>
      </FooterContainer>
      <FooterCopyright>© Copyright 2024, All Rights Reserved</FooterCopyright>
    </FooterStyle>
  );
};

export default Footer;

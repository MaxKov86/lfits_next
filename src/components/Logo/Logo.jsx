import { LogoStyle } from "./Logo.styled";

const Logo = ({ fill }) => {
  return (
    <LogoStyle href="/">
      <svg fill={fill}>
        <use href="/icons/symbol-defs.svg#icon-logo"></use>
      </svg>
    </LogoStyle>
  );
};

export default Logo;

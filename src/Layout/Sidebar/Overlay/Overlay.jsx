import { OverlayStyle } from "./Overlay.styled";

export const Overlay = ({ isOpen }) => {
  return <OverlayStyle open={isOpen}></OverlayStyle>;
};

export default Overlay;

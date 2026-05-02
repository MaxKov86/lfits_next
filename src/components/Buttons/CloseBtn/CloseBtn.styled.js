import styled from "styled-components";
import { RxCross2 } from "react-icons/rx";

export const CloseIcon = styled(RxCross2)`
  color: black;
  width: 100%;
  height: 100%;
`;

export const CloseBtnStyle = styled.button`
  position: absolute;
  top: 13px;
  right: 17px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border: none;
  border-radius: 50%;
  background-color: transparent;
  padding: 0;
  cursor: pointer;
`;

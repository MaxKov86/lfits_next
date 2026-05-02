import styled from "styled-components";

export const OverlayStyle = styled.div`
  display: none;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: ${({ open }) => (open ? "1" : "0")};
  width: 100%;
  height: 100%;
  background-color: rgba(251, 250, 245, 0.35);
  pointer-events: none;
  backdrop-filter: blur(9px);
  transition: opacity 500ms ease-in-out;
  z-index: 99998;

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    display: flex;
  }
`;

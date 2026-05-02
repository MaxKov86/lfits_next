import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  opacity: ${({ open }) => (open ? "1" : "0")};
  width: 100%;
  height: 100vh;
  background: rgba(251, 250, 245, 0.3);
  backdrop-filter: blur(7.5px);
  padding: 0 8px;
  pointer-events: none;

  transition: opacity 500ms ease-in-out;
`;
export const ModalStyle = styled.div`
  position: relative;
  padding: 73px 20px 57px;
  border-radius: 15px;
  scale: ${({ open }) => (open ? "1" : "0")};
  background: #e6643a;
  z-index: 99992;
  pointer-events: visible;
  transition: scale 500ms ease-in-out;

  @media screen and (min-width: 768px) {
    width: 580px;
    padding: 52px 70px 38px;
  }
`;

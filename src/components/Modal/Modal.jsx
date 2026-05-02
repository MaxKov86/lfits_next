import CloseBtn from "../Buttons/CloseBtn/CloseBtn";
import ModalForm from "./ModalForm/ModalForm";
import { ModalStyle, Overlay } from "./Modal.styled";

const Modal = ({ onClose, isOpen }) => {
  return (
    <Overlay open={isOpen}>
      <ModalStyle open={isOpen}>
        <CloseBtn close={onClose} />
        <ModalForm />
      </ModalStyle>
    </Overlay>
  );
};

export default Modal;

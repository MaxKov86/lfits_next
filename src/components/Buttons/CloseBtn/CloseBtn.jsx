import { CloseBtnStyle, CloseIcon } from "./CloseBtn.styled";

const CloseBtn = ({ close }) => {
  return (
    <CloseBtnStyle
      type="click"
      onClick={() => {
        close();
      }}
    >
      <CloseIcon />
    </CloseBtnStyle>
  );
};

export default CloseBtn;

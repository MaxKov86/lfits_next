import { Btn, Burger } from "./BurgerBtn.styled";

const BurgerBtn = ({ onOpenBtn }) => {
  return (
    <Btn onClick={() => onOpenBtn()}>
      <Burger />
    </Btn>
  );
};

export default BurgerBtn;

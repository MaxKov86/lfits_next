import { Btn } from "./BuyBtn.styled";

const BuyBtn = ({ children, onOrderBtn }) => {
  return (
    <Btn onClick={onOrderBtn}>
      {children}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 19" fill="none">
        <path
          d="M1 17.558L17 1.55798"
          stroke="#FBFAF5"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1 1.55798H17V17.558"
          stroke="#FBFAF5"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Btn>
  );
};

export default BuyBtn;

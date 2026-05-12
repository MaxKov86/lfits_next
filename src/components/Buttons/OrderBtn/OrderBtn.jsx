import { Btn, Link } from "./OrderBtn.styled";

const OrderBtn = ({ children }) => {
  return (
    <Btn type="click">
      <Link
        href="https://calendly.com/hello-lfits/30min"
        target="_blank"
        rel="noopener noreferrer"
      >
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
      </Link>
    </Btn>
  );
};

export default OrderBtn;

import styled from "styled-components";

export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
`;
export const FormTitle = styled.h2`
  color: #000;

  font-family: "Roboto", sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  text-align: center;
  text-transform: uppercase;

  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    margin-bottom: 13px;
  }
`;
export const FormText = styled.p`
  color: #fff;

  text-align: center;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  letter-spacing: 0.02em;
  line-height: 20px;

  margin-bottom: 21px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 22px;
  }
`;

export const Label = styled.label`
  margin-bottom: 12px;

  @media screen and (min-width: 768px) {
    margin-bottom: 15px;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 50px;
  flex-shrink: 0;
  border: none;
  outline: none;
  border-radius: 8px;
  background: #eee;
  padding-left: 20px;

  color: #000;
  font-family: "Roboto", sans-serif;
  font-size: 12px;

  &::placeholder {
    color: grey;

    font-family: "Roboto", sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 300;
    line-height: 22px;
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
    &::placeholder {
      font-size: 14px;
    }
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    &::placeholder {
      font-size: 16px;
    }
  }
`;

export const ErrorText = styled.p`
  color: red;
  margin-top: 12px;

  @media screen and (min-width: 768px) {
    margin-top: 15px;
  }
`;

export const SubmitBtn = styled.button`
  display: flex;
  width: 100%;
  height: 55px;
  padding: 8px 9px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border: none;
  border-radius: 10px;
  background: #fbfaf5;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  color: #000;

  font-family: "Roboto", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    border-radius: 15px;
  }
`;

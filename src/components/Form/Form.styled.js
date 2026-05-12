import styled from "styled-components";

export const Section = styled.section`
  position: relative;
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 50px 8px 15px;

  @media screen and (min-width: 768px) {
    padding: 50px 0px 60px 18px;
    gap: 60px;
  }

  @media screen and (min-width: 1440px) {
    padding: 145px 0px 0px 30px;
  }
`;

export const FormImgWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 0;
  }
`;

export const FormStyle = styled.form`
  /* width: 630px; */
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    width: 380px;
  }

  @media screen and (min-width: 1440px) {
    width: 630px;
  }
`;

export const Title = styled.h2`
  color: #fbfaf5;
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;

  @media screen and (min-width: 375px) {
    font-size: 30px;
  }

  @media screen and (min-width: 768px) {
    font-size: 36px;
  }

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const FormTitle = styled.h2`
  display: none;
  color: #fbfaf5;
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
  margin-bottom: 46px;

  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: center;
  }
`;

export const Label = styled.label`
  margin-bottom: 18px;

  @media screen and (min-width: 768px) {
    margin-bottom: 15px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 25px;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 50px;
  border: none;
  border-radius: 10px;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 20px;
  outline: none;

  color: #000;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 22px;

  &::placeholder {
    color: grey;
    font-family: "Roboto", sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 300;
    line-height: 22px;
  }

  @media screen and (min-width: 768px) {
    height: 60px;
    font-size: 14px;

    &::placeholder {
      font-size: 14px;
    }
  }
  @media screen and (min-width: 1440px) {
    border-radius: 15px;
    font-size: 16px;

    &::placeholder {
      font-size: 16px;
    }
  }
`;

export const ErrorText = styled.p`
  color: red;
  margin-top: 18px;

  @media screen and (min-width: 768px) {
    margin-top: 15px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 25px;
  }
`;

export const Textarea = styled.textarea`
  resize: none;
  height: 70px;
  flex-shrink: 0;
  border: none;
  border-radius: 10px;
  padding-top: 16px;
  padding-left: 20px;
  margin-bottom: 37px;
  outline: none;

  color: #000;
  font-family: "Roboto", sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: 22px;

  &::placeholder {
    color: grey;
    font-family: "Roboto", sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 300;
    line-height: 22px;
  }

  @media screen and (min-width: 768px) {
    height: 90px;
    font-size: 14px;
    &::placeholder {
      font-size: 14px;
    }
  }
  @media screen and (min-width: 1440px) {
    border-radius: 15px;
    font-size: 16px;
    &::placeholder {
      font-size: 16px;
    }
  }
`;

export const BtnSub = styled.button`
  display: inline-flex;
  height: 55px;
  padding: 8px 9px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
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
    height: 70px;
    font-size: 20px;
  }

  @media screen and (min-width: 1440px) {
    border-radius: 15px;
    font-size: 24px;
  }
`;

export const Platon = styled.img`
  @media screen and (min-width: 768px) {
    position: relative;
    right: 0;
    width: 440px;
  }
  @media screen and (min-width: 1440px) {
    top: -50px;
    width: 780px;
  }
`;

import {
  ErrorText,
  FormStyle,
  FormText,
  FormTitle,
  Input,
  Label,
  SubmitBtn,
} from "./ModalForm.styled";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const phoneRegExp = /^(\+?38)?0\d{9}$/;

const schema = yup
  .object({
    user_name: yup.string().required("Введіть ваше ім'я"),
    user_phone_number: yup
      .string()
      .required("Номер телефону є обов’язковим")
      .matches(phoneRegExp, "Не коректний номер телефону"),
  })
  .required();

const ModalForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const form = useRef();

  const sendEmail = () => {
    emailjs
      .sendForm("service_v5aj2l5", "template_lwthn69", form.current, {
        publicKey: "l3AaWKO8BCBwfBoYe",
      })
      .then(
        () => {
          console.log(form.current);
          toast.success("Ваше повідомлення відправлено! 📧 :)");
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("Щось пішло не так!😔");
        },
      );
    reset({ user_name: "", user_phone_number: "", message: "" });
  };

  // const onSubmit = data => {
  //   console.log(data);

  //   toast.success('Ваше повідомлення відправлено! 📧');

  //   reset({ user_name: '', user_phone_number: '' });
  // };

  return (
    // eslint-disable-next-line react-hooks/refs
    <FormStyle onSubmit={handleSubmit(sendEmail)}>
      <FormTitle>Придбати пакет</FormTitle>
      <FormText>
        Залиште свої дані і ми зв&apos;яжемося з вами найближчим часом
      </FormText>
      <Label>
        <Input
          style={{
            border: ` solid 1px ${errors.user_name ? "red" : "transparent"}`,
            background: `${errors.user_name ? "#FF7474" : "#eee"}`,
          }}
          {...register("user_name")}
          placeholder="Ім’я*"
        />
        <ErrorText>{errors.user_name?.message}</ErrorText>
      </Label>
      <Label>
        <Input
          style={{
            border: ` solid 1px ${errors.user_name ? "red" : "transparent"}`,
            background: `${errors.user_phone_number ? "#FF7474" : "#eee"}`,
          }}
          {...register("user_phone_number")}
          placeholder="Телефон*"
        />
        <ErrorText>{errors.user_phone_number?.message}</ErrorText>
      </Label>

      <SubmitBtn type="submit">Надіслати</SubmitBtn>
    </FormStyle>
  );
};

export default ModalForm;

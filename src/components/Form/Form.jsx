import {
  BtnSub,
  ErrorText,
  FormImgWrapper,
  FormStyle,
  FormTitle,
  Input,
  Label,
  Platon,
  Section,
  SectionWrapper,
  Textarea,
  Title,
} from "./Form.styled";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "@emailjs/browser";

const phoneRegExp = /^(\+?38)?0\d{9}$/;

const schema = yup
  .object({
    user_name: yup.string().required("Введіть ваше ім'я"),
    user_phone_number: yup
      .string()
      .required("Номер телефону є обов’язковим")
      .matches(phoneRegExp, "Не коректний номер телефону"),
    message: yup.string().optional(),
  })
  .required();

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      await emailjs.send(
        "service_v5aj2l5",
        "template_lwthn69",
        {
          user_name: data.user_name,
          user_phone_number: data.user_phone_number,
          message: data.message || "",
        },
        {
          publicKey: "l3AaWKO8BCBwfBoYe",
        },
      );

      toast.success("Ваше повідомлення відправлено! 📧 :)");
      reset({
        user_name: "",
        user_phone_number: "",
        message: "",
      });
    } catch (error) {
      console.error("FAILED...", error);
      toast.error("Щось пішло не так!😔");
    }
  };

  return (
    <Section>
      <SectionWrapper>
        <Title>Зв&apos;язатись з нами</Title>

        <FormImgWrapper>
          <FormStyle onSubmit={handleSubmit(onSubmit)}>
            <FormTitle>Зв&apos;язатись з нами</FormTitle>

            <Label>
              <Input {...register("user_name")} placeholder="Ім'я*" />
              <ErrorText>{errors.user_name?.message}</ErrorText>
            </Label>

            <Label>
              <Input
                {...register("user_phone_number")}
                placeholder="+380671112233*"
              />
              <ErrorText>{errors.user_phone_number?.message}</ErrorText>
            </Label>

            <Textarea {...register("message")} placeholder="Повідомлення" />

            <BtnSub type="submit">Надіслати</BtnSub>
          </FormStyle>

          <Platon src="/img/platon.png" alt="platon" />
        </FormImgWrapper>
      </SectionWrapper>
    </Section>
  );
};

export default Form;

import {
  BottomTextWrapper,
  FlyDuck,
  HeroContainer,
  SectionStyle,
  Text,
} from "./ServicesHero.styled";
import Link from "next/link";

const ServicesHero = () => {
  return (
    <SectionStyle>
      <HeroContainer>
        <Text>
          Успіх вашого ІТ-бізнесу - наша основна задача, ми занурюємося глибоко
          у ваші операційні процеси, ми бачимо повну картину вашого бізнесу
          зверху, бо вміємо літати і використовуємо підходи системного мислення,
          і ми допоможемо вам навчитися робити так само задля адаптації до нових
          викликів і сталого розвитку з метою підвищення прибутковості.
        </Text>
        <BottomTextWrapper>
          <Link href="/" style={{ color: "#e6643a", fontSize: "14px" }}>
            Головна
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="6"
            height="6"
            viewBox="0 0 6 6"
            fill="none"
          >
            <path
              d="M5.16797 3.04199L0 0.854492V0L5.77637 2.58398V3.13086L5.16797 3.04199ZM0 4.99023L5.18164 2.77539L5.77637 2.70703V3.25391L0 5.84473V4.99023Z"
              fill="#A0A0A0"
            />
          </svg>
          <p style={{ color: "#A0A0A0", fontSize: "14px" }}>Послуги</p>
        </BottomTextWrapper>
        <FlyDuck src="/icons/services_hero_fly_duck.svg" alt="duck" />
      </HeroContainer>
    </SectionStyle>
  );
};

export default ServicesHero;

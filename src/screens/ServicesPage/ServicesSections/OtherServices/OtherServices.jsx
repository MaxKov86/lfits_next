"use client";

import {
  IconsContainer,
  SectionStyles,
  SectionWrapper,
  Title,
} from "./OtherServices.styled";
import { useMediaQuery } from "@uidotdev/usehooks";
import DeskList from "./DeskList";
import TabList from "./TabList";
import MobList from "./MobList";

const OtherServices = () => {
  const widthMob = useMediaQuery(
    "only screen and (min-width:320px) and (max-width: 767px)",
  );
  const widthTab = useMediaQuery(
    "only screen and (min-width:768px) and (max-width: 1439px)",
  );
  const widthDesk = useMediaQuery("only screen and (min-width:1440px)");
  return (
    <SectionStyles>
      <SectionWrapper>
        <Title>ІНШІ ПОСЛУГИ</Title>
        {widthMob && <MobList />}
        {widthTab && <TabList />}
        {widthDesk && <DeskList />}
        <IconsContainer>
          {widthMob && (
            <img src="/img/footprints_art_mob.png" alt="footprints" />
          )}
          {widthTab && (
            <img src="/img/footprints_art_tab.png" alt="footprints" />
          )}
          {widthDesk && (
            <img src="/img/footprints_art_desk.png" alt="footprints" />
          )}
        </IconsContainer>
      </SectionWrapper>
    </SectionStyles>
  );
};

export default OtherServices;

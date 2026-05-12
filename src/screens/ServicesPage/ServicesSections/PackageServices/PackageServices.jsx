"use client";

import MobList from "./MobList";
import {
  IconsContainer,
  PackageDuck,
  SectionStyle,
  SectionWrapper,
  Title,
} from "./PackageServices.styled";
import { useMediaQuery } from "@uidotdev/usehooks";
import TabletLists from "./TabletLists";
import DeskList from "./DeskList";

const PackageServices = ({ openModal }) => {
  const widthMob = useMediaQuery(
    "only screen and (min-width:320px) and (max-width: 767px)",
  );
  const widthTab = useMediaQuery(
    "only screen and (min-width:768px) and (max-width: 1439px)",
  );
  const widthDesk = useMediaQuery("only screen and (min-width:1440px)");

  return (
    <SectionStyle>
      <PackageDuck src="/icons/package_duck.svg" alt="duck" />
      <SectionWrapper>
        <Title>ПАКЕТНІ ПОСЛУГИ</Title>
        {widthMob && <MobList modal={openModal} />}
        {widthTab && <TabletLists modal={openModal} />}
        {widthDesk && <DeskList modal={openModal} />}
        <IconsContainer>
          {widthMob && (
            <img src="/img/footprints_ex_mob.png" alt="footprints" />
          )}
          {widthTab && (
            <img src="/img/footprints_ex_tab.png" alt="footprints" />
          )}
          {widthDesk && (
            <img src="/img/footprints_ex_desk.png" alt="footprints" />
          )}
        </IconsContainer>
      </SectionWrapper>
    </SectionStyle>
  );
};

export default PackageServices;

import Form from "../../components/Form/Form";
import OtherServices from "./ServicesSections/OtherServices/OtherServices";

import PackageServices from "./ServicesSections/PackageServices/PackageServices";
import ServicesHero from "./ServicesSections/ServicesHero/ServicesHero";

const ServicesPage = ({ onOpenModal }) => {
  return (
    <main>
      <ServicesHero />
      <PackageServices openModal={onOpenModal} />
      <OtherServices />
      <Form />
    </main>
  );
};

export default ServicesPage;

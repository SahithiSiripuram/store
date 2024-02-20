import SectionPage from "../../../components/shared/SectionsPage/SectionsPage";

export const metadata = {
  title: "Pic-a-Dilly | Sweets",
  description: "Pic-a-Dilly sweets page.",
};

const page = () => {
  return (
    <SectionPage
      section="sweets"
      subtitle="Indulge in sweet bliss exploring our sweets."
      imgLink="/images/sections/sweets.webp"
    />
  );
};

export default page;

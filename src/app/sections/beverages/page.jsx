import SectionPage from "../../../components/shared/SectionsPage/SectionsPage";

export const metadata = {
  title: "Pic-a-Dilly | Beverages",
  description: "Pic-a-Dilly beverages page.",
};

const page = () => {
  return (
    <SectionPage
      section="beverages"
      subtitle="Sip & Savor: Quench Your Thirst with Delight."
      imgLink="/images/sections/beverages.webp"
    />
  );
};

export default page;

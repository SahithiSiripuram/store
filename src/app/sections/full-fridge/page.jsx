import SectionPage from "../../../components/shared/SectionsPage/SectionsPage";

export const metadata = {
  title: "Pic-a-Dilly | Full Fridge",
  description: "Pic-a-Dilly full fridge page.",
};

const page = () => {
  return (
    <SectionPage
      section="full-fridge"
      subtitle="Fill up your entire fridge with our selections."
      imgLink="/images/sections/fridge.webp"
    />
  );
};

export default page;

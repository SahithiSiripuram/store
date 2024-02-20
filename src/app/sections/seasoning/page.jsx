import SectionPage from "../../../components/shared/SectionsPage/SectionsPage";

export const metadata = {
  title: "Pic-a-Dilly | Seasoning",
  description: "Pic-a-Dilly seasoning page.",
};

const page = () => {
  return (
    <SectionPage
      section="seasoning"
      subtitle="Spice up your world with our seasonings."
      imgLink="/images/sections/seasoning.webp"
    />
  );
};

export default page;

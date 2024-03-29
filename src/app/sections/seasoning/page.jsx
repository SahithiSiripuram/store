import SectionPage from "../../../components/shared/SectionsPage/SectionsPage";

export const metadata = {
  title: "Picc-a-Dilly | Seasoning",
  description: "Picc-a-Dilly seasoning page.",
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

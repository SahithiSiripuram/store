import SectionPage from "../../../components/shared/SectionsPage/SectionsPage";

export const metadata = {
  title: "Pic-a-Dilly | Fruits",
  description: "Pic-a-Dilly fruits page.",
};

const page = () => {
  return (
    <SectionPage
      section="fruits"
      subtitle="Explore nature's sweetness in our fresh fruit!"
      imgLink="/images/sections/fruits.webp"
    />
  );
};

export default page;

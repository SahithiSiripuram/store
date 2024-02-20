import SectionPage from "../../../components/shared/SectionsPage/SectionsPage";

export const metadata = {
  title: "Pic-a-Dilly | Petshop",
  description: "Pic-a-Dilly petshop page.",
};

const page = () => {
  return (
    <SectionPage
      section="petshop"
      subtitle="Everything your pet needs, right here, right now."
      imgLink="/images/sections/petshop.webp"
    />
  );
};

export default page;

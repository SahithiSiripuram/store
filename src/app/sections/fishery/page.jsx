import SectionPage from "../../../components/shared/SectionsPage/SectionsPage";

export const metadata = {
  title: "Pic-a-Dilly | Fishery",
  description: "Pic-a-Dilly fishery page.",
};

const page = () => {
  return (
    <SectionPage
      section="fishery"
      subtitle="Dive in and enjoy our fresh seafood."
      imgLink="/images/sections/fishery.webp"
    />
  );
};

export default page;

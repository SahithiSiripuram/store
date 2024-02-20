import SectionPage from "../../../components/shared/SectionsPage/SectionsPage";

export const metadata = {
  title: "Pic-a-Dilly | Cleaning",
  description: "Pic-a-Dilly cleaning page.",
};

const page = () => {
  return (
    <SectionPage
      section="cleaning"
      subtitle="Clean and shine bright like a diamond."
      imgLink="/images/sections/cleaning.webp"
    />
  );
};

export default page;

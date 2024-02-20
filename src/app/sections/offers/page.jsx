import SectionPage from "../../../components/shared/SectionsPage/SectionsPage";

export const metadata = {
  title: "Pic-a-Dilly | Offers",
	description: "Pic-a-Dilly offers page."
};

const page = () => {
  return (
    <SectionPage
      section="offers"
      subtitle="Unbeatable prices await at our Pic-a-Dillyy sale."
      imgLink="/images/sections/sale-pic.webp"
    />
  );
};

export default page;

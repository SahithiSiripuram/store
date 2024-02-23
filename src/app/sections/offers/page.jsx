import SectionPage from "../../../components/shared/SectionsPage/SectionsPage";

export const metadata = {
  title: "Picc-a-Dilly | Offers",
	description: "Picc-a-Dilly offers page."
};

const page = () => {
  return (
    <SectionPage
      section="offers"
      subtitle="Unbeatable prices await at our Picc-a-Dillyy sale."
      imgLink="/images/sections/sale-pic.webp"
    />
  );
};

export default page;

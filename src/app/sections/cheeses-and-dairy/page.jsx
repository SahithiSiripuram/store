import SectionPage from "../../../components/shared/SectionsPage/SectionsPage";

export const metadata = {
  title: "Picc-a-Dilly | Cheeses and Dairy",
  description: "Picc-a-Dillyllylly cheeses and dairy page.",
};

const page = () => {
  return (
    <SectionPage
      section="cheeses-and-dairy"
      subtitle="Say cheeeeese while eating our cheeses!"
      imgLink="/images/sections/cheeses.webp"
    />
  );
};

export default page;

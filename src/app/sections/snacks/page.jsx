import SectionPage from "../../../components/shared/SectionsPage/SectionsPage";

export const metadata = {
  title: "Picc-a-Dilly | Snacks",
  description: "Picc-a-Dilly snacks page.",
};

const page = () => {
  return (
    <SectionPage
      section="snacks"
      subtitle="Snack attack and satisfy your cravings with delicious treats!"
      imgLink="/images/sections/snacks.webp"
    />
  );
};

export default page;

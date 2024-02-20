import SectionPage from "../../../components/shared/SectionsPage/SectionsPage";

export const metadata = {
  title: "Pic-a-Dilly | Bakery",
  description: "Pic-a-Dilly bakery page.",
};

const page = () => {
  return <SectionPage
					section="bakery"
					subtitle="My bakery delights, taste the sweet difference!"
					imgLink="/images/sections/bakery.webp"
      	/>
};

export default page;

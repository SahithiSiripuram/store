import Homepage from './homepage';

export const metadata = {
  title: "Pic-a-Dilly",
  description: " Fresh food, from farm to your home",
	keywords: ["Pic-a-Dillyy store online", "Pic-a-Dillyy", "buy food online", "buy food"]
};

export default function Home() {
  return (
    <main
      className={`max-w-[2560px] flex min-h-screen flex-col items-center gap-12 xl:gap-6 mx-auto w-full pb-36`}  
		>
      <Homepage />
    </main>
  );
}

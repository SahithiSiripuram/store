"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const FirstCards = () => {
	const [scrollY, setScrollY] = useState(0);
  const [translateY, setTranslateY] = useState(0);

	const handleScroll = () => {
    setScrollY(window.scrollY);
  };
	
	useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Calculate translateY based on the scroll position
    const parallaxMultiplier = 0.3; // Adjust this value for the desired parallax effect
    const newTranslateY = scrollY * parallaxMultiplier;
    setTranslateY(newTranslateY);

    // Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  return (
    <motion.section
      className="w-full xs:space-y-2 -mt-12 md:mt-0 flex flex-col relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1 }}
    >
      {/* DESCRIP */}
      <div className="px-4 md:p-6 py-40 lg:py-20 first-card-homepage flex relative z-10">
        <p className="text-neutral-100 text-2xl lg:text-xl xs:text-base font-semibold mx-auto w-1/2 xl:w-3/5 lg:w-4/5 md:w-full p-10 whitespace-normal bg-green-6 cool-border -rotate-2 border-2 border-green-5 md:rotate-0 drop-shadow-lg">
          &quot;&nbsp;&nbsp;Discover a diverse selection of fresh produce,
          pantry essentials, and more, all at affordable prices. With speedy and
          reliable delivery, we bring the store to your doorstep. Our commitment
          to freshness, secure online ordering, and community values make us
          your ideal grocery partner. Shop anytime, explore our culinary
          inspiration, and experience grocery shopping reimagined. Welcome to
          GrocerGo - where every purchase is a pleasure!&nbsp;&nbsp;&quot;
        </p>
      </div>

      <div className="relative overflow-hidden flex items-center justify-center xs:bg-green-6">
        <Image
          src="/images/firstcards/farm_bg.jpg"
          width={2400}
          height={1130}
          alt="farm"
          className="w-full xs:bg-green-6"
					loading="lazy"
        />
        <div
          className="absolute w-[110%] -rotate-2 flex free-delivery-banner-homepage p-24 xxl:p-20 xl:p-16 lg:p-12 md:p-8 xs:p-4 md:!transform-none mb-[40%] xxl:mb-[45%] xl:mb-[50%] lg:mb-[35%] md:mb-[0%]"
          style={{ transform: `translateY(${translateY}px)` }}
        >
          <p className="text-5xl xxl:text-4xl xl:text-3xl lg:text-2xl md:text-xl xs:text-lg xxs:text-sm text-center tracking-wider text-neutral-100 z-10 mx-auto font-sansita">
            FREE DELIVERY ON PURCHASES OVER $99
          </p>
        </div>
      </div>

      {/* BANNER */}
      <div className="overflow-hidden flex md:flex-col items-center justify-center h-fit py-8 sm:py-6 xs:py-4 relative lg:tracking-normal mx-auto md:gap-4 bg-green-6 w-full">
        <div className="flex flex-col items-center justify-center xs:whitespace-normal w-fit mx-auto h-full text-neutral-100">
          <h3 className="font-bold text-3xl lg:text-2xl sm:text-lg antialiased font-sansita tracking-wide">
            FRESH PRODUCE
          </h3>
          <p className="text-2xl lg:text-xl sm:text-sm antialiased font-sansita tracking-wide">
            Products selected by specialists.
          </p>
        </div>

        <div className="bg-neutral-100 w-2 rounded-xl h-20 md:h-2 sm:h-1.5 xs:h-1 md:w-3/5" />

        <div className="flex items-center justify-center xs:whitespace-normal w-fit mx-auto h-full gap-8 md:gap-4">
          <h3 className="text-green-1 brightness-125 font-bold text-3xl lg:text-2xl sm:text-xl xs:text-sm antialiased font-sansita tracking-wide">
            ATTENTION
          </h3>
          <p className="text-lg lg:text-base sm:text-sm xs:text-[0.65rem] text-neutral-50 antialiased font-sansita tracking-wide">
            Now we may ask for a <br />
            <span className="text-green-1 brightness-125 font-extrabold">
              Security Code*
            </span>{" "}
            on our deliveries.
          </p>
        </div>
      </div>

      {/* BOTTOM CURVE */}
      <div className="absolute w-full left-0 bottom-[-4rem] xl:bottom-[-2.5rem] overflow-hidden leading-[0]">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block h-16 xl:h-10 w-full"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-green-6"
          ></path>
        </svg>
      </div>
    </motion.section>
  );
};

export default FirstCards;

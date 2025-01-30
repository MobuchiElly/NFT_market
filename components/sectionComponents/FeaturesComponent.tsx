"use client"
import { useState, useEffect } from "react";
import cards from "@/constants/cardData";
import Image from "next/image";
import CardLG from "../cards/CardLG";
import { CardProps } from "@/types/components";

const FeaturesSection = () => {
  const [currIndex, setCurrIndex] = useState<number>(0);
  const [featuredList, setFeaturedList] = useState<CardProps[]>(cards.slice(0, 6));

  useEffect(() => {
    const endIndex = currIndex + 6;

    if (endIndex > cards.length) {
      setFeaturedList([...cards.slice(currIndex), ...cards.slice(0, endIndex - cards.length)]);
    } else {
      setFeaturedList(cards.slice(currIndex, endIndex));
    }
  }, [currIndex]);

  const handleClick = () => {
    setCurrIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  return (
    <div className="relative mt-32">
      <h4 className="text-white text-center block">Latest Live Auctions</h4>
      
      <div className="flex justify-center overflow-hidden mt-16">
        {featuredList.map((card, index) => (
          <CardLG key={index} card={card}/>
        ))}
      </div>

      <div className="bg-[#262840]/80 w-[120px] h-[120px] shadow-2xl backdrop-blur-[3.5px] rounded-full absolute right-36 top-1/2 transform -translate-y-1/2 flex justify-center items-center cursor-pointer" onClick={handleClick}>
          <button className="z-40">
            <Image src="/imgs/nextBtn.png" alt="Next" width={8} height={16} />
          </button>
      </div>
    </div>
  );
};

export default FeaturesSection;

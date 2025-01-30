"use client"
import { useState, useEffect } from "react";
import cards from "@/constants/cardData";
import Image from "next/image";
import CardLG from "./CardLG";
import { CardProps } from "@/types/components";

const FeaturesSection = () => {
  const [currIndex, setCurrIndex] = useState<number>(0);
  const [featuredList, setFeaturedList] = useState<CardProps[]>(cards.slice(0, 5));

  useEffect(() => {
    const endIndex = currIndex + 5;

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
    <div className="relative">
      <h4 className="text-white text-center block">Latest Live Auctions</h4>
      
      <div className="flex gap-4 overflow-hidden">
        {featuredList.map((card, index) => (
          <CardLG key={index} card={card}/>
        ))}
      </div>

      <button onClick={handleClick} className="absolute right-0 top-1/2 transform -translate-y-1/2">
        <Image src="/imgs/nextBtn.png" alt="Next" width={40} height={40} />
      </button>
    </div>
  );
};

export default FeaturesSection;

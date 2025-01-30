"use client"

import { useParams } from "next/navigation"
import cards from "@/constants/cardData"
import { CardProps } from "@/types/components"
import Suggession from "@/components/sectionComponents/Suggession";
import CardDetailsSection from "@/components/sectionComponents/CardDetailsSection";


const Page = () => {
  const { id } = useParams();

  const card: CardProps | undefined = cards.find((card) => card.id === id);
  const remainingCards: CardProps[] = cards.filter((card) => card.id !== id);

  return (
    <div>
    { card ?      
      (
      <div className="flex flex-col items-center space-y-16">
        
        <CardDetailsSection card={card}/>

        <Suggession suggestionCards={remainingCards}/>
      </div>
      )
      : (
        <div>
          {/* If card does not exist show a fall back ui */}
          <h1 className="text-center block">This cannot e found. Back to home </h1>
        </div>
      )  
    }
    </div>
  )
}



export default Page
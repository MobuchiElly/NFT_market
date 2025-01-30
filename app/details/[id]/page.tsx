"use client"

import { useParams } from "next/navigation"
import cards from "@/constants/cardData"
import { CardProps } from "@/types/components"
import Image from "next/image";
import Suggession from "@/components/sectionComponents/Suggession";


const Page = () => {
  const { id } = useParams();

  const card: CardProps | undefined = cards.find((card) => card.id === id);
  const remainingCards: CardProps[] = cards.filter((card) => card.id !== id);

  return (
    <div>
    { card ?      
      (
      <div className="flex flex-col items-center space-y-16">
        
        <div className="w-[78vw] h-[56rem border border-[#262840] rounded-[20px] flex gap-6 p-4">
          <div className="flex-1">
            <Image
            src={card.src[0].lg}
            className="w-full rounded-[20px]"
            alt="image 1"
            width={400}
            height={520}
            priority
            />
          </div>
          <div className="flex-1">
            <h3 className="text-white mb-2">{card.title}</h3>
            <p className="text-body-medium-16 text-[#7780A1]">Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor pulvinar ultricies dolor feugiat aliquam commodo.</p>
            <div className="flex gap-8 my-8">
              <div className="flex gap-4">
                <Image
                src={card.creator[0].src}
                className="rounded-[20px]"
                alt="image 1"
                width={40}
                height={40}
                priority
                />
                <div>
                  <p>Creator</p>
                  <p className="h8 text-white">{card.creator[0].name}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Image
                src={card.collection[0].src}
                className="rounded-[20px]"
                alt="image 1"
                width={40}
                height={40}
                priority
                />
                <div>
                  <p>Creator</p>
                  <p className="h8 text-white">{card.collection[0].name}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

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
import Image from "next/image"
import { CardProps } from "@/types/components"


const SectionH = ({cards}: {cards: CardProps[]}) => {
  return (
    <div className='flex justify-center gap-3'>
        {
            cards.map((card) => (
                <div key={card.id} className="">
                    <Image
                    src={card.src[0].sm}
                    className="rounded-[20px]"
                    alt="image 1"
                    width={89}
                    height={89}
                    priority
                    />
                    <div className="text-center">
                      <p className="text-body-medium-14 text-[#7780A1]">{card.amount} ETH</p>   
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default SectionH
import Image from "next/image"
import cards from "@/constants/cardData"


const SectionH = () => {
  return (
    <div className='flex justify-center'>
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
                    <div>
                     <p className="text-body-medium-14">{card.amount} ETH</p>   
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default SectionH
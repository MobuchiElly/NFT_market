import Image from "next/image"
import cards from "@/constants/cardData"

const CardMd = () => {
    const card = cards[1];

  return (
    <div className='bg-white text-black flex justify-center items-center'>
        <div className="">
            <div className="flex justify-center  mb-3">
                <Image
                src={card.src[0].md}
                className="rounded-[20px] w-full"
                alt="image 1"
                width={212}
                height={355}
                priority
                />
            </div>
            <div className="flex mb-4">
             <p className="flex-1 flex justify-start items-start pt-2 h7 text-justify">{card.title}</p>
            </div>
       
            <div className="flex justify-between items-center  mb-4">
              <div className="flex items-center gap-2 mt-2">
                  <span>
                  <Image
                  src="/imgs/stopWatch.png"
                  className="rounded-[20px]"
                  alt="image 1"
                  width={20}
                  height={20}
                  priority
                  />
                  </span>
                  <span className="body-normal-14 stopWatch.pngtext-dark-100">{card.timeLeft}</span>
              </div>
              <div className="flex justify-end items-start flex-1 text-purple-dark-100 h-7">
                <span className="bg-purple-100 py-[8px] px-[14px] font-[600]">{card.amount} ETH</span>
            </div>
            </div>

            <div className="flex justify-between border-t pt-4 pb-2">
                <div className="flex items-center space-x-4">
                    <p className="text-grey-100 body-normal-14">{card.bidders.length} people are watching</p>
                </div>
                <div className="flex items-center gap-2 ml-6">       
                    <span>
                        <Image
                        src="/imgs/loveIcon.png"
                        className="rounded-[20px]"
                        alt="image 1"
                        width={17}
                        height={15}
                        priority
                        />      
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CardMd

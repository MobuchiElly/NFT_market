import Image from "next/image"
import cards from "@/constants/cardData"
import Link from "next/link";

const CardSm = () => {
    const card = cards[2];

  return (
    <div className=''>
      <Link href={`/details/${card.id}`} className="flex items-center gap-4">  
        <div className="flex">
            <Image
            src={card.src[0].sm}
            className="rounded-[20px]"
            alt="image 1"
            width={120}
            height={120}
            priority
            />
        </div>
  
        <div>
          <div className="flex mb-4">
            <p className="flex-1 flex justify-start items-start pt-2 h7 text-justify text-white">{card.title}</p>
          </div>
  
          <div className="flex justify-between items-center  mb-4">
            <div className="flex items-center gap-2 mt-2">
                <Image
                src="/imgs/stopWatch.png"
                className="rounded-[20px]"
                alt="image 1"
                width={20}
                height={20}
                priority
                />
                <span className=".body-normal-14 pt-1 text-[#ffffff]">{card.timeLeft}</span>
            </div>
  
            <div className="flex justify-end items-start flex-1 text-purple-dark-100 h-7">
              <span className="bg-[#514CFF26] text-white py-[6px] px-[10px] font-[600]">{card.amount} ETH</span>
          </div>
          </div>
  
          <div className="flex justify-between pb-2">
              <p className="text-grey-100 body-normal-14">{card.bidders.length} people are watching</p>
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
      </Link>
    </div>
  )
}

export default CardSm

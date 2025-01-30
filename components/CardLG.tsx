import Image from "next/image"

const CardLG = ({card}) => {

  return (
    <div className='rounded-[20px]  flex justify-center items-center px-6'>
        <div className="">
            <div className="flex justify-center mb-4 h-[520px] min-w-[400px]">
                <Image
                src={card.src}
                className="rounded-[20px]"
                alt="image 1"
                width={400}
                height={520}
                priority
                />
            </div>
            <div className="flex mb-4">
             <h6 className="flex-1 flex justify-start items-start pt-2 text-white">{card.title}</h6>
             <div className="flex justify-end items-start flex-1 text-purple-dark-100 h-7">
                <span className="bg-[#514CFF26] py-[8px] px-[14px] font-[600]">{card.amount} ETH</span>
            </div>
            </div>
       
            <div className="flex items-center gap-2 mb-4">
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
                <span className="body-normal-14 text-[#FFFFFF]">{card.timeLeft}min left</span>
            </div>

            <div className="flex justify-between border-t pt-4">
                <div className="flex items-center space-x-4">
                    <div className="flex p-0 items-start">
                        {
                            card.bidders.map((imgSrc, index) => (
                            <div  key={imgSrc + index} className="flex p-0 items-start">
                                <Image
                                src={imgSrc}
                                className="border-5 border-white"
                                alt={`userImage${index}`}
                                width={32}
                                height={32}
                                priority
                                />
                            </div>        
                            ))
                        }
                    </div>
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
                    <span className="text-grey-100 ">{card.likes}</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CardLG


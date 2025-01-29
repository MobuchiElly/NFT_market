import Image from "next/image"

const CardLG = () => {
  return (
    <div className='w-[448px] h-[767px] rounded-[20px] bg-white text-black flex flex-col justify-center items-center'>
        <div>
            <div>
                <Image
                src="/imgs/nftImage1.png"
                alt="image 1"
                width={400}
                height={520}
                priority
                />
            </div>
            <div>
             <p>Tristique diam a, enim, eros tellus. Viverra etiam</p>
             <span>2.55 ETH</span>
            </div>
            <div className="border-b">
                {'O'} 57:15 min left
            </div>
            <div className="flex">
                <div>
                    image
                </div>
                <div>14 people are watching</div>
                <span>{'0'} 14</span>
            </div>
        </div>
    </div>
  )
}

export default CardLG


import Image from "next/image"
import { ComponentProps } from "@/types/components"

const NFT_Market = ({classname}: ComponentProps) => {
  return (
    <div>
        <Image
        className="inline"
        src="/imgs/sygnet.png"
        alt="NFT market logo"
        width={34}
        height={34}
        priority
        />
        <div className={`inline ${classname ? classname : ''}`}>
            NFT Market
        </div>
    </div>
  )
}

export default NFT_Market
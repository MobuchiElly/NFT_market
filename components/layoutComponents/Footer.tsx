import React from 'react'
import NFT from '@/components/NFT_Market'
import Image from 'next/image'
import socialIcons from '@/constants/socialIcons'

const Footer = () => {


  return (
    <footer className='flex justify-center items-center p-20 px-32'>
      <div className='flex h-[22rem] lg:w-[70vw]'>

        <div className='flex flex-col justify-between flex-1 p-8 border border-[#262840] rounded-l-[20px]'>
          <NFT />
          <div className='text-grey-100 text-[0.9rem] flex gap-10'>
            <span>
              support
            </span>
            <span>
              terms of service
            </span>
            <span>
              license
            </span>
          </div>
        </div>

        <div className='flex flex-col justify-between flex-1 p-8 border border-[#262840]'>
          <div className='space-y-4'>
            <p className='h7'>Auction</p>
            <p className='h7'>Roadmap</p>
            <p className='h7'>Discover</p>
            <p className='h7'>Community</p>
          </div>
          <button className='btn btn-primary mb-5'>My account</button>
          <div className='space-x-6'>
            {/* I do not want to repeat the icons like this. I would rather create an array of onjects named socialIcons and save the names, id, src and alt text. I can then loop over the array. I am using typescript an as such should have all my types in my type folder. Help me achiev this */}
            {
              socialIcons.map((icon) => (
                  <span key={icon.id}>
                    <Image
                    className="inline"
                    src={icon.src}
                    alt={icon.alt}
                    width={20}
                    height={20}
                    priority
                    />
                  </span>
              ))
            }
          </div>
        </div>

        <div className='flex flex-col justify-between  flex-1 p-8 border border-[#262840] rounded-r-[20px]'>
          <div className='text-body-medium-16 text-wrap'>
          Nibh volutpat, aliquam id sagittis elementum. Pellentesque laoreet velit, sed egestas in. Id nam semper dolor tellus vulputate eget turpis. 
          </div> 
          <div className="search-container">
            <input type="text" placeholder="Signin" className="search-input" />
            <span className="right-text">Newsletter</span>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer
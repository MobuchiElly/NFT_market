import Image from "next/image"

const Section3Component = () => {
  return (
    <section className="flex justify-center my-36">
      <div className="flex justify-center space-x-3 w-[1392px]">
        <div className="flex-1 flex flex-col space-y-10 justify-center">
          <p className="overlinee">Overline</p>
          <h1 className="text-white">Sapien ipsum scelerisque convallis fusce</h1>
          <p className="text-body-medium-16">Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor pulvinar ultricies dolor feugiat aliquam commodo.</p>
          <div className="flex space-x-3">
            <button className="btn btn-primary">Get started</button>
            <button className="btn btn-secondary text-[#7780A1]">Learn more</button>
          </div>
        </div>
        <div className="flex-1">
          <Image
          src="/imgs/sect3ImgRight.svg"
        alt="image 1"
          width={684}
          height={616}
          priority
          />
        </div>
      </div>
    </section>
  )
}

export default Section3Component
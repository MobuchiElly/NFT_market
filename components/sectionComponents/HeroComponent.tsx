import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="relative min-h-[80vh] flex flex-col items-center pt-24">
      <div className="absolute inset-0 right-20 bg-contain bg-center bg-no-repeat" style={{ backgroundImage: "url('/imgs/Squares.png')" }}></div>
      <div>
        <p className="overlinee uppercase text-[#7780A1]">Non Fungible Tokens</p>
      </div>

        <div className="z-10 w-[837px] py-8 flex items-center">
          <Image
            src="/imgs/bgCover2.png"
            alt="bg cover"
            width={837}
            height={219}
            priority
          />
        </div>
      <div>
        <p className="overlinee text-[#7780A1]">Discover, collect and sell</p>
      </div>
      <div className="relative flex items-center bg-white shadow-lg rounded-lg mt-6 lg:min-w-[640px] px-4">
        <input
            type="text"
            placeholder="Items, collections and creators"
            className="flex-grow bg-transparent px-2 py-4 outline-none text-black"
          />
        <div className="flex items-center">
          <div className="h-5 bg-gray-300"></div>
          <div className="flex gap-6 items-center flex-grow">
            <div className="mr-6">
              <span className="text-gray-600  cursor-pointer mr-2">|</span>
              <span className="text-gray-600">Category</span>
            </div>
            <Image
            src="/imgs/dropdown.svg"
            alt="image 1"
            width={8}
            height={4}
            priority
            />
            <Image
            src="/imgs/searchIcon.svg"
            className="pt-1"
            alt="image 1"
            width={19}
            height={19}
            priority
            />
        </div>
        </div>
      </div>
      <div className="flex items-center mt-24 gap-12">
        {
          ["/imgs/ritterIcon.svg", "/imgs/nikeIcon.svg", "/imgs/addidasIcon.png", "/imgs/newHollandIcon.png"].map((src,index) => (
            <div key={src+ index}>
              <Image
              src={src}
              className="w-full h-full py-2"
              alt={"image" + index}
              width={51}
              height={43}
              priority
              />
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default HeroSection;

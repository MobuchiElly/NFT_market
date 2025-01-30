import NFT from "@/components/NFT_Market"

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center sticky top-0 z-50 px-10 py-8 bg-[#060714]'>
        <NFT classname="text-dark-100"/>
        <div className="flex gap-16 text-[#7780A1] text-body-medium-16">
            <span>Auctions</span>
            <span>Roadmaps</span>
            <span>Discover</span>
            <span>Community</span>
        </div>
        <div className="flex gap-4">
            <button className="btn btn-secondary text-grey-100">Contact</button>
            <button className="btn btn-primary hover:btn-primary-hover">My account</button>
        </div>        
    </nav>
  )
}

export default Navbar
import React, {useState} from 'react'
import { AiFillTag, AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai'
import { BsFillCartFill, BsFillSaveFill } from 'react-icons/bs'
import { TbTruckDelivery } from 'react-icons/tb'
import { FaUserFriends, FaWallet } from 'react-icons/fa'
import { MdHelp, MdFavorite } from 'react-icons/md'

const Navbar = () => {
    const [nav, setNav] = useState(false)
  return (
    <div className='bg-black'>
    <div className='max-w-[1440px] mx-auto flex justify-between items-center p-4'>
        <div className='flex items-center'>
            <div onClick={()=>{setNav(!nav)}} className='cursor-pointer text-yellow-600'>
                <AiOutlineMenu size={30}/>
            </div>
            <h2 className="text-xl sm:text-3xl p-2 text-yellow-600">Best <span className='font-bold text-green-600'>Eats</span></h2>
            <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
                <p className='bg-black text-white rounded-full p-2'>Delivery</p>
                <p className='p-2'>Pickup</p>
            </div>
        </div>

        <div className='bg-gray-200 rounded-full flex items-center px-2 w-[140px] sm:w-[400px] lg:w-[500px]'>
            <AiOutlineSearch size={25}/>
            <input type="text" placeholder='Search food' className="bg-transparent p-2 focus:outline-none w-full "/>
        </div>
        <button className='hidden md:flex bg-black text-white px-4 py-2 rounded-full items-center gap-2 '>
            <BsFillCartFill /> Cart
        </button>

        {/* Mobile Menu  */}

        {/* Overlay  */}
        {nav ? <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div> : ""}

        {/* Side drawer menu */}
        <div className={nav? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300" : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"}>
            <AiOutlineClose onClick={()=>{setNav(!nav)}} size={25} className="absolute top-4 right-4 cursor-pointer"/>
            <h2 className='text-2xl p-4'>Best <span className='font-bold'>Eats</span></h2>
            <nav>
                <ul className='flex w-full px-3 flex-col text-gray-800'>
                    <li className='text-xl py-4 '> <a href="/" className='cursor-pointer flex items-center gap-3'> <TbTruckDelivery size={25}/> Orders </a> </li>
                    <li className='text-xl py-4'> <a href="/" className='cursor-pointer flex items-center gap-3'> <MdFavorite size={25}/> Favorites </a> </li>
                    <li className='text-xl py-4'> <a href="/" className='cursor-pointer flex items-center gap-3'> <FaWallet size={25}/> Wallet </a> </li>
                    <li className='text-xl py-4'> <a href="/" className='cursor-pointer flex items-center gap-3'> <MdHelp size={25}/> Help </a> </li>
                    <li className='text-xl py-4'> <a href="/" className='cursor-pointer flex items-center gap-3'> <AiFillTag size={25}/> Promotions </a> </li>
                    <li className='text-xl py-4'> <a href="/" className='cursor-pointer flex items-center gap-3'> <BsFillSaveFill size={25}/> Best Ones </a> </li>
                    <li className='text-xl py-4'> <a href="/" className='cursor-pointer flex items-center gap-3'> <FaUserFriends size={25}/> Invite Friends </a> </li>
                </ul>
            </nav>
        </div>

    </div>
    </div>
  )
}

export default Navbar
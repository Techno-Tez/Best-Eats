import React from 'react'
import heroImg from '../assets/hero-img.png'

const Hero = () => {
  return (
    <div className='bg-gradient-to-b from-black to-slate-800'>
    <div className="max-w-[1440px] h-1/2 mx-auto flex justify-center items-center ">
      <div className='my-4 flex flex-col items-center justify-center sm:flex-row'>
        <div className='pl-5 text-center sm:text-left w-full'>
          <h2 className='text-2xl sm:text-5xl md:text-6xl  text-white'>The <span className='font-bold text-yellow-600'>Best</span></h2>
          <h2 className='text-2xl sm:text-5xl md:text-6xl text-white'> <span className='font-bold text-yellow-600'>Food </span>Delivered</h2>
        </div>
        <img className="w-1/2 sm:w-3/5" src={heroImg} alt="" />
      </div>
    </div>
    </div>
  )
}

export default Hero
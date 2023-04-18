import React from 'react'
import { categories } from '../data/data.js'

const Category = () => {
  return (
    <div className="bg-gradient-to-b from-slate-800 to-black max-w-[1440px] h-max">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-yellow-600 text-center">Our Offerings</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 py-7 px-4">
            {categories.map(({id,name,image},index)=>{
            return <div key={index} className="bg-gray-400 flex justify-between items-center pl-3 rounded-lg hover:scale-105 duration-300">
                <h4 className='font-bold text-sm'>{name}</h4>
                <img src={image} alt={name} className="w-[18vw] sm:w-[12vw] lg:w-[8vw] h-full object-cover"/>
            </div>
            })}
        </div>

        <footer className='text-center text-white h-[15vh] pt-8'>
            <h4>Copyright &#169; 2023 Best Eats &#174;</h4>
        </footer>
    </div>
  )
}

export default Category
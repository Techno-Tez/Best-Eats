import React, { useState } from 'react'
import { data } from '../data/data.js'

const Food = () => {
    const [food, setFood] = useState(data)

    const filterCategory = (category) => {
        setFood(data.filter((food) => {
            return (food.category === category)
        }))
    }
    const filterPrice = (price) => {
        setFood(data.filter((food) => {
            return (food.price === price)
        }))
    }

    return (
        <div className='bg-gradient-to-b from-black to-slate-800'>
            <div className='h-max max-w-[1440px] py-10 mx-auto '>
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-yellow-600 text-center">Top Rated Menu</h2>
                <div className='mx-auto flex flex-col flex-wrap sm:flex-row gap-2 sm:gap-0  max-w-[1200px] justify-between p-3'>
                    <div>
                        <p className='text-yellow-700 text-lg font-semibold'>Category</p>
                        <div className='flex gap-1 my-3 flex-wrap sm:gap-3'>
                            <button className='px-4 py-1 rounded-lg border border-none text-gray-700 bg-white hover:bg-orange-600 hover:text-white duration-200' onClick={()=>{setFood(data)}}>All</button>
                            <button className='px-4 py-1 rounded-lg border border-none text-gray-700 bg-white hover:bg-orange-600 hover:text-white duration-200' onClick={()=>{filterCategory('burger')}}>Burgers</button>
                            <button className='px-4 py-1 rounded-lg border border-none text-gray-700 bg-white hover:bg-orange-600 hover:text-white duration-200' onClick={()=>{filterCategory('pizza')}}>Pizza</button>
                            <button className='px-4 py-1 rounded-lg border border-none text-gray-700 bg-white hover:bg-orange-600 hover:text-white duration-200' onClick={()=>{filterCategory('salad')}}>Salad</button>
                            <button className='px-4 py-1 rounded-lg border border-none text-gray-700 bg-white hover:bg-orange-600 hover:text-white duration-200' onClick={()=>{filterCategory('chicken')}}>Chicken</button>
                        </div>
                    </div>
                    <div>
                        <p className='text-yellow-700 text-lg font-semibold'>Price</p>
                        <div className='flex gap-1 my-3 sm:gap-3'>
                            <button className='px-4 py-1 rounded-lg border border-none text-gray-700 bg-white hover:bg-orange-600 hover:text-white duration-200' onClick={()=>{filterPrice('$')}}>$</button>
                            <button className='px-4 py-1 rounded-lg border border-none text-gray-700 bg-white hover:bg-orange-600 hover:text-white duration-200' onClick={()=>{filterPrice('$$')}}>$$</button>
                            <button className='px-4 py-1 rounded-lg border border-none text-gray-700 bg-white hover:bg-orange-600 hover:text-white duration-200' onClick={()=>{filterPrice('$$$')}}>$$$</button>
                            <button className='px-4 py-1 rounded-lg border border-none text-gray-700 bg-white hover:bg-orange-600 hover:text-white duration-200' onClick={()=>{filterPrice('$$$$')}}>$$$$</button>
                        </div>
                    </div>
                </div>

                {/* display images  */}

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pt-4 px-3'>
                    {food.map((item, index) => {
                        return <div key={index} className="shadow-lg shadow-orange-700 hover:scale-105 duration-300 rounded-[12px]">
                            <img src={item.image} alt={item.name} className="w-full h-[200px] object-cover rounded-t-[12px]" />
                            <div className='rounded-b-[12px] bg-yellow-400 relative flex w-full justify-between items-center px-3 py-3'>
                                <p className='text-md font-semibold'>{item.name}</p>
                                <p>
                                    <span className='bg-orange-600 text-white p-1 rounded-xl'>{item.price}</span>
                                </p>
                            </div>
                        </div>
                    })}
                </div>

            </div>

        </div>
    )
}

export default Food
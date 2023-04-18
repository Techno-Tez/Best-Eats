import React from 'react'

const Cards = () => {
  const cards = [
    {
      id: 1,
      title: "Cheezy Pizzas",
      description: "Buy 1 Get 1 free",
      img: "https://images.pexels.com/photos/365459/pexels-photo-365459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 1,
      title: "Budgy Buffet",
      description: "Starting from 299",
      img: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 1,
      title: "Diljeet Biryani",
      description: "Your Hyderabadi Vibes",
      img: "https://images.pexels.com/photos/14731729/pexels-photo-14731729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 1,
      title: "Chakk de Paneer",
      description: "Polis aa gayi polis",
      img: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 1,
      title: "Big Burgers",
      description: "Starting from 49",
      img: "https://images.pexels.com/photos/9469654/pexels-photo-9469654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 1,
      title: "Delight Deserts",
      description: "Creamy & Delicious",
      img: "https://images.pexels.com/photos/1343504/pexels-photo-1343504.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ]
  return (
    <div className='bg-gradient-to-b from-slate-800 to-black'>
    <div className='h-max max-w-[1440px] mx-auto'>
      <div className='max-w-full mx-auto px-4 py-10 grid sm:grid-cols-3 gap-6'>
        {/* Card */}
        {cards.map(({ id, description, img, title }) => {
          return <div className="rounded-xl relative shadow-md shadow-orange-700">
            {/* Overlay  */}
            <div className="absolute w-full h-full bg-black/50 rounded-xl text-white pl-4 pt-3">
              <p className='text-2xl font-bold'>{title}</p>
              <p className='text-lg py-1'>{description}</p>
              <button className='bg-yellow-600 p-[5px] rounded-md absolute bottom-4 hover:scale-105 duration-200'>Order Now</button>
            </div>
            <img className='w-full max-h-[170px] rounded-xl object-cover' src={img} alt="" />
          </div>
        })}
      </div>
    </div>
    </div>
  )
}

export default Cards
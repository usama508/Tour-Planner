/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

function Hero() {
  return (
    <div className='w-full h-[90vh]'>
        <img src='https://images.unsplash.com/photo-1471922694854-ff1b63b20054?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80' alt="" className='w-full h-full object-cover'/>
        <div className='max-w-[1140px] m-auto'>
            <div className='absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col
                    text-white p-4'>
                <h1 className='font-bold text-4xl text-red-500'>Find Your Special Trip</h1>
                <h2 className='text-4xl py-4 italic text-red-500'>With Weekaway</h2>
                <p className='text-red-400'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus sunt iure ab eaque doloribus nesciunt illo incidunt expedita aspernatur, accusamus fugiat nisi sapiente rerum sed commodi adipisci corrupti, maxime cum?
                </p>
            </div>
        </div>
    </div>
  )
}

export default Hero
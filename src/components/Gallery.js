import React from 'react'

function Gallery() {
  return (
    <div id='gallery' className='max-w-[1140px] m-auto w-full px-4 py-16'>
      <h2 className='text-center text-gray-700 p-4'>Gallery</h2>
      <div className='grid sm:grid-cols-5 gap-4'>
        <div className='sm:col-span-3 col-span-2 row-span-2'>
            <img src="https://images.unsplash.com/photo-1645447556616-e9d1c52e8037?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" alt="/" className='w-full h-full object-cover'/>
        </div>
        <div >
            <img src="https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=725&q=80" alt="/" className='w-full h-full object-cover'/>
        </div>
        <div >
            <img src="https://plus.unsplash.com/premium_photo-1675039871348-6a717479cf37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80" alt="/" className='w-full h-full object-cover'/>
        </div>
        <div >
            <img src="https://images.unsplash.com/photo-1554254464-7046778097bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" alt="/" className='w-full h-full object-cover'/>
        </div>
        <div >
            <img src="https://images.unsplash.com/photo-1558606675-fe434d8305a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="/" className='w-full h-full object-cover'/>
        </div>
        
      </div>
    </div>
  )
}

export default Gallery
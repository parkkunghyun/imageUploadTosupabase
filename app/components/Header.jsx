import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
      <div className='flex w-4/5 gap-4 justify-center items-center mx-auto my-5'>
          <Image src={"/image-logo.jpg"} alt='image-logo' width={150} height={120} />
          <p className='text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500'>Image Upload Project</p>
          <Image src={"/image-logo.jpg"} alt='image-logo' width={150} height={120} />
    </div>
  )
}

export default Header
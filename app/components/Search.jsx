import React from 'react'
import { MdOutlineImageSearch } from "react-icons/md";

const Search = ({search, setSearch}) => {
  return (
      <div className='w-4/5 mx-auto flex items-center justify-center mb-10'>
          <div className='flex border-2 border-gray-600 rounded-lg shadow-md items-center w-[600px] gap-2 p-2'>
            <MdOutlineImageSearch className='ml-2 text-2xl' />
              <input
                  value={search} onChange={(e) => setSearch(e.target.value)}
                  className='flex-1 focus:outline-none font-bold'
                  type="text" placeholder='Image를 검색해주세요.' />
          </div>
    </div>
  )
}

export default Search
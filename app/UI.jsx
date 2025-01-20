"use client";

import React, { useState } from 'react'
import Header from './components/Header'
import Search from './components/Search'
import ImageCardList from './components/ImageCardList'
import FileDragDrop from './components/FileDragDrop';


const UI = () => {
    const [searchText, setSearchText] = useState("");
  return (
      <div className='w-full flex flex-col gap-4 items-center h-screen'>
          <Header />
          <FileDragDrop/>
          <Search search={searchText} setSearch={setSearchText} />
          <ImageCardList search={searchText} />
    </div>
  )
}

export default UI
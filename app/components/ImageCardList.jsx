import React from 'react'
import ImageCard from './ImageCard'
import { useQuery } from '@tanstack/react-query'
import { searchFiles } from '../action/supabaseStorageAction'



const ImageCardList = ({ search }) => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ["images", search],
        queryFn: () => searchFiles(search)
    });

    if (isError) <p>Error가 떴습니다. 서버를 확인해주세요.</p>
    if (isLoading) {
        return (
            <div className="flex  justify-center h-screen">
                <p className="font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-red-500 to-yellow-500 ">
                    전체 image를 Loading중입니다...
                </p>
            </div>
        );
    }

  return (
      <div className='mx-auto w-4/5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 '>
          {data && data.map((image) => (
              <ImageCard key={image.id} image={image} />
          ))}
    </div>
  )
}

export default ImageCardList
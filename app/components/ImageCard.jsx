import { getImageUrl } from '@/utils/storage'
import { useMutation } from '@tanstack/react-query'
import Image from 'next/image'
import React from 'react'
import { deleteFile } from '../action/supabaseStorageAction'
import { queryClient } from '../config/ReactQueryClientProvider'
import { MdDeleteForever } from "react-icons/md";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const ImageCard = ({ image }) => {
  const deleteFileMutation = useMutation({
    mutationFn: deleteFile,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["images"],
      })
    }
  });

  return (
      <div className='relative'>
        <Image src={getImageUrl(image.name)} alt='image'
          className="rounded-lg w-full aspect-square"  width={200} height={200} />
      <p className='font-bold text-center'>{image.name.split(".")[0]}</p>
        <div onClick={() => deleteFileMutation.mutate(image.name)} className='hover:scale-105 absolute  top-2 right-2'>
          {deleteFileMutation.isPending ? <AiOutlineLoading3Quarters className="text-4xl  bg-white p-1 rounded-md"/> : <MdDeleteForever className="text-4xl bg-white p-1 rounded-md"/>}
        </div>
      </div>
  )
}

export default ImageCard
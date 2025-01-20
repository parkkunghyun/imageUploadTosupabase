"use client";

import { uploadFile } from "../action/supabaseStorageAction";
import { useMutation } from "@tanstack/react-query";
import { useCallback } from "react";
import { queryClient } from "../config/ReactQueryClientProvider";
import { useDropzone } from "react-dropzone";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const FileDragDrop = () => {
  const uploadImageMutation = useMutation({
    mutationFn: uploadFile,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["images"] })
    }
  });

  const onDrop = useCallback(async (acceptedFiles) => {
    const file = acceptedFiles?.[0];
    if (file) {
        const formData = new FormData();
        formData.append("file",file); // 첫 번째 파일 추가
        const result = await uploadImageMutation.mutateAsync(formData);
        console.log(result);
    }
  }, []);
  
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
        {...getRootProps()}
        className="cursor-pointer w-[400px] py-10 rounded-md flex flex-col items-center border-2 border-dotted border-indigo-700"
    >
        <input {...getInputProps()} />
        {uploadImageMutation.isPending ?
            (<AiOutlineLoading3Quarters className="text-4xl" />) 
        : (isDragActive ? (
            <p>파일을 여기에 놓아주세요</p>
        ) : (
            <p>파일을 여기에 끌어다 놓거나 클릭하여 업로드 해주세요.</p>
        ))}
    </div>
);
}

export default FileDragDrop
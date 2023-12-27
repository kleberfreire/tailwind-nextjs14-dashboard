'use client'
import { User } from "lucide-react";
import { useFileInput } from "./root";
import { useMemo } from "react";

export function ImagePreview() {
  const { files } = useFileInput()

  const previewURL = useMemo(() => {
    if (files.length === 0) { 
      return null
    }

    return URL.createObjectURL(files[0])
  }, [files])
  
  if (previewURL === null) {
    return (
      <div className="gri flex items-center justify-center rounded-full bg-violet-50 w-16 h-16">
        <User className="w-8 h-8 text-violet-500"/>
      </div>
    )
  } else {
    return (
      <img src={previewURL} alt="" className="w-16 h-16 rounded-full object-cover"/>
    )
  }

  return (
    <div className="gri flex items-center justify-center rounded-full bg-violet-50 w-16 h-16">
      <User className="w-8 h-8 text-violet-500"/>
    </div>
  )
}
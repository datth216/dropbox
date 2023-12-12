'use client'
import { MAX_SIZE_IMPORT } from '@/constants'
import { cn } from '@/lib/utils'
import React from 'react'
import DropzoneComponent from 'react-dropzone'

function Dropzone() {
  return (
    <DropzoneComponent minSize={0} maxSize={MAX_SIZE_IMPORT} onDrop={acceptedFiles => console.log(acceptedFiles)}>
      {({ getRootProps, getInputProps, isDragActive,
        isDragAccept,
        isDragReject, fileRejections }) => {
        const isFileTooLarge = fileRejections.length > 0 && fileRejections[0].file.size > 20971520
        return (
          <section className='px-[20px]'>
            <div {...getRootProps()} className={cn("bg-[#fafafa] dark:bg-slate-600 border-2 h-52 items-center mt-3 border-dashed flex justify-center text-center rounded-lg w-full", isDragActive ? "text-white bg-[#0061fe] animate-pulse" : "")}>
              <input {...getInputProps()} />
              {!isDragActive && (<p>Drop some files here ...</p>)}
              {isDragAccept && (<p>All files will be accepted</p>)}
              {isDragReject && (<p>Some files will be rejected</p>)}
              {isFileTooLarge && (<p className="text-danger">File is too large.</p>)}
            </div>
          </section>
        )
      }}
    </DropzoneComponent>
  )
}

export default Dropzone
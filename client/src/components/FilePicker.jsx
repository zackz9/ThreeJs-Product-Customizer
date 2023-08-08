import React from 'react'
import CustomButton from './CustomButton'

const FilePicker = ({ file, setFile, readingFile }) => {
  return (
    <div className='filepicker-container'>
      <div className="flex flex-1 flex-col ">
        <input 
        type="file" 
        id='file-upload' 
        accept='image/*'
        onChange={(e) => setFile(e.target.files[0])} />

        <label htmlFor="file-upload" className='filepicker-label'>
          Upload file
        </label>
        
        <p className='mt-2 text-xs truncate text-gray-600'>
          {file === '' ? 'No file selected' : file.name }
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        <CustomButton
          title='Logo'
          handleClick={() => readingFile('logo')}
          type='outline'
          customStyles='text-xs'
        ></CustomButton>
      
        <CustomButton
          title='Full'
          handleClick={() => readingFile('full')}
          type='filled'
          customStyles='text-xs'
        ></CustomButton>
      </div>
    </div>
  )
}

export default FilePicker
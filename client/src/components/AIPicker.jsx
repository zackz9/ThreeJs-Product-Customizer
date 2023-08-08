import React from 'react'
import CustomButton from './CustomButton'

const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
  return (
    <div className='aipicker-container' title="In Maintenance mode">
      <textarea 
      className="aipicker-textarea"
      placeholder='Ask AI for an image...' 
      rows="5" 
      value={prompt} 
      onChange={(e) => setPrompt(e.target.value)}></textarea>

      <div className="flex flex-wrap gap-3">
        {
          generatingImg ? (
            <CustomButton 
              type='outline'
              title='Asking AI...'
              customStyles='text-xs'
              
            ></CustomButton>

          ) : (
            <>
              <CustomButton
                type='outline'
                title='AI Logo'
                customStyles='text-xs'
                handleClick={() => handleSubmit('logo')}
              ></CustomButton>

              <CustomButton
                type='filled'
                title='AI Full'
                customStyles='text-xs'
                handleClick={() => handleSubmit('full')}
              ></CustomButton>
            </>
          )
        }
      </div>
    </div>
  )
}

export default AIPicker
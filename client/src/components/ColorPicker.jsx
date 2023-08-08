import React from 'react'
import {SketchPicker} from 'react-color'
import { useSnapshot } from 'valtio'
import state from '../store'

const ColorPicker = () => {

  const snap = useSnapshot(state)


  return (
    <div className='absolute left-full ml-3'>
      <SketchPicker
        color={snap.bgColor}
        disableAlpha
        onChange={(color) => state.bgColor = color.hex}

      ></SketchPicker>
    </div>
  )
}

export default ColorPicker
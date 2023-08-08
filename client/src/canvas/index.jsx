import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, Center } from '@react-three/drei'

import Product from './Product'
import Backdrop from './Backdrop'
import CameraRig from './CameraRig'
 
const CanvasModel = () => {
  return (
    <Canvas
      shadows
      camera={{position: [0, 0, 0], fov: 21}}
      gl={{ preserveDrawingBuffer: true}}
      className='w-full max-w-full h-full transition-all ease-in-out'
    >
      <ambientLight intensity={0.5} />
      <Environment preset='city'></Environment>

      <CameraRig>
        <Backdrop/>
          <Center>
            <Product></Product>
          </Center>
      </CameraRig>

    </Canvas>
  )
}

export default CanvasModel
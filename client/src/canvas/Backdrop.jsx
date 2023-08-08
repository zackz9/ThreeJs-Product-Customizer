import React, {useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'
import { AccumulativeShadows, RandomizedLight } from '@react-three/drei'


const Backdrop = () => {

  const shadows = useRef();

  return (
    <AccumulativeShadows
      ref={shadows}
      position={[0, 0, -0.14]}
      rotation={[Math.PI / 2, 0, 0 ]}
      scale={10}
      frames={60}
      alphaTest={0.83}
      temporal
    >
      <RandomizedLight 
        amount={4}
        radius={9}
        intensity={0.55}
        ambient={0.24}
        position={[5, 5, -10 ]}
      />
      <RandomizedLight 
        amount={4}
        radius={5}
        intensity={0.25}
        ambient={0.6}
        position={[-4, 5, -8 ]}
      />
    </AccumulativeShadows>
  )
}

export default Backdrop
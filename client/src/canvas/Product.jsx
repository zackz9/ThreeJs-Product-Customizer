import React from 'react'
import { easing } from 'maath'
import { useSnapshot } from 'valtio'
import { useFrame } from '@react-three/fiber'
import { Decal, useGLTF, useTexture } from '@react-three/drei'

import state from '../store'

const Product = () => {

    const snap = useSnapshot(state);

    // const geometryCust = new THREE.BoxGeometry( 1, 1, 1 );
    // const materialCust = new THREE.MeshBasicMaterial( {color: 0x00ff00} );


    const { nodes, materials } = useGLTF('/shirt_baked.glb');

    // console.log({nodes, materials});

    const logoTexture = useTexture(snap.logoDecal);
    const fullTexture = useTexture(snap.fullDecal);

    useFrame((state, delta) => {
        easing.dampC(materials.lambert1.color, snap.bgColor, 0.25, delta);

    })

    const stateString = JSON.stringify(snap);
    
  return (
    <group key={stateString}>
        <mesh 
            castShadow
            dispose={null}
            material-roughness={1}
            material={materials.lambert1}
            geometry={nodes.T_Shirt_male.geometry}
        >
            {snap.isFullTexture && (
                <Decal 
                    position={[0, 0, 0]}
                    rotation={[0, 0, 0]}
                    scale={1}
                    map={fullTexture}
                />
            )}

            {snap.isLogoTexture && (
                <Decal 
                    position={[0, 0.04, 0.15]}
                    rotation={[0, 0, 0]}
                    scale={0.15}
                    map={logoTexture}
                    depthTest={false}
                    depthWrite={true}
                />
            )}

        </mesh>

    </group>
  )
}

export default Product
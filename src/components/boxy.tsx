import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { XR } from '@react-three/xr'
import { Environment } from '@react-three/drei'

export function Boxy() {
  return (
    <>
      <mesh name={'boxy'} visible={true} scale={1} position={0.5} castShadow={true} receiveShadow={true}>
        <boxGeometry name={'boxy'} args={[1, 1, 1, undefined, 1]} />
        <meshStandardMaterial
          color={'#9a2d2d'}
          visible={true}
          name={'boxy'}
          transparent={false}
          opacity={0.52}
          wireframe={false}
        />
      </mesh>
    </>
  )
}

export default Boxy

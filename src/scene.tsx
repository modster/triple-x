import { Boxy } from './components/boxy'
import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { XR } from '@react-three/xr'
import { Environment } from '@react-three/drei'

const Ground = () => {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
      <planeGeometry args={[100, 100, 1, 1]} />
      <meshPhongMaterial attach="material" color={0xffffff} />
    </mesh>
  )
}

const Skybox = () => {
  return (
    <mesh>
      <boxGeometry args={[100, 100, 100]} />
      <meshPhongMaterial attach="material" color={0x000000} envMapIntensity={1} />
    </mesh>
  )
}

const App = () => {
  return (
    <Canvas>
      <XR>
        <Suspense fallback={null}>
          <Ground />
          <Skybox />
          <Boxy />
        </Suspense>
      </XR>
    </Canvas>
  )
}

export default App
